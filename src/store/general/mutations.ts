import { MutationTree } from 'vuex';
import { GeneralState } from '../types';
import { Task } from 'core-streamline/types';

const setTasks = (state, tasks: Task[]) => {
  state.tasks = tasks;
};

// Export mutations
export const mutations: MutationTree<GeneralState> = {
  setTasks,
};
