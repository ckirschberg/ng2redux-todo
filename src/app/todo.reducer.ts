import { TodoActions } from './todo.actions';
import { IAppState } from './store';

const INITIAL_STATE: any = {
    todos: [{text: 'hej', done: false}]
};


export function todoReducer(state: IAppState = INITIAL_STATE, action:any) {
  switch (action.type) {

    case TodoActions.Add_TODO:
        return Object.assign({}, state, { todos: [...state.todos.todos, action.payload] });
    
    default:
      return state;
  }
}
