import React from 'react';
import clsx from 'clsx';
import { dialogEventChannel } from 'components/Dialog/Wrapper';
import LoadingSkeleton from './components/NFTCard/LoadingSkeleton';
import NFTCard from './components/NFTCard';
import NFTDetailDialog from './components/NFTDetailDialog';
import useGetNFTs from './hooks/useGetNFTs';
import { NFT } from './types/NFT';

function NFTs() {
  const { isLoading, data: nfts = [] } = useGetNFTs();

  const containerClasses = clsx(
    'p-6 h-full overflow-y-scroll',
    'grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7',
  );

  const onCardClick = (nft: NFT) => {
    dialogEventChannel.emit('open', {
      className: 'w-[50rem]',
      disableBackdropClick: true,
      showActions: false,
      children: <NFTDetailDialog nft={nft} />,
    });
  };

  return (
    <div
      className={containerClasses}
    >
      {isLoading && (
        <LoadingSkeleton
          count={20}
        />
      )}
      {nfts.map((nft: NFT) => (
        <NFTCard
          key={nft?.id}
          nft={nft}
          onClick={() => onCardClick(nft)}
        />
      ))}
    </div>
  );
}

export default NFTs;
