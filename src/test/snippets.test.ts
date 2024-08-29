import * as path from 'path';
import { loadSnippets } from '../helper';

describe('Snippets Loading', () => {
  const javascriptSnippetsPath = path.join(__dirname, '../snippets/javascript');
  const typescriptSnippetsPath = path.join(__dirname, '../snippets/typescript');

  test('should load JavaScript snippets', () => {
    const snippets = loadSnippets(javascriptSnippetsPath);
    expect(Object.keys(snippets).length).toBeGreaterThan(0);
  });

  test('should load TypeScript snippets', () => {
    const snippets = loadSnippets(typescriptSnippetsPath);
    expect(Object.keys(snippets).length).toBeGreaterThan(0);
  });
});
