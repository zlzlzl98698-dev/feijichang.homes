export interface BrandPlan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  cycle?: string;
}

export interface SpeedNode {
  node: string;
  latency: string;
  download: string;
}

export interface UnlockMatrix {
  chatgpt: string;
  claude: string;
  gemini: string;
  netflix: string;
  disney: string;
  youtube: string;
  hbo: string;
  tiktok: string;
  spotify: string;
}

export interface BrandItem {
  id: string;
  slug: string;
  name: string;
  enName: string;
  aliases: string[];
  brandColor: string;
  logo: string;
  speedtestImg: string;
  operationalSince: string;
  affUrl: string;
  coupon: string;
  minPriceMonthly: number;
  minPriceLabel: string;
  lines: string;
  protocols: string[];
  clients: string[];
  regions: string[];
  aiSupport: string;
  streamingSupport: string;
  unlockMatrix: UnlockMatrix;
  speedNodes: SpeedNode[];
  plans: BrandPlan[];
  features: string[];
  overview: string;
  pros: string[];
  cons: string[];
  targetAudience: string;
  unsuitableFor: string;
  riskNotice: string;
  dataSource: string;
  dataStatus: 'measured' | 'vendor_claimed' | 'historical_archive' | 'unverified';
  verifiedDate: string;
  updatedDate: string;
  isCommercialPriority: boolean;
}

import brandsData from './brands.json';

export const brands: BrandItem[] = brandsData as BrandItem[];
export default brands;
