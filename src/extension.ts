import * as vscode from 'vscode';
import { registerCompletionProvider } from './languageServer';

export function activate(context: vscode.ExtensionContext) {
  registerCompletionProvider(context);
}

export function deactivate() {}
