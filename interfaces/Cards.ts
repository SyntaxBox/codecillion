export interface Card {
  image: string;
  href: string;
  title: string;
  badge: string;
  description: string;
  pricing: string;
}

export interface LargeCard extends Card {}
export interface FeaturedCard extends Card {}
