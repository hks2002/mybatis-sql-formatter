/*******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                      *
 * @CreatedDate           : 2025-08-21 02:04:00                                *
 * @LastEditors           : Robert Huang<56649783@qq.com>                      *
 * @LastEditDate          : 2026-01-30 13:04:54                                *
 * @FilePath              : mybatis-sql-formatter/src/main/extension.js        *
 * @CopyRight             : MerBleueAviation                                   *
 ******************************************************************************/

const vscode = require("vscode");
const logger = require("./logger");

const { getFormatterConfig } = require('./config');
const saveHandler = require("./saveHandler");


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  logger.info(`Mybatis SQL Formatter is now active!:\n ${JSON.stringify(getFormatterConfig())}`);

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    `mybatis-sql-formatter.format`,
    saveHandler,
  );
  context.subscriptions.push(disposable);

  // handle events
  vscode.workspace.onWillSaveTextDocument(saveHandler);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
  activate,
  deactivate
};
