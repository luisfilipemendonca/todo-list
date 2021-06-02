import { ActionTypes } from "./actionTypes";
import { ITodo } from "../reducers/Todos";

export interface AddTodo {
  type: ActionTypes.ADD_TODO;
  payload: ITodo;
}

export interface UpdateTodo {
  type: ActionTypes.UPDATE_TODO;
  payload: ITodo;
}

export interface DeleteTodo {
  type: ActionTypes.DELETE_TODO;
  payload: {
    id: string;
    priority: string;
  };
}

export type Action = AddTodo | UpdateTodo | DeleteTodo;
