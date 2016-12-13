import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';

@Injectable()
export class TodoActions {

    constructor (
        private ngRedux: NgRedux<IAppState>) {
    }

    static SOME_ACTION: string = 'SOME_ACTION';

    someMethod(): void {
        this.ngRedux.dispatch({
            type: TodoActions.SOME_ACTION,
            payload: 'something'
        })
    }
}
