export interface TechItem {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  popularity: number;
}

export interface StackItem extends TechItem {
  addedAt: Date;
}