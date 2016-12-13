import { combineReducers } from 'redux';
import { todoReducer } from './todo.reducer';

export class IAppState {
  todos: Todo[]; 
};

export const rootReducer = combineReducers<IAppState>({
   todo: todoReducer,
});

export const enhancers = [

];