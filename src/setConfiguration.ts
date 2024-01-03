import * as vscode from 'vscode'
import type { ConfigurationTarget } from 'vscode'

/**
 * 设置配置
 * @param name 配置名
 * @param value 值
 * @param configurationTarget 范围
 * @param overrideInLanguage 是否覆盖默认
 * @returns
 */
export function setConfiguration(name: string, value: any, configurationTarget?: ConfigurationTarget | boolean | null, overrideInLanguage?: boolean) {
  const config = vscode.workspace.getConfiguration()
  return config.update(name, value, configurationTarget, overrideInLanguage)
}
