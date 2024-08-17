import fs from "node:fs/promises";

export const createFile = async (fileName) =>
  await fs.writeFile(`./${fileName}`, "");

export const readFile = async (fileName) =>
  await fs.readFile(`./${fileName}`, "utf8");

export const writeFile = async (fileName, oldContent, newContent) =>
  await fs.writeFile(`./${fileName}`, `${oldContent}\n${newContent}\n`);
