import * as vscode from 'vscode'
import type { MessageOption } from './types'

/**
 * 消息弹窗
 * @param options {
 *  message: string
 *  type?: 'info' | 'error' | 'warn'
 *  buttons?: string[] | string
 *  }
 * @returns
 */
export function message(options: MessageOption | string) {
  let type = 'info'
  let message = ''
  let buttons: string[] = []
  if (typeof options === 'string') {
    message = options
  }
  else {
    const {
      type: _type = 'info',
      message: _message,
      buttons: _buttons = [],
    } = options
    type = _type
    message = _message
    buttons = Array.isArray(_buttons) ? _buttons : [_buttons]
  }

  return type === 'info'
    ? vscode.window.showInformationMessage(message, ...buttons)
    : type === 'error'
      ? vscode.window.showErrorMessage(message, ...buttons)
      : vscode.window.showWarningMessage(message, ...buttons)
}

message.info = function (
  options: string | { message: string; buttons: string[] | string },
) {
  let message = ''
  let buttons: string[] = []
  if (typeof options === 'string') {
    message = options
  }
  else {
    const { message: _message, buttons: _buttons = [] } = options
    message = _message
    buttons = Array.isArray(_buttons) ? _buttons : [_buttons]
  }
  return vscode.window.showInformationMessage(message, ...buttons)
}

message.error = function (
  options: string | { message: string; buttons: string[] | string },
) {
  let message = ''
  let buttons: string[] = []
  if (typeof options === 'string') {
    message = options
  }
  else {
    const { message: _message, buttons: _buttons = [] } = options
    message = _message
    buttons = Array.isArray(_buttons) ? _buttons : [_buttons]
  }
  return vscode.window.showErrorMessage(message, ...buttons)
}

message.warn = function (
  options: string | { message: string; buttons: string[] | string },
) {
  let message = ''
  let buttons: string[] = []
  if (typeof options === 'string') {
    message = options
  }
  else {
    const { message: _message, buttons: _buttons = [] } = options
    message = _message
    buttons = Array.isArray(_buttons) ? _buttons : [_buttons]
  }
  return vscode.window.showWarningMessage(message, ...buttons)
}
