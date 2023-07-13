export interface Card {
  image: string;
  slug: string;
  title: string;
  badge: string;
  description: string;
  lessons: number;
  featured?: boolean;
}

export interface LargeCard extends Card {}
export interface FeaturedCard
  extends Omit<Card, "badge" | "lessons" | "videoVersion"> {}
export interface FlatCard
  extends Omit<
    Card,
     "description" | "lessons" | "featured" | "videoVersion" | "badge"
  > {}

export interface PostCard
  extends Omit<
    Card,
    | "lessons"
    | "featured"
    | "videoVersion"
    | "badge"
    | "videoVersion"
    | "featured"
  > {}
