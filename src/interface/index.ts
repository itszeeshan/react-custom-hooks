export interface Snippet {
  prefix: string;
  body: string[];
  description: string;
  dependentOnHook?: string[] 
}

export type Snippets = Record<string, Snippet>;