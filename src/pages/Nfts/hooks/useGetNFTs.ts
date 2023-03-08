import { useQuery, UseQueryResult } from 'react-query';
import { NFT } from '../types/NFT';
import { getNFTs } from '../services/api';

export default function useGetNFTs(): UseQueryResult<NFT[], Error> {
  return useQuery<NFT[], Error>(
    'nfts',
    getNFTs,
  );
}
