import { ApdateYourEnglishPage } from './app.po';

describe('apdate-your-english App', () => {
  let page: ApdateYourEnglishPage;

  beforeEach(() => {
    page = new ApdateYourEnglishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
