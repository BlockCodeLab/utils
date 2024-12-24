export { default as classNames } from 'classnames';

export { default as JSZip } from 'jszip';

export { default as Konva } from 'konva';

export { default as keyMirror } from 'keymirror';

export { default as localForage } from 'localforage';

export { default as mime } from 'mime/lite';

export { nanoid } from 'nanoid';

export { saveSvgAsPng, svgAsDataUri } from 'save-svg-as-png';

export { Color } from './lib/color';

export { exportFile } from './lib/export-file';

export { flatChildren } from './lib/flat-children';

export { MathUtils } from './lib/math';

export { openProjectFromComputer, saveProjectToComputer } from './lib/project-file';

export {
  delProject,
  getProject,
  putProject,
  cloneProject,
  renameProject,
  getProjectsThumbs,
} from './lib/project-storage';

export { isDesktop, isMac, sleep, sleepMs, xmlEscape } from './lib/simples';

export { getUserLanguage, putUserLanguage, getDockReversed, putDockReversed } from './lib/user-config';
