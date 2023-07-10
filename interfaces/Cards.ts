export interface Card {
  image: string;
  href: string;
  title: string;
  badge: string;
  description: string;
  lessons: number;
  featured?: boolean;
  videoVersion: string;
}

export interface LargeCard extends Card {}
export interface FeaturedCard
  extends Omit<Card, "badge" | "lessons" | "videoVersion"> {}
export interface TwinCard
  extends Omit<
    Card,
    "title" | "description" | "lessons" | "featured" | "videoVersion" | "badge"
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
