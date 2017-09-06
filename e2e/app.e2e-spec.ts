import { CatappCrossPlatformPage } from './app.po';

describe('catapp-cross-platform App', () => {
  let page: CatappCrossPlatformPage;

  beforeEach(() => {
    page = new CatappCrossPlatformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
