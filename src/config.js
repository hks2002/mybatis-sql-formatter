/*******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                      *
 * @CreatedDate           : 2026-01-30 13:00:52                                *
 * @LastEditors           : Robert Huang<56649783@qq.com>                      *
 * @LastEditDate          : 2026-06-24 00:42:55                                *
 * @FilePath              : mybatis-sql-formatter/src/config.js                *
 * @CopyRight             : MerBleueAviation                                   *
 ******************************************************************************/
import * as vscode from 'vscode'
import packageJson from '../package.json' with { type: 'json' }

const config = vscode.workspace.getConfiguration(`${packageJson.name}`)

export { config }
