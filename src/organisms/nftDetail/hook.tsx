import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FirmaSDK } from '@firmachain/firma-js';

import { FIRMACHAIN_CONFIG, COLLECTION_LIST } from '../../config';

const firmaSDK = new FirmaSDK(FIRMACHAIN_CONFIG);

export interface INftData {
  nftId: string;
  dappId: string;
  metadata: {
    name: string;
    description: string;
    attributes: { type: string; key: string; description: string; value: string }[];
  } | null;
  details: {
    name: string;
    description: string;
    imageURI: string;
    owner: string;
    transactionHash: string;
    createdBy: string;
    createdAt: string;
  };
}

export const useGetNftData = (dappId: string | undefined, nftId: string | undefined) => {
  const navigate = useNavigate();
  const [nftData, setNftData] = useState<INftData>({
    nftId: '',
    dappId: '',
    metadata: null,
    details: {
      name: '',
      description: '',
      imageURI: '',
      owner: '',
      transactionHash: '',
      createdBy: '',
      createdAt: '',
    },
  });

  useEffect(() => {
    if (nftId !== undefined && dappId !== undefined)
      firmaSDK.Nft.getNftItem(nftId)
        .then((result: { owner: string; id: string; tokenURI: string }) => {
          axios
            .get(result.tokenURI)
            .then((response) => {
              const tokenData: {
                name: string;
                description: string;
                identity: string;
                imageURI: string;
                metaURI: string;
              } = response.data;

              const detailData = {
                name: tokenData.name,
                description: tokenData.description,
                imageURI: tokenData.imageURI,
                owner: result.owner,
                transactionHash: '',
                createdBy: '',
                createdAt: '',
              };

              setNftData({
                nftId,
                dappId,
                metadata: null,
                details: detailData,
              });

              getNftIdByCollection(dappId)
                .then((nftList) => {
                  for (let nft of nftList) {
                    if (nft.nftId === nftId) {
                      setNftData((prevState) => ({
                        ...prevState,
                        details: {
                          ...prevState.details,
                          transactionHash: nft.transactionHash,
                          createdBy: nft.createdBy,
                          createdAt: nft.createdAt,
                        },
                      }));
                    }
                  }
                })
                .catch(() => {});

              axios
                .get(tokenData.metaURI)
                .then((response) => {
                  const metadata: {
                    name: string;
                    description: string;
                    attributes: { type: string; key: string; description: string; value: string }[];
                  } = response.data;

                  setNftData((prevState) => ({ ...prevState, metadata }));
                })
                .catch((error) => {});
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
          navigate('/');
        });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    nftData,
  };
};

export interface INft {
  nftId: string;
  dappId: string;
  transactionHash: string;
  createdBy: string;
  createdAt: string;
}

export interface ICollectionData {
  [dappId: string]: INft[];
}

const getNftIdByCollection = async (currentCollection: string | undefined): Promise<INft[]> => {
  if (currentCollection === undefined) return [];

  let nftCollection: ICollectionData = {};

  for (let i = 0; i < COLLECTION_LIST.length; i++) {
    let collectionNft: INft[] = [];

    if (COLLECTION_LIST[i].dappId === 'd45211bf-717a-4065-9bfc-c7035b98da76') {
      const response = await axios.get(COLLECTION_LIST[i].api!);
      const nftIdList = response.data.result.nftIdList;
      for (let j = 0; j < nftIdList.length; j++) {
        if (nftIdList[j] === '') continue;

        const dappId = COLLECTION_LIST[i].dappId;
        const nftId = nftIdList[j].nftId;
        const transactionHash = nftIdList[j].transactionHash;
        const createdBy = nftIdList[j].createdBy;
        const createdAt = nftIdList[j].createdAt;

        collectionNft.push({
          nftId,
          dappId,
          transactionHash,
          createdBy,
          createdAt,
        });
      }
    }

    if (COLLECTION_LIST[i].dappId === '638a5786-9eba-454a-af87-0331653ca8cc') {
      const response = await axios.get(COLLECTION_LIST[i].api!);
      const nftIdList = response.data.nftIdList;
      for (let j = 0; j < nftIdList.length; j++) {
        if (nftIdList[j] === '') continue;

        const dappId = COLLECTION_LIST[i].dappId;
        const nftId = nftIdList[j].nftId;
        const transactionHash = nftIdList[j].transactionHash;
        const createdBy = nftIdList[j].createdBy;
        const createdAt = nftIdList[j].createdAt;

        collectionNft.push({
          nftId,
          dappId,
          transactionHash,
          createdBy,
          createdAt,
        });
      }
    }

    collectionNft.sort((a: any, b: any) => b.nftId - a.nftId);

    nftCollection[COLLECTION_LIST[i].dappId] = collectionNft;
  }

  nftCollection[COLLECTION_LIST[0].dappId] = nftCollection[COLLECTION_LIST[1].dappId].concat(
    nftCollection[COLLECTION_LIST[2].dappId]
  );

  return nftCollection[currentCollection];
};

export const useLatestNftInfoByCollection = ({
  currentCollection,
  term = 16,
}: {
  currentCollection: string | undefined;
  term?: number;
}) => {
  const [targetNftList, setTargetNftList] = useState<INftData[]>([]);

  const getNftDetail = async (targetArray: INftData[]): Promise<void> => {
    for (let i = 0; i < targetArray.length; i++) {
      const nftData = await firmaSDK.Nft.getNftItem(targetArray[i].nftId);
      const response = await axios.get(nftData.tokenURI);

      const tokenData: {
        name: string;
        description: string;
        identity: string;
        imageURI: string;
        metaURI: string;
      } = response.data;

      targetArray[i].details.name = tokenData.name;
      targetArray[i].details.description = tokenData.description;
      targetArray[i].details.imageURI = tokenData.imageURI;
      targetArray[i].details.owner = nftData.owner;
    }

    setTargetNftList((targetnft) => [...targetnft]);
  };

  const getTargetArray = (nftByCollection: INft[]): INftData[] => {
    const targetCollection = nftByCollection;

    if (targetCollection) {
      const startPosition = 0 * term;
      const endPosition =
        targetCollection.length < startPosition + term ? targetCollection.length : startPosition + term;

      let targetArray = [];
      for (let i = startPosition; i < endPosition; i++) {
        targetArray.push({
          nftId: targetCollection[i].nftId,
          dappId: targetCollection[i].dappId,
          metadata: null,
          details: {
            name: '',
            description: '',
            imageURI: '',
            owner: '',
            transactionHash: targetCollection[i].transactionHash,
            createdBy: targetCollection[i].createdBy,
            createdAt: targetCollection[i].createdAt,
          },
        });
      }

      return targetArray;
    } else {
      return [];
    }
  };

  useEffect(() => {
    getNftIdByCollection(currentCollection).then((result) => {
      const targetArray = getTargetArray(result);

      setTargetNftList(targetArray);
      getNftDetail(targetArray)
        .then(() => {})
        .catch((error) => console.log(error));
    });
  }, [currentCollection]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    targetNftList,
  };
};
