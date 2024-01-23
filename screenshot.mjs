import puppeteer from "puppeteer";

const browser = await puppeteer.launch();
const page = await browser.newPage();

await Promise.all([
  page.waitForNavigation(),
  page.goto("http://localhost:8888"),
  page.waitForSelector(".cube"),
]);

const moves = await page.$$eval("nav div:last-child button", (buttons) =>
  buttons.map((button) => button.textContent)
);

let i = 1;
for (const move of moves) {
  const page = await browser.newPage();

  await Promise.all([
    page.waitForNavigation(),
    page.goto("http://localhost:8888"),
  ]);

  console.log(i);

  const el = await page.$(`nav div:last-child button:nth-child(${i})`);
  const cube = await page.waitForSelector(".cube");

  await el.click();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await cube.screenshot({ path: `images/${move}.png` });

  await page.close();

  i++;
}

await browser.close();
