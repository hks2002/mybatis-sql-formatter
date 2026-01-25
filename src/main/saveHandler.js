/*******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                      *
 * @CreatedDate           : 2025-08-19 12:00:23                                *
 * @LastEditors           : Robert Huang<56649783@qq.com>                      *
 * @LastEditDate          : 2026-01-25 23:26:31                                *
 * @FilePath              : mybatis-sql-formatter/src/main/saveHandler.js      *
 * @CopyRight             : MerBleueAviation                                   *
 ******************************************************************************/

const vscode = require("vscode");
const logger = require("./logger");
const { format: formatXml } = require("./formatter");

const t = vscode.l10n.t;

const formatCurrentEditor = () => {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const doc = editor.document;
    const text = doc.getText();
    const fileName = doc.fileName;

    if (fileName.endsWith("pom.xml")) {
      logger.info(t("Skip formatting pom.xml"));
      return;
    }

    editor.edit((editBuilder) => {
      try {
        logger.info(t("Mybatis SQL Formatting", fileName));

        try {
          const formatted = formatXml(text);
          const fullRange = new vscode.Range(
            doc.positionAt(0),
            doc.positionAt(text.length),
          );
          editBuilder.replace(fullRange, formatted);
        } catch (err) {
          logger.error("Format error", err);
        }

      } catch (e) {
        logger.error("", e);
      }
    });
  }
};

/**
 * Handles the save operation event
 * @param {vscode.TextDocumentWillSaveEvent} [e] - The event object containing document information
 */
const saveHandler = (e) => {
  if (e && e.document) {
    e.document.isDirty ? formatCurrentEditor() : logger.info(t("File not changed"));
  } else {
    formatCurrentEditor();
  }
};
module.exports = saveHandler;
