const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
  const filePath = path.resolve(process.cwd(), "baerenfakten.txt");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const facts = fileContent.split("\n").filter(Boolean);
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  res.status(200).send(randomFact);
}
