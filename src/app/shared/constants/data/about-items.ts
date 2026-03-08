import { BookItem, interestingItem, LanguageItem, PrincipleItem } from '../../models';

export const PRINCIPLE_ITEMS: PrincipleItem[] = [
  {
    title: 'Curiosity',
    description: 'Main inner driver to discover the world and self-improvement',
  },
  {
    title: 'Conciseness',
    description: 'Critical thinking through life leads to the best outcomes',
  },
  {
    title: 'Adaptability',
    description: 'Focus on what you can change, accept things you can’t',
  },
];

export const INTERESTING_ITEMS: interestingItem[] = [
  {
    title: 'Sport is in my genes',
    highlighted: 'I’ve been doing sports since I was a child and spent quite a huge part of my life in professional athletics. ',
    description: 'I’m multiple national champion and former member of Ukrainian national team. Physical activity is for life with me.',
    images: ['assets/images/welcome.jpg'],
  },
  {
    title: 'Chess is in my heart',
    highlighted: 'I am totally obsessed with chess for more than 5 years now, absolutely best game and great metaphor of life. ',
    description: 'For those who understand: my best ELO is 1968 in blitz on Chess.com (striving for 2000).',
    images: ['assets/images/welcome.jpg'],
  },
  {
    title: 'Exploration shapes me',
    highlighted:
      'Traveling helps me to observe things from different and fresh perspective, absolutely love to explore nature and different cultures. ',
    description: 'Btw I’ve listened to almost all recognised counties anthems and rated them in my notes.',
    images: ['assets/images/welcome.jpg', 'assets/images/welcome.jpg'],
  },
];

export const LANGUAGE_ITEMS: LanguageItem[] = [
  {
    language: 'English',
    level: 'Full working proficiency',
  },
  {
    language: 'German',
    level: 'Full working proficiency',
  },
  {
    language: 'Ukrainian',
    level: 'Native',
  },
  {
    language: 'Russian',
    level: 'Native',
  },
];

export const BOOK_ITEMS: BookItem[] = [
  {
    image: 'assets/images/welcome.jpg',
    title: 'Essentialism',
    author: 'by Greg McKeown',
  },
  {
    image: 'assets/images/welcome.jpg',
    title: 'Meditations',
    author: 'by Marcus Aurelius',
  },
  {
    image: 'assets/images/welcome.jpg',
    title: 'The Design of Everyday Things',
    author: 'by Don Norman',
  },
  {
    image: 'assets/images/welcome.jpg',
    title: 'Alchemy',
    author: 'by Rory Sutherland',
  },
];
