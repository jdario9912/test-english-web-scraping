import puppeteer from "puppeteer";
import { readFile, writeFile } from "../scripts/fs.js";

export const getEnglishSkillsExercises = async (fileName, skill) => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto(skill, {
      waitUntil: "domcontentloaded",
    });

    const anchors = "#child-pages div div a";

    await page.waitForSelector(anchors);

    const urlExercises = await page.$$eval(anchors, (hrefs) =>
      hrefs.map((href) => href.getAttribute("href"))
    );

    for (const url of urlExercises) {
      const previosContent = await readFile(fileName);

      // await fs.writeFile(`./${fileName}`, `${previosContent}\n${url}\n`);
      await writeFile(fileName, previosContent, url);
    }

    await browser.close();
  } catch (error) {
    console.error(error);
  }
};
