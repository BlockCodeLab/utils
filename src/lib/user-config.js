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

// 左右侧边栏反转
//
// 不同编辑器独立设置
export function putDockReversed(id, flag) {
  localStorage.setItem(`${Config.DockReversed}:${id}`, flag);
}

export function getDockReversed(id) {
  return localStorage.getItem(`${Config.DockReversed}:${id}`) === 'true';
}
