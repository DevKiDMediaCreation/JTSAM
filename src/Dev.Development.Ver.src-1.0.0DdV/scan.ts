function countLinesOfCode(code: string): number {
    const lines = code.split('\n');
    return lines.filter((line) => line.trim() !== '').length;
  }
  
  function countCharactersWithSpaces(code: string): number {
    return code.length;
  }
  
  function countCharactersWithoutSpaces(code: string): number {
    return code.replace(/\s/g, '').length;
  }
  
  function countBytes(code: string): number {
    return new TextEncoder().encode(code).length;
  }
  
  async function analyzeCode(filePath: string): Promise<void> {
    try {
      const code = await Deno.readTextFile(filePath);
      const linesOfCode = countLinesOfCode(code);
      const charactersWithSpaces = countCharactersWithSpaces(code);
      const charactersWithoutSpaces = countCharactersWithoutSpaces(code);
      const bytes = countBytes(code);
  
      console.log('Lines of Code:', linesOfCode);
      console.log('Characters with spaces:', charactersWithSpaces);
      console.log('Characters without spaces:', charactersWithoutSpaces);
      console.log('Bytes:', bytes);
    } catch (err) {
      console.error('Error reading file:', err.message);
    }
  }
  
  const filePath = './test.ts';
  await analyzeCode(filePath);
  