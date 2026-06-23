/*******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                      *
 * @CreatedDate           : 2025-08-19 12:00:23                                *
 * @LastEditors           : Robert Huang<56649783@qq.com>                      *
 * @LastEditDate          : 2026-06-24 00:20:01                                *
 * @FilePath              : mybatis-sql-formatter/src/saveHandler.js           *
 * @CopyRight             : MerBleueAviation                                   *
 ******************************************************************************/
import * as vscode from 'vscode'
import { logger } from './logger.js'
import { format as formatXml } from './formatter.js'
import { t } from './l10n.js'

const formatCurrentEditor = () => {
  const editor = vscode.window.activeTextEditor
  if (editor) {
    const doc = editor.document
    const fileName = doc.fileName

    if (!fileName.endsWith('xml') && !fileName.endsWith('sql')) {
      logger.info(`Skip formatting ${fileName}`)
      return
    }

    if (fileName.endsWith('pom.xml')) {
      logger.info('Skip formatting pom.xml')
      return
    }

    editor.edit((editBuilder) => {
      try {
        logger.info(`Mybatis SQL Formatting ${fileName}`)

        try {
          const text = doc.getText()
          const formatted = formatXml(text)
          const fullRange = new vscode.Range(doc.positionAt(0), doc.positionAt(text.length))
          editBuilder.replace(fullRange, formatted)
        } catch (err) {
          logger.error('Format error', err)
        }
      } catch (e) {
        logger.error('', e)
      }
    })
  }
}

/**
 * Handles the save operation event
 * @param {vscode.TextDocumentWillSaveEvent} [e] - The event object containing document information
 */
const saveHandler = (e) => {
  if (e && e.document) {
    // oxlint-disable-next-line no-unused-expressions
    e.document.isDirty ? formatCurrentEditor() : logger.info(t('File not changed'))
  } else {
    formatCurrentEditor()
  }
}
export { saveHandler }
