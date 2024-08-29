import * as vscode from 'vscode';
import * as assert from 'assert';
describe('Extension Tests', () => {
  it('should activate extension', async () => {
    const extension = vscode.extensions.getExtension(
      'zeesec.zeesec',
    );
    assert.ok(extension, 'Extension is not installed.');
    assert.strictEqual(extension.isActive, true, 'Extension did not activate.');
  });
});
