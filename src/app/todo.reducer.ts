import { TodoActions } from './todo.actions';
import { IAppState } from './store';

const INITIAL_STATE: any = {
    todos: []
};


export function todoReducer(state: IAppState = INITIAL_STATE, action:any) {
  switch (action.type) {

    case TodoActions.SOME_ACTION:
        return state;
    
    default:
      return state;
  }
}
