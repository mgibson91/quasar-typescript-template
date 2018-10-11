export enum TaskStatus {
  Active = 'active',
  Postponded = 'postponed',
  Complete = 'complete',
  Deleted = 'deleted', // Do we need this?
}

export enum TaskPriority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

export interface Task {
  name: string;
  weeklyTimeGoalSeconds: number;
  priority: TaskPriority;
  status?: TaskStatus, // Optional as it is not neccessarily present when first added
}

export interface TaskLog {
  taskId: number;
  startTimeMillis: number;
  endTimeMillis: number;
  note: string;
}

// export interface StreamlineApi {
//   addTask: (task: Task) => Promise<Task>;
//
//   addTaskLog: (taskId: number, taskLong: TaskLog) => Promise<TaskLog>;
// }
