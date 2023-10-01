// types.ts

import {
    ADD_TASK,
    REMOVE_TASK,
    COMPLETE_TASK,
    CHANGE_FILTER,
} from './constants';

// Store
export type Filter = string;

export interface ITask {
    id: number;
    text: string;
    isCompleted: boolean;
}

// Actions
interface IAddTaskAction {
    type: typeof ADD_TASK;
    payload: ITask;
}

interface IRemoveTaskAction {
    type: typeof REMOVE_TASK;
    payload: {
        id: number;
    };
}

interface ICompleteTaskAction {
    type: typeof COMPLETE_TASK;
    payload: {
        id: number;
    };
}

interface IChangeFilterAction {
    type: typeof CHANGE_FILTER;
    payload: {
        activeFilter: Filter;
    };
}

export type TaskActionTypes =
    | IAddTaskAction
    | IRemoveTaskAction
    | ICompleteTaskAction;
export type FilterActionType = IChangeFilterAction;

// actionCreator.ts
import {
    ADD_TASK,
    REMOVE_TASK,
    COMPLETE_TASK,
    CHANGE_FILTER,
} from '../constants';
import { TaskActionTypes, FilterActionType, ITask, Filter } from '../types';

export const addTast = (task: ITask): TaskActionTypes => ({
    type: ADD_TASK,
    payload: {
        ...task,
    },
});

export const removeTask = (id: number): TaskActionTypes => ({
    type: REMOVE_TASK,
    payload: {
        id,
    },
});

export const completeTask = (id: number): TaskActionTypes => ({
    type: COMPLETE_TASK,
    payload: {
        id,
    },
});

export const changeFilter = (activeFilter: Filter): FilterActionType => ({
    type: CHANGE_FILTER,
    payload: {
        activeFilter,
    },
});
