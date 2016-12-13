import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';

@Injectable()
export class TodoActions {

    constructor (
        private ngRedux: NgRedux<IAppState>) {
    }

    static Add_TODO: string = 'Add_TODO';

    addTodo(text: string): void {
        this.ngRedux.dispatch({
            type: TodoActions.Add_TODO,
            payload: text
        })
    }
}
