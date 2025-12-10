export interface WholesaleItem {
  platform: string;
  supplier: string;
  moq: number;
  unit_price: number;
  unit_price_pkr: number;
  currency: string;
  lead_time: string;
  origin: string;
  moq_listing: number;
  attributes_listing: Record<string, string | number>;
}

export interface RetailItem {
  seller: string;
  platform: string;
  list_price: number; // PKR
  promo: string;
  url: string;
  title: string;
}

export interface WholesaleResponse {
  made_in_china: WholesaleItem[];
}

export interface ScraperResponse {
  product_name: string;
  links_used: Record<string, string>;
  wholesale: WholesaleResponse;
  retail: RetailItem[];
}
