import { Component } from '@angular/core';
import { TodoActions } from './todo.actions';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from 'ng2-redux';

import { Todo } from './todo';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @select() todos$: Observable<Todo[]>;
  private todos$: Observable<Todo[]>;
  private text: string;

  constructor(private actions: TodoActions,
    private ngRedux: NgRedux<IAppState>) {
      this.todos$ = this.ngRedux.select(state => state.todos.todos);
  }

  onAddTodo(text: string): void {
    this.actions.addTodo(text);
    this.text = '';
  }
  onChangeDone(todo): void {
    console.log(todo);
    // console.log(i);
    // console.log(event);
  }
}
