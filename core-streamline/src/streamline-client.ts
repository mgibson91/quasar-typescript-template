

// Tasks
import { Task, TaskLog, TaskPriority, TaskStatus } from 'core-streamline/types';

const addTask = (task: Task): Promise<Task> => {
  throw Error('unimplemented');
  return null;
};

const getActiveTasks = async (): Promise<Task[]> => {
  return [
    { name: 'Streamline', weeklyTimeGoalSeconds: 3600, priority: TaskPriority.High, status: TaskStatus.Active },
    { name: 'Read', weeklyTimeGoalSeconds: 3600, priority: TaskPriority.Medium, status: TaskStatus.Active },
    { name: 'Write', weeklyTimeGoalSeconds: 1800, priority: TaskPriority.Low, status: TaskStatus.Active },
  ];
};

// Task logs
const addTaskLog = (taskId: number, taskLog: TaskLog): Promise<TaskLog> => {
  throw Error('unimplemented');
  return null;
};

// Task API
export const TaskApi = {
  add: addTask,
  active: getActiveTasks,
};

// Task logs API
export const TaskLogApi = {
  add: addTaskLog
};
