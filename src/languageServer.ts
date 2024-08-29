import * as vscode from 'vscode';
import { joinPath, loadSnippets } from './helper';
import { Snippet, Snippets } from './interface';

const javascriptTemplatesDir = joinPath(__dirname, '../snippets/javascript');
const typescriptTemplatesDir = joinPath(__dirname, '../snippets/typescript');

export function registerCompletionProvider(context: vscode.ExtensionContext) {
  const javascriptSnippets = loadSnippets(javascriptTemplatesDir);
  const typescriptSnippets = loadSnippets(typescriptTemplatesDir);

  const registerProvider = (language: string, snippets: Snippets) => {
    const provider = vscode.languages.registerCompletionItemProvider(
      { language, scheme: 'file' },
      {
        provideCompletionItems() {
          const completionItems: vscode.CompletionItem[] = [];

          for (const [key, value] of Object.entries(snippets)) {
            const completionItem = new vscode.CompletionItem(
              key,
              vscode.CompletionItemKind.Snippet,
            );
            completionItem.insertText = new vscode.SnippetString(
              value.body.join('\n'),
            );
            completionItem.documentation = new vscode.MarkdownString(
              value.description,
            );
            completionItem.detail = `Snippet: ${value.prefix}`;
            completionItem.command = {
              command: 'extension.showSnippetMessage',
              title: 'Show Snippet Message',
              arguments: [key, value],
            };
            completionItems.push(completionItem);
          }

          return completionItems;
        },
      },
      'use',
    );

    context.subscriptions.push(provider);
  };

  registerProvider('javascript', javascriptSnippets);
  registerProvider('typescript', typescriptSnippets);

  const showSnippetMessageCommand = vscode.commands.registerCommand(
    'extension.showSnippetMessage',
    (snippetName: string, snippet: Snippet) => {
      let message = `"${snippetName}" snippet:`;
      if (snippet.relatedCustomHooks.length > 0) {
        message += ` The custom hooks ${snippet.relatedCustomHooks} are available in our library. Just type ${snippet.relatedCustomHooks} to use them, and make sure to include them to avoid any errors.`;
      }
      if (snippet.relatedReactHooks.length > 0) {
        message += ` You can add ${snippet.relatedReactHooks} from react`;
      }

      message += ` Read docs for better understanding`;
      vscode.window.showInformationMessage(message);
    },
  );
  context.subscriptions.push(showSnippetMessageCommand);
}
