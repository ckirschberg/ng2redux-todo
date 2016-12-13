import { combineReducers } from 'redux';
import { todoReducer } from './todo.reducer';
import { Todo } from './todo';

export class IAppState {
  todos?: Todo[]; 
};

export const rootReducer = combineReducers<IAppState>({
   todo: todoReducer
});

export const enhancers = [
];