import * as fs from 'fs';
import * as path from 'path';
import { Snippets } from '../interface';

const extractAllRelatedHooksFromSnippets = (content: string[]): string[] => {
  const hooks: string[] = [];
  const hookPattern = /use[A-Z]\w*/g;
  content.forEach((line) => {
    const matches = line.match(hookPattern);
    if (matches) {
      matches.forEach((match) => {
        if (!hooks.includes(match)) {
          hooks.push(match);
        }
      });
    }
  });

  return hooks.length > 0 ? hooks : [''];
};

export const loadSnippets = (dirPath: string): Snippets => {
  const snippets: Snippets = {};

  fs.readdirSync(dirPath).forEach((file) => {
    const filePath = joinPath(dirPath, file);
    const snippetName = path.basename(file, '.template');
    const content = fs.readFileSync(filePath, 'utf8').split('\n');

    snippets[snippetName] = {
      prefix: snippetName,
      body: content,
      description: `A custom hook for ${snippetName.replace(/^use/, '').toLowerCase()}.`,
      relatedHooks: extractAllRelatedHooksFromSnippets(content).filter(
        (d) => d !== snippetName,
      ),
      relatedCustomHooks: [],
      relatedReactHooks: [],
    };
  });

  for (const snippet of Object.keys(snippets)) {
    snippets[snippet].relatedCustomHooks = snippets[
      snippet
    ].relatedHooks.filter((h) => Object.keys(snippets).includes(h));
    snippets[snippet].relatedReactHooks = snippets[snippet].relatedHooks.filter(
      (h) => !Object.keys(snippets).includes(h),
    );
  }

  return snippets;
};

export const joinPath = (dirPath: string, file: string) => {
  return path.join(dirPath, file);
};
