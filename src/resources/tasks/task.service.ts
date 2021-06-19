// @ts-check

import { ITask } from 'resources/tasks/task.model';
import { getRepository } from 'typeorm';
import { TaskEntity } from './task.entity';

// GET ALL TASKS
const getAll = async (): Promise<ITask[]> => {
  const taskRepository = getRepository(TaskEntity);
  const tasks = await taskRepository.find({});
  return tasks;
};

// GET TASK BY ID
const get = async (boardId: string, taskId: string): Promise<ITask> => {
  console.log(boardId);
  const taskRepository = getRepository(TaskEntity);
  const task = await taskRepository.findOne(taskId);

  console.log('Task');
  console.log(task);

  if (!task) {
    throw new Error('[App] Task not found!');
  }
  return task;
};

// CREATE TASK
const create = async (
  boardId: string,
  title: string,
  order: string,
  description: string,
  userId: string,
  columnId: string
): Promise<ITask> => {
  const taskRepository = getRepository(TaskEntity);

  const task = new TaskEntity();
  task.boardId = boardId;
  task.title = title;
  task.order = +order;
  task.description = description;
  task.userId = userId;
  task.columnId = columnId;

  console.log('Task');
  console.log(task);

  const createdTask = await taskRepository.save(task);
  if (!createdTask) {
    throw new Error("[App] Can't create Task!");
  }

  console.log('Created Task');
  console.log(createdTask);

  const createdTaskResult = await get(createdTask.boardId, createdTask.id);
  return createdTaskResult;
};

// TODO: _order
// UPDATE TASK
const update = async (
  boardId: string,
  taskId: string,
  title: string,
  _order: string,
  description: string,
  userId: string,
  columnId: string
): Promise<ITask> => {
  const taskRepository = getRepository(TaskEntity);
  const updatedTask = await taskRepository.update(taskId, {
    boardId,
    title,
    description,
    userId,
    columnId,
  });

  if (!updatedTask.affected) {
    throw new Error("[App] Can't Update Task!");
  }

  const updatedTaskResult = await get(null, taskId);
  return updatedTaskResult;
};

// DELETE TASK
const remove = async (taskId: string): Promise<ITask> => {
  const taskDeleteResult = await get(null, taskId);

  const taskRepository = getRepository(TaskEntity);
  const res = await taskRepository.delete(taskId);
  if (!res.affected) {
    throw new Error('[App] Cant Delete Task!');
  }

  return taskDeleteResult;
};

export const tasksService = {
  getAll,
  get,
  create,
  update,
  remove,
};
