import { combineReducers } from 'redux';
import { todoReducer } from './todo.reducer';
import { Todo } from './todo';

export class TodoState {
    todos: Todo[];
};

export class IAppState {
  todos?: TodoState; 
};


export const rootReducer = combineReducers<IAppState>({
   todos: todoReducer
});

export const enhancers = [
];