import { Task } from 'core-streamline/types';

export interface RootState {
  general: GeneralState;
}

export interface GeneralState {
  tasks: Task[]
}
