import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "baerenfakten.txt");
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const facts = fileContent.split("\n").filter(Boolean);
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    res.status(200).send(randomFact);
  } catch (error) {
    res.status(500).send("Fehler beim Lesen der Datei");
  }
}
