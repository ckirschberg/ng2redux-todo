import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';

import { Todo } from './todo';

@Injectable()
export class TodoActions {

    constructor (
        private ngRedux: NgRedux<IAppState>) {
    }

    static ADD_TODO: string = 'ADD_TODO';
    static UPDATE_TODO: string = 'UPDATE_TODO';

    addTodo(text: string): void {
        this.ngRedux.dispatch({
            type: TodoActions.ADD_TODO,
            payload: { text, done: false}
        })
    }
    updateTodo(todo: Todo): void {
        this.ngRedux.dispatch({
            type: TodoActions.UPDATE_TODO,
            payload: todo
        })
    }
}
