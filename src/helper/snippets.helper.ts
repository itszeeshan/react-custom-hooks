import * as fs from 'fs';
import * as path from 'path';
import { Snippets } from '../interface';

const extractDependencies = (content: string[]): string[] => {
  const dependencies: string[] = [];
  const hookPattern = /use[A-Z]\w*/g;
  content.forEach(line => {
    const matches = line.match(hookPattern);
    if (matches) {
      matches.forEach(match => {
        if (!dependencies.includes(match)) {
          dependencies.push(match);
        }
      });
    }
  });

  return dependencies.length > 0 ? dependencies : [''];
};


export const loadSnippets = (dirPath: string): Snippets => {
    const snippets: Snippets = {};
  
    fs.readdirSync(dirPath).forEach(file => {
      const filePath = joinPath(dirPath, file);
      const snippetName = path.basename(file, '.template');
      const content = fs.readFileSync(filePath, 'utf8').split('\n');
  
      snippets[snippetName] = {
        prefix: snippetName,
        body: content,
        description: `A custom hook for ${snippetName.replace(/^use/, '').toLowerCase()}.`,
        dependentOnHook: extractDependencies(content).filter(d => d !== snippetName)
      };
    });
  
    return snippets;
  };

  export const joinPath = (dirPath: string, file: string) => {
    return path.join(dirPath, file);
  };