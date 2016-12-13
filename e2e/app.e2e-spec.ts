import { Ng2reduxTodoPage } from './app.po';

describe('ng2redux-todo App', function() {
  let page: Ng2reduxTodoPage;

  beforeEach(() => {
    page = new Ng2reduxTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
