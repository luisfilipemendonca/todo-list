import { v4 as uuidv4 } from "uuid";
import { Action } from "../actions";
import { ActionTypes } from "../actions/actionTypes";

export type ITodo = {
  id: string;
  priority: string;
  description: string;
};

interface TodosState extends Record<string, ITodo[]> {
  high: ITodo[];
  medium: ITodo[];
  low: ITodo[];
}

const INITIAL_STATE: TodosState = {
  high: [],
  medium: [],
  low: [],
};

const addTodo = (state: TodosState, payload: ITodo) => {
  const { description, priority, id } = payload;
  const updatedState = { ...state };
  updatedState[priority].push({ description, id, priority });
  return updatedState;
};

const TodosReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return addTodo(state, action.payload);
    default:
      return state;
  }
};

export default TodosReducer;
