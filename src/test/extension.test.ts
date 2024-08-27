import * as vscode from 'vscode';
import * as assert from 'assert';
describe('Extension Tests', function () {

  it('should activate extension', async function () {
    const extension = vscode.extensions.getExtension('your-publisher.your-extension-id');
    assert.ok(extension, 'Extension is not installed.');
    assert.strictEqual(extension.isActive, true, 'Extension did not activate.');
  });
});
