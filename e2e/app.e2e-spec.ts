import { AppDojoPage } from './app.po';

describe('app-dojo App', () => {
  let page: AppDojoPage;

  beforeEach(() => {
    page = new AppDojoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
