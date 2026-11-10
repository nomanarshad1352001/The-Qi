export type ProductVariantId = '3-month' | '1-month';
export type PurchaseType = 'subscribe' | 'onetime';

export interface ProductVariant {
  id: ProductVariantId;
  name: string;
  tagline: string;
  badge?: string;
  price: number;
  originalPrice: number;
  perServing: string;
  savings: number;
  servingsCount: number;
  features: string[];
  includesGift: boolean;
  giftDescription?: string;
}

export interface CartItem {
  id: string;
  variantId: ProductVariantId;
  title: string;
  subtitle: string;
  purchaseType: PurchaseType;
  price: number;
  originalPrice: number;
  quantity: number;
  subscriptionFrequency?: '30' | '90';
  image: string;
  shipDate: string;
}

export interface Botanical {
  id: string;
  name: string;
  latinName: string;
  origin: string;
  elevation: string;
  primaryBenefit: string;
  tastingNotes: string;
  bioactives: string[];
  traditionalRole: string;
  tag: string;
}
