import { TipsterPage } from './app.po';

describe('tipster App', function() {
  let page: TipsterPage;

  beforeEach(() => {
    page = new TipsterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
