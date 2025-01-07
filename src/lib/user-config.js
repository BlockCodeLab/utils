import keyMirror from 'keymirror';

const Config = keyMirror({
  Language: null,
  DockReversed: null,
});

// 用户语言
//
export function putUserLanguage(language) {
  localStorage.setItem(Config.Language, language);
}

export function getUserLanguage() {
  return localStorage.getItem(Config.Language);
}

// 编辑器配置
//
// 不同编辑器独立设置
export function putEditorAllConfig(editor, config) {
  localStorage.setItem(editor, JSON.stringify(config));
}

export function getEditorAllConfig(editor) {
  const configStr = localStorage.getItem(editor);
  return JSON.parse(configStr);
}

export function putEditorConfig(editor, key, value) {
  const config = getEditorAllConfig(editor);
  config[key] = value;
  putEditorAllConfig(editor);
}

export function getEditorConfig(editor, key) {
  const config = getEditorAllConfig(editor);
  return config[key];
}

// 停靠栏是否反转
//
export function putDockReversed(editor, flag) {
  putEditorConfig(editor, Config.DockReversed, flag);
}

export function getDockReversed(id) {
  return getEditorConfig(editor, Config.DockReversed);
}
