export interface EmojiParticle {
  id: number;
  emoji: string;
  ox: number;
  oy: number;
  tx: number;
  ty: number;
  /** ty + gravity pre-summed */
  endY: number;
  spin: number;
  duration: number;
  delay: number;
  size: number;
}
