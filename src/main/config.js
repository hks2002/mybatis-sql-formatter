/*******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                      *
 * @CreatedDate           : 2026-01-30 13:00:52                                *
 * @LastEditors           : Robert Huang<56649783@qq.com>                      *
 * @LastEditDate          : 2026-01-30 13:01:49                                *
 * @FilePath              : mybatis-sql-formatter/src/main/config.js           *
 * @CopyRight             : MerBleueAviation                                   *
 ******************************************************************************/
const vscode = require('vscode');

function getFormatterConfig() {
  return vscode.workspace.getConfiguration('mybatis-sql-formatter');
}

module.exports = { getFormatterConfig };