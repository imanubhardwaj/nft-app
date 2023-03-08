import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BoltIcon from '@mui/icons-material/Bolt';
import Button from 'components/Button';
import { NFT } from '../../types/NFT';

type Props = {
  nft: NFT;
};

function NFTDetailDialog({ nft }: Props) {
  const {
    displayImageUrl,
    displayName,
    collection,
    creator,
    numVisitors,
    favoritesCount,
    externalLink,
    assetContract,
    tokenId,
  } = nft;

  const btnClasses = '!capitalize !text-blue-500 !text-base !w-fit !p-0 hover:!bg-none hover:!underline';

  const buyNowLink = `${externalLink}/${assetContract?.address}/${tokenId}`;
  const collectionLink = `https://opensea.io/collection/${collection?.slug}`;
  const creatorLink = `https://opensea.io/${creator?.displayName}/created`;

  return (
    <div className="flex items-stretch !mt-0 space-x-4">
      <img
        src={displayImageUrl}
        alt="nft"
        width="264"
      />
      <div className="flex flex-col space-y-2">
        <Button
          onClick={() => window.open(collectionLink, '_blank')}
          className={btnClasses}
          variant="text"
        >
          {collection?.name}
          {collection?.verificationStatus === 'VERIFIED' && (
          <VerifiedIcon
            fontSize="small"
            className="ml-1 text-blue-600"
          />
          )}
        </Button>
        <span className="text-lg font-bold">
          {displayName}
        </span>
        <span className="text-sm">
          Created By
          {' '}
          <Button
            className={btnClasses}
            variant="text"
            onClick={() => window.open(creatorLink, '_blank')}
          >
            {creator?.displayName}
            {creator?.config === 'VERIFIED' && (
            <VerifiedIcon
              fontSize="small"
              className="ml-1 text-blue-600 text-xs"
            />
            )}
          </Button>
        </span>
        <div className="flex flex-row space-x-4 py-3">
          <span className="text-xs">
            <VisibilityOutlinedIcon />
            {' '}
            {`${numVisitors} Views`}
          </span>
          <span className="text-xs">
            <FavoriteBorderIcon />
            {' '}
            {`${favoritesCount} favorites`}
          </span>
        </div>
        <span className="text-sm">
          {collection?.description}
        </span>
        <Button
          className="text-white text-sm font-bold !mt-auto"
          variant="contained"
          color="primary"
          onClick={() => window.open(buyNowLink, '_blank')}
        >
          <BoltIcon className="text-white mr-1" />
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default NFTDetailDialog;
