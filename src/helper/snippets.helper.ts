import * as fs from 'fs';
import * as path from 'path';

interface Snippet {
    prefix: string;
    body: string[];
    description: string;
  }
  
type Snippets = Record<string, Snippet>;

export const loadSnippets = (dirPath: string): Snippets => {
    const snippets: Snippets = {};
  
    fs.readdirSync(dirPath).forEach(file => {
      const filePath = joinPath(dirPath, file);
      const snippetName = path.basename(file, '.template');
      const content = fs.readFileSync(filePath, 'utf8').split('\n');
  
      snippets[snippetName] = {
        prefix: snippetName,
        body: content,
        description: `A custom hook for ${snippetName.replace(/^use/, '').toLowerCase()}.`
      };
    });
  
    return snippets;
  };

  export const joinPath = (dirPath: string, file: string) => {
    return path.join(dirPath, file);
  };