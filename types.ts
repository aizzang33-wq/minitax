export type Page = 'home' | 'toolkit' | 'features' | 'about' | 'contact';

export enum ToolCategory {
  ALL = '전체',
  DEV = '개발',
  MKT = '마케팅',
  PROD = '생산성',
  TAX = '세무/회계'
}

export interface ToolItem {
  id: number;
  title: string;
  description: string;
  category: ToolCategory;
  imageUrl: string;
  comment: string;
  link: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
