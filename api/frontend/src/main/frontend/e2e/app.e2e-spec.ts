import { SrapiPage } from './app.po';

describe('srapi App', () => {
  let page: SrapiPage;

  beforeEach(() => {
    page = new SrapiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
