export interface Snippet {
  prefix: string;
  body: string[];
  description: string;
  relatedHooks: string[] 
  relatedCustomHooks: string[]
  relatedReactHooks : string []
}

export type Snippets = Record<string, Snippet>;