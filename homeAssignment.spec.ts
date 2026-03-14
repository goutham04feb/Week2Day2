import { chromium, firefox, test, webkit, } from "playwright/test";

test ("launch browser", async () => //{page} >if page is there then no need write the below launch lines
{

const browser = await firefox.launch({'channel':'firefox','headless':false});
const context = await browser.newContext();
const page = await context.newPage();  
await page.goto("https://www.redbus.in");
const redbustitle = await page.title
console.log(redbustitle);
const redbusurl = await page.url
console.log(redbusurl);

const browser1 = await chromium.launch({'channel':'msedge','headless':false});
const context1 = await browser1.newContext();
const page1 = await context1.newPage();  
await page1.goto("https://www.flipkart.com");
const filptitle = await page.title
console.log(filptitle);
const filpurl = await page.url
console.log(filpurl);

await page.waitForTimeout(3000)
}
)