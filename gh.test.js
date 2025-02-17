let page;

beforeEach(async () => {
  page = await browser.newPage();  
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {    
    await page.goto("https://github.com/team");
  });

  test("The h1 header content", async () => {
    jest.setTimeout(80000);     
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    console.log(title2);
    expect(title2).toEqual('GitHub · Build and ship software on a single, collaborative platform · GitHub'); 
  });  

  test("The first link attribute", async () => {
    jest.setTimeout(35000); 
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    console.log(actual);
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    jest.setTimeout(45000); 
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    console.log(actual);
    expect(actual).toContain("Get started with Team")
  }); 
});

describe("page gitHub actions", () => {
  beforeEach(async () => {    
    jest.setTimeout(30000); 
    await page.goto("https://github.com/features/actions");  
  });
  
  test("The title h1 content", async () => {
    const expected = ("Automate your workflow from idea to production");
    const actual = await page.$eval("#hero-section-brand-heading", (link) => link.textContent);
    console.log(actual);
    await expect(actual).toEqual(expected);
  });
  test("The title h2 content", async () => {
    const expected = ("Kick off workflows on any  GitHub event to automate tasks");
   // await page.waitForSelector('h2');
    const title = await page.$eval("#features h2", (link) => link.textContent);
    console.log (title);
    await expect(title).toContain(expected);
  });

  test("button Get started content", async () => {
    const expected = ("Get started");
    const actual = await page.$eval("span.Primer_Brand__Button-module__Button__text___Z3ocU", (link) => link.textContent);
    console.log(actual);
    await expect(actual).toEqual(expected);
  });  
});