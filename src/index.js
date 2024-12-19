export { default as classNames } from 'classnames';

export { default as JSZip } from 'jszip';

export { default as Konva } from 'konva';

export { default as keyMirror } from 'keymirror';

export { default as localForage } from 'localforage';

export { default as mime } from 'mime/lite';

export { nanoid } from 'nanoid';

export { Color } from './lib/color';

export { exportFile } from './lib/export-file';

export { flatChildren } from './lib/flat-children';

export { MathUtils } from './lib/math';

export { openPorjectFromComputer, saveProjectToComputer } from './lib/project-file';

export {
  cloneProject,
  delProject,
  getProject,
  getProjectsThumbs,
  putProject,
  renameProject,
} from './lib/project-storage';

export { isDesktop, isMac, sleep, sleepMs, xmlEscape } from './lib/simples';

export { getDockReversed, getUserLanguage, putDockReversed, putUserLanguage } from './lib/user-config';
