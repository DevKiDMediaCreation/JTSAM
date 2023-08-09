import { walk } from "https://deno.land/std/fs/mod.ts";

const startTime = Date.now();

function countLinesOfCode(code: string): number {
  const lines = code.split("\n");
  return lines.filter((line) => line.trim() !== "").length;
}

function countCharactersWithSpaces(code: string): number {
  return code.length;
}

function countCharactersWithoutSpaces(code: string): number {
  return code.replace(/\s/g, "").length;
}

function countBytes(code: string): number {
  return new TextEncoder().encode(code).length;
}

async function analyzeCode(
  filePath: string
): Promise<[string, number, number, number, number]> {
  try {
    const code = await Deno.readTextFile(filePath);
    const linesOfCode = countLinesOfCode(code);
    const charactersWithSpaces = countCharactersWithSpaces(code);
    const charactersWithoutSpaces = countCharactersWithoutSpaces(code);
    const bytes = countBytes(code);

    return [
      filePath,
      linesOfCode,
      charactersWithSpaces,
      charactersWithoutSpaces,
      bytes,
    ];
  } catch (err) {
    console.error("Error reading file:", err.message);
    return [filePath, 0, 0, 0, 0];
  }
}

async function analyzeCodeDirectory(directoryPath: string): Promise<void> {
  let totalLinesOfCode = 0;
  let totalCharactersWithSpaces = 0;
  let totalCharactersWithoutSpaces = 0;
  let totalBytes = 0;
  let totalFiles = 0;

  for await (const entry of walk(directoryPath, {
    exts: [".ts", ".pdf", ".bat", ".zip"],
  })) {
    const [
      filePath,
      linesOfCode,
      charactersWithSpaces,
      charactersWithoutSpaces,
      bytes,
    ] = await analyzeCode(entry.path);

    console.log("File:", filePath);
    console.log("Lines of Code:", linesOfCode);
    console.log("Characters with spaces:", charactersWithSpaces);
    console.log("Characters without spaces:", charactersWithoutSpaces);
    console.log("Bytes:", bytes);
    console.log("--------------------------");

    totalLinesOfCode += linesOfCode;
    totalCharactersWithSpaces += charactersWithSpaces;
    totalCharactersWithoutSpaces += charactersWithoutSpaces;
    totalBytes += bytes;
    totalFiles += 1;
  }

  console.log("Total Files:", totalFiles);
  console.log("Total Lines of Code:", totalLinesOfCode);
  console.log("Total Characters with spaces:", totalCharactersWithSpaces);
  console.log("Total Characters without spaces:", totalCharactersWithoutSpaces);
  console.log("Total Bytes:", totalBytes);
  console.log(`\nTime to use: ${Date.now() - startTime}ms`);
  console.log("Start Time:", startTime);
  console.log("End Time:", Date.now());
}

const directoryPath = "./";
await analyzeCodeDirectory(directoryPath);
