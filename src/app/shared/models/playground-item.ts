export interface PlaygroundItem {
  title: string;
  link?: string;
  description: string;
  chips: string[];
  imageUrl?: string;
  imageUrls?: imageWithRatio[];
  backgroundColor?: string;
}

export interface imageWithRatio {
  ratio?: string;
  url: string;
}
