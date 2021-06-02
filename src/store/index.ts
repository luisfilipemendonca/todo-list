import { combineReducers, createStore } from "redux";

import TodosReducer from "./reducers/Todos";

const reducers = combineReducers({
  todos: TodosReducer,
});

export const store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
