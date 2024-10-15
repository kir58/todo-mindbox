export type ItemType = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export type VisibilityFilter = 'all' | 'active' | 'completed';
