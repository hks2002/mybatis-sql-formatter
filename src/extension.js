/*******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                      *
 * @CreatedDate           : 2025-08-21 02:04:00                                *
 * @LastEditors           : Robert Huang<56649783@qq.com>                      *
 * @LastEditDate          : 2026-06-23 21:08:28                                *
 * @FilePath              : mybatis-sql-formatter/src/extension.js             *
 * @CopyRight             : MerBleueAviation                                   *
 ******************************************************************************/
import * as vscode from 'vscode'
import packageJson from '../package.json' with { type: 'json' }
import { saveHandler } from './saveHandler.js'
import { logger } from './logger.js'

export function activate(context) {
  logger.info(`${packageJson.displayName} is now active!`)

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(`${packageJson.name}.format`, saveHandler)
  context.subscriptions.push(disposable)

  // handle events
  vscode.workspace.onWillSaveTextDocument(saveHandler)
}

// This method is called when your extension is deactivated
export function deactivate() {}
