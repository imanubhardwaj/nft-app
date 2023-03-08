import React from 'react';
import { NFT } from '../../types/NFT';

type Props = {
  nft: NFT;
  onClick: () => void;
};

function NFTCard({ nft, onClick }: Props) {
  const {
    collection: { statsV2: { floorPrice: { symbol, unit } } },
    displayImageUrl,
    lastSale,
    displayName,
  } = nft;

  return (
    <button
      className="flex flex-col justify-start bg-white rounded-lg border-none drop-shadow-lg cursor-pointer"
      type="button"
      onClick={onClick}
    >
      <img
        className="px-5 flex-1"
        src={displayImageUrl}
        alt="nft"
      />
      <div className="flex flex-col items-start p-4 space-y-2">
        <span
          className="text-sm font-semibold"
        >
          {displayName}
        </span>
        <span className="text-sm font-semibold">
          {`${unit} ${symbol}`}
        </span>
        <span className="text-xs text-gray-400">
          Last Sale:
          {' '}
          {`${lastSale} ${symbol}`}
        </span>
      </div>
    </button>
  );
}

export default NFTCard;
