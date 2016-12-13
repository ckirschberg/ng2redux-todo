import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule, DevToolsExtension} from 'ng2-redux';
import { IAppState, rootReducer, enhancers } from './store';
const createLogger = require('redux-logger');

import { TodoActions } from './todo.actions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule.forRoot(),
    HttpModule
  ],
  providers: [TodoActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension
    ) {

      this.ngRedux.configureStore(
        rootReducer,
        {},
        [ createLogger() ],
        [ ...enhancers, devTool.isEnabled() ? devTool.enhancer() : f => f]);      
    }
 }

