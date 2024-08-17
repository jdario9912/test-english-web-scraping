import { createFile } from "./scripts/fs.js";
import { getEnglishSkillsExercises } from "./scripts/scraping.js";
import { skills } from "./scripts/skills.js";

const fileName = "english_skills.txt";

await createFile(fileName);

for (const skill of skills) {
  await getEnglishSkillsExercises(fileName, skill);
}

console.info("Finalizo la escritura del archivo " + fileName);
