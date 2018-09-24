import { TestManagerPage } from './app.po';

describe('test-manager App', function() {
  let page: TestManagerPage;

  beforeEach(() => {
    page = new TestManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
