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
import { format } from './formatter.js'

const selector = [{ language: 'xml' }, { language: 'sql' }]

const formattingProvider = {
  /**
   * @param {vscode.TextDocument} document
   * @returns {vscode.TextEdit[]}
   */
  provideDocumentFormattingEdits(document) {
    if (document.fileName.endsWith('pom.xml')) {
      logger.info('Skip formatting pom.xml')
      return []
    }

    try {
      const text = document.getText()
      const formatted = format(text)
      const fullRange = new vscode.Range(document.positionAt(0), document.positionAt(text.length))
      return [vscode.TextEdit.replace(fullRange, formatted)]
    } catch (err) {
      logger.error('Format error', err)
      return []
    }
  },
}

export function activate(context) {
  logger.info(`${packageJson.displayName} is now active!`)

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(`${packageJson.name}.format`, saveHandler)
  context.subscriptions.push(disposable)

  // Register as a document formatter so it shows up in "Format Document With..." (右键菜单)
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(selector, formattingProvider),
  )
}

// This method is called when your extension is deactivated
export function deactivate() {}
