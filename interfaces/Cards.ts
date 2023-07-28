export interface Card {
  thumbnail: string;
  slug: string;
  title: string;
  description: string;
  lessons: number;
  featured?: string;
}

export interface LargeCard extends Card {}
export interface FeaturedCard extends Omit<Card, "lessons" | "videoVersion"> {}
export interface FlatCard
  extends Omit<Card, "description" | "lessons" | "featured" | "videoVersion"> {}

export interface PostCard extends Omit<Card, "lessons" | "featured"> {
  featured?: boolean;
}

export type GeneralCard = PostCard | FlatCard | FeaturedCard | LargeCard | Card;

export interface SearchCard
  extends Omit<Card, "description" | "lessons" | "featured"> {}
