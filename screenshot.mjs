import puppeteer from "puppeteer";

const hash = (str) => {
  let hash = "";

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const validCharCode = charCode % 36;
    const alphanumericChar =
      validCharCode < 10
        ? String(validCharCode)
        : String.fromCharCode(validCharCode + 87);

    hash += alphanumericChar;
  }

  return hash;
};

const browser = await puppeteer.launch();
const page = await browser.newPage();

await Promise.all([
  page.waitForNavigation(),
  page.goto("http://localhost:5173"),
  page.waitForSelector(".cube"),
]);

const moves = await page.$$eval("nav div:last-child a", (buttons) =>
  buttons.map((button) => button.textContent)
);

let i = 1;
for (const move of moves) {
  const page = await browser.newPage();

  await Promise.all([
    page.waitForNavigation(),
    page.goto("http://localhost:5173"),
  ]);

  console.log(i);

  const el = await page.$(`nav div:last-child a:nth-child(${i})`);
  const cube = await page.waitForSelector(".cube");

  await el?.click();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = await page.$eval("h1", (el) => el.textContent);
  await cube?.screenshot({ path: `public/images/${hash(name)}.png` });

  await page.close();

  i++;
}

await browser.close();
