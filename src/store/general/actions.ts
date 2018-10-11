import { ActionTree } from 'vuex';
import { RootState, GeneralState } from '../types';

import { TaskApi } from 'core-streamline/streamline-client';

export const actions: ActionTree<GeneralState, RootState> = {
  async updateTasks(context) {
    // Query tasks from database - currently stubbed
    const tasks = await TaskApi.active();
    context.commit('setTasks', tasks);
  }
};
