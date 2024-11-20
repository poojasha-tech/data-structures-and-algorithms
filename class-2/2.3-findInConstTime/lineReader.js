const fs = require('fs'); 

class LineReader { 

  constructor(filePath) { 

    if (!fs.existsSync(filePath)) { 

      throw new Error(`File not found: ${filePath}`); 

    } 

    const fileContent = fs.readFileSync(filePath, 'utf-8'); 

    this.lines = fileContent.split(/\r?\n/); // Handles both Windows and Unix line endings 

    this.currentIndex = 0; 

  } 

  nextLine() { 

    if (this.currentIndex < this.lines.length) { 

      return this.lines[this.currentIndex++]; 

    } 

    return null; // End of file 

  } 

  reset() { 

    this.currentIndex = 0; 

  } 

} 

module.exports = LineReader; 

 