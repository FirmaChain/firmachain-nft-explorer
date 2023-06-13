import { useEffect, useMemo, useRef, useState } from 'react';
import { FirmaSDK, NftItemType } from '@firmachain/firma-js';
import { useQuery, UseQueryOptions } from 'react-query';

import { FIRMACHAIN_CONFIG } from '../../config';
import { shuffleArray, wait } from '../../utils/common';
import { INFTStateProps } from './index';

import { getNFTMetaData, getNFTsListForFeatured, getNFTsListForGallery } from './api';

const firmaSDK = new FirmaSDK(FIRMACHAIN_CONFIG);

const queryKeys = {
  featuredNFTsIdList: 'FEATURED_NFTS_ID_LIST',
  galleryNFTsIdList: 'GALLERY_NFTS_ID_LIST',
  nftMetaData: 'NFT_META_DATA',
};

const DEFAULT_QUERY_OPTION: UseQueryOptions<any, Error, any, any> = {
  select({ data }: any) {
    return data;
  },
};

const useNFTIdListForFeatured = (params: {}, option?: UseQueryOptions<any, Error, any, any>) =>
  useQuery([queryKeys.featuredNFTsIdList], () => getNFTsListForFeatured(), {
    ...DEFAULT_QUERY_OPTION,
    ...option,
  });

const useNFTIdListForGallery = (params: {}, option?: UseQueryOptions<any, Error, any, any>) =>
  useQuery([queryKeys.galleryNFTsIdList], () => getNFTsListForGallery(), {
    ...DEFAULT_QUERY_OPTION,
    ...option,
  });

const getNFTItemFromId = async (id: string) => {
  try {
    let nft = await firmaSDK.Nft.getNftItem(id);
    let result: NftItemType = {
      id: nft.id,
      owner: nft.owner,
      tokenURI: nft.tokenURI,
    };
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export interface INFTIdListState {
  nftId: number;
  timestamp: string;
}

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      tick();
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const useNFTsForFeatured = () => {
  const [idListFromServer, setIdListFromServer] = useState<Array<INFTIdListState>>([]);
  const [newIdListFromServer, setNewIdListFromServer] = useState<Array<INFTIdListState>>([]);
  const [NFTsList, setNFTsList] = useState<Array<INFTStateProps>>([]);

  useNFTIdListForFeatured(
    {},
    {
      refetchInterval: 10000,
      onSuccess(data: any) {
        let result = data.result.nftList;
        let list = result.map((nft: any) => {
          return {
            nftId: nft.nftId,
            timestamp: nft.timestamp,
          };
        });
        setNewIdListFromServer(list);
      },
      onError(error: any) {
        console.log(error);
      },
    }
  );

  const handleNFTsList = async (list: Array<INFTIdListState>) => {
    try {
      if (idListFromServer.length === 0) {
        let result = await handleDefaultNFTsList(list, true);
        setNFTsList(result.nftList);
        setIdListFromServer(result.idList);
        return;
      }

      const differencesFromNew = list.filter(function (obj) {
        return !idListFromServer.some(function (obj2) {
          return obj.nftId === obj2.nftId;
        });
      });

      if (differencesFromNew.length === 0) return;

      let newList = await handleDefaultNFTsList(differencesFromNew, false);

      setNFTsList([...NFTsList, ...newList.nftList]);
      setIdListFromServer([...idListFromServer, ...newList.idList]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (newIdListFromServer.length > 0) {
      handleNFTsList(newIdListFromServer);
    }
  }, [newIdListFromServer]); // eslint-disable-line react-hooks/exhaustive-deps

  return { NFTsList };
};

export const useNFTsForGallery = () => {
  const [idListFromServer, setIdListFromServer] = useState<Array<INFTIdListState>>([]);
  const [newIdListFromServer, setNewIdListFromServer] = useState<Array<INFTIdListState>>([]);
  const [NFTsList, setNFTsList] = useState<Array<INFTStateProps>>([]);
  const [loadingTick, setLoadingTick] = useState(false);

  const NFTsGalleryList = useMemo(() => {
    return NFTsList;
  }, [NFTsList]);

  useNFTIdListForGallery(
    {},
    {
      refetchInterval: loadingTick ? false : 10000,
      onSuccess(data: any) {
        let result = data.result.nftList;
        let list = result.map((nft: any) => {
          return {
            nftId: nft.nftId,
            timestamp: nft.timestamp,
          };
        });
        handleNewIdListFromServer(list);
      },
      onError(error: any) {
        console.log(error);
      },
    }
  );

  const handleNewIdListFromServer = (list: Array<INFTIdListState>) => {
    setNewIdListFromServer(list);
  };

  const handleNFTsList = async (list: Array<INFTIdListState>) => {
    try {
      if (idListFromServer.length === 0) {
        let result = await handleDefaultNFTsList(list, true);
        setNFTsList(result.nftList);
        setIdListFromServer(result.idList);
        setLoadingTick(true);
        return;
      }

      const differencesFromOrigin = idListFromServer.filter(function (obj) {
        return !list.some(function (obj2) {
          return obj.nftId === obj2.nftId;
        });
      });
      const differencesFromNew = list.filter(function (obj) {
        return !idListFromServer.some(function (obj2) {
          return obj.nftId === obj2.nftId;
        });
      });

      if (differencesFromNew.length === 0) return;

      let cloneList = [...idListFromServer];
      let changeIndexList = [];
      if (idListFromServer.length < 9) {
        for (let i = 0; i < differencesFromNew.length; i++) {
          changeIndexList.push(differencesFromNew[i]);
          cloneList[cloneList.length + i] = differencesFromNew[i];
          let result = await handleNFTState(differencesFromNew[i], '');
          if (result !== undefined) {
            NFTsList[NFTsList.length + i] = result;
          }
        }
      } else {
        for (let i = 0; i < differencesFromOrigin.length; i++) {
          const findIndex = idListFromServer.findIndex((nft) => nft.nftId === differencesFromOrigin[i].nftId);
          changeIndexList.push(findIndex);
          if (findIndex !== -1) {
            cloneList[findIndex] = differencesFromNew[i];
            let result = await handleNFTState(differencesFromNew[i], NFTsList[findIndex].image);
            if (result !== undefined) {
              NFTsList[findIndex] = result;
            }
          }
        }
      }
      setNFTsList([...NFTsList]);
      setIdListFromServer(cloneList);
      setLoadingTick(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNFTsLoadComplete = () => {
    const loadingNFTList = NFTsList.filter((nft) => nft.loading === true);
    for (let i = 0; i < loadingNFTList.length; i++) {
      const findIndex = NFTsList.findIndex((nft) => nft.nftId === loadingNFTList[i].nftId);
      if (findIndex !== -1) {
        const NFT = NFTsList[findIndex];
        NFTsList[findIndex] = {
          ...NFT,
          image: NFT.newImage,
        };
      }
    }
    setNFTsList([...NFTsList]);
    wait(2900).then(() => {
      handleCompleteLoad();
    });
  };

  const handleCompleteLoad = () => {
    const loadingNFTList = NFTsList.filter((nft) => nft.loading === true);
    for (let i = 0; i < loadingNFTList.length; i++) {
      const findIndex = NFTsList.findIndex((nft) => nft.nftId === loadingNFTList[i].nftId);
      if (findIndex !== -1) {
        const NFT = NFTsList[findIndex];
        NFTsList[findIndex] = {
          ...NFT,
          image: NFT.newImage,
          loading: false,
          isNew: true,
        };
      }
    }
    setNFTsList([...NFTsList]);
    setLoadingTick(false);
    wait(10000).then(() => {
      handleRemoveTheNewLabel();
    });
  };

  const handleRemoveTheNewLabel = () => {
    const newNFTList = NFTsList.filter((nft) => nft.isNew === true);
    for (let i = 0; i < newNFTList.length; i++) {
      const findIndex = NFTsList.findIndex((nft) => nft.nftId === newNFTList[i].nftId);
      if (findIndex !== -1) {
        const NFT = NFTsList[findIndex];
        NFTsList[findIndex] = {
          ...NFT,
          isNew: false,
        };
      }
    }
    setNFTsList([...NFTsList]);
  };

  useEffect(() => {
    if (newIdListFromServer.length > 0) {
      handleNFTsList(newIdListFromServer);
    }
  }, [newIdListFromServer]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (loadingTick) {
      wait(2000).then(() => {
        handleNFTsLoadComplete();
      });
    }
  }, [loadingTick]); // eslint-disable-line react-hooks/exhaustive-deps

  return { NFTsGalleryList };
};

const handleDefaultNFTsList = async (list: Array<INFTIdListState>, shuffle: boolean) => {
  try {
    let _list = shuffle ? shuffleArray(list) : list;
    let _NFTsList: Array<INFTStateProps> = [];
    for (let i = 0; i < _list.length; i++) {
      let result = await handleNFTState(_list[i], '');
      if (result !== undefined) {
        _NFTsList.push(result);
      }
    }
    return {
      nftList: _NFTsList,
      idList: _list,
    };
  } catch (error) {
    console.log(error);
    return {
      nftList: [],
      idList: list,
    };
  }
};

const handleNFTState = async (data: INFTIdListState, oldImage: string) => {
  try {
    let nftId = data.nftId;
    let nft = await getNFTItemFromId(data.nftId.toString());

    if (nft !== null) {
      let address: string = nft.owner;
      let name: string = '';
      let image: string = '';
      let timestamp: string = data.timestamp;

      const res = await getNFTMetaData(nft.tokenURI);
      const json = res.data;
      name = json.name;
      image = json.imageURI;
      let backupImage = oldImage === '' ? image : oldImage;

      let result: INFTStateProps = {
        nftId: nftId,
        name: name,
        address: address,
        timestamp: timestamp,
        newImage: image,
        image: backupImage,
        loading: true,
        isNew: false,
      };

      return result;
    }
  } catch (error) {
    console.log(error);
  }
};
