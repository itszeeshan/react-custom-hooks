export interface Snippet {
    prefix: string;
    body: string[];
    description: string;
  }
  
export type Snippets = Record<string, Snippet>;