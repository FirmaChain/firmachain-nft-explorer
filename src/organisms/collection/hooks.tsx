import { useState, useEffect } from 'react';

import axios from 'axios';

import { FirmaSDK } from '@firmachain/firma-js';

import { FIRMACHAIN_CONFIG, COLLECTION_LIST } from '../../config';

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

const firmaSDK = new FirmaSDK(FIRMACHAIN_CONFIG);

const getNftIdByCollection = async (): Promise<ICollectionData> => {
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

  return nftCollection;
};

export const useLatestNftInfo = ({
  currentCollection,
  currentPage,
  term = 16,
}: {
  currentCollection: string;
  currentPage: number;
  term?: number;
}) => {
  const [nftByCollection, setNftByCollection] = useState<ICollectionData>({ all: [] });
  const [targetNftList, setTargetNftList] = useState<INftData[]>([]);

  const getNftDetail = async (targetArray: INftData[]): Promise<void> => {
    for (let i = term * currentPage; i < targetArray.length; i++) {
      firmaSDK.Nft.getNftItem(targetArray[i].nftId)
        .then((nftData: { owner: string; id: string; tokenURI: string }) => {
          axios
            .get(nftData.tokenURI)
            .then((response) => {
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

              setTargetNftList((targetnft) => [...targetnft]);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getTargetArray = (nftByCollection: ICollectionData): INftData[] => {
    const targetCollection = nftByCollection[currentCollection];
    const startPosition = currentPage * term;
    const endPosition = targetCollection.length < startPosition + term ? targetCollection.length : startPosition + term;

    let targetArray = [];
    for (let i = startPosition; i < endPosition; i++) {
      targetArray.push({
        nftId: targetCollection[i].nftId,
        dappId: nftByCollection[currentCollection][i].dappId,
        metadata: null,
        details: {
          name: '',
          description: '',
          imageURI: '',
          owner: '',
          transactionHash: nftByCollection[currentCollection][i].transactionHash,
          createdBy: nftByCollection[currentCollection][i].createdBy,
          createdAt: nftByCollection[currentCollection][i].createdAt,
        },
      });
    }

    return targetArray;
  };

  useEffect(() => {
    getNftIdByCollection().then((result) => {
      setNftByCollection(result);

      const targetArray = getTargetArray(result);

      setTargetNftList(targetArray);
      getNftDetail(targetArray)
        .then(() => {})
        .catch((error) => console.log(error));
    });
  }, [currentCollection]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const targetArray = getTargetArray(nftByCollection);
    setTargetNftList((prevState) => prevState.concat(targetArray));

    getNftDetail(targetNftList.concat(targetArray))
      .then(() => {})
      .catch((error) => console.log(error));
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    nftByCollection,
    targetNftList,
  };
};
