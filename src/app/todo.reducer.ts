import { TodoActions } from './todo.actions';
import { TodoState } from './store';

const INITIAL_STATE: any = {
    todos: []
};

export function todoReducer(state: TodoState = INITIAL_STATE, action:any) {
  switch (action.type) {

    case TodoActions.ADD_TODO:
        //add new id
        action.payload.id = state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;

        return Object.assign({}, state, { 
            todos: [
                action.payload,
                ...state.todos
                ]
            });

    default:
      return state;
  }
}
