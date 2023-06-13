import axios from '../../utils/axios';

import { INFTIdListState } from './hooks';

interface IResponseState {
  code: number;
  message: string;
  result: IResultState;
}

interface IResultState {
  nftList: Array<INFTIdListState>;
}

interface IMetaState {
  name: string;
  description: string;
  identity: string;
  imageURI: string;
  metaURI: string;
}

export const getNFTsListForFeatured = () => {
  return axios.get<Array<IResponseState>>(`${process.env.REACT_APP_FEATURED_API}`);
};

export const getNFTsListForGallery = () => {
  return axios.get<Array<IResponseState>>(`${process.env.REACT_APP_GALLERY_API}`);
};

export const getNFTMetaData = (tokenURI: string) => {
  return axios.get<IMetaState>(tokenURI);
};

export const getNFTTimeStamp = (metaURI: string) => {
  return axios.post(`${process.env.REACT_APP_GRAPHQL}/v1/graphql`, {
    query: `query ($value: jsonb) {
                message(where: {type: {_eq: "firmachain.firmachain.nft.MsgMint"}, value: {_contains: $value}}) {
                transaction {
                    block {
                    timestamp
                    }
                }
                transaction_hash
                value
                }
            }`,
    variables: { value: { tokenURI: metaURI } },
  });
};
