export type NFT = {
  id: number;
  tokenId?: string;
  lastSale: number;
  favoritesCount: number;
  creator: {
    address: string;
    displayName: string;
    config: string;
    imageUrl: string;
  },
  assetContract: {
    address: string;
    chain: string;
    blockExplorerLink: string;
  },
  collection: {
    description: string;
    name: string;
    slug: string;
    verificationStatus: string;
    statsV2: {
      totalQuantity: string;
      floorPrice: {
        unit: string;
        symbol: string;
        eth: string
      },
    },
  },
  numVisitors: number;
  displayImageUrl: string;
  externalLink: string | null;
  displayName: string;
};
