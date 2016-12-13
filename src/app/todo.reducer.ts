import { TodoActions } from './todo.actions';
import { TodoState } from './store';

const INITIAL_STATE: any = {
    todos: []
};


export function todoReducer(state: TodoState = INITIAL_STATE, action:any) {
  switch (action.type) {

    case TodoActions.Add_TODO:
        return Object.assign({}, state, { todos: [...state.todos, action.payload] });
    
    default:
      return state;
  }
}
