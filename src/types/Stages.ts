export interface ChecklistItem {
  id: number;
  title: string;
  cost: number;
}

export interface Stage {
  id: number;
  title: string;
  component?: string;
}

export interface StageData {
  id: number;
  title?: string;
  cost: number;
}
