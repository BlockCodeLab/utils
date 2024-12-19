import localForage from 'localforage';
import { nanoid } from 'nanoid';

// 创建项目本地数据库
// INFO: 旧数据库名 blockcode-store
localForage.config({
  name: 'blockcode-storage',
});

export async function getProject(key) {
  return await localForage.getItem(key);
}

export async function putProject(project, onGetThumb) {
  const key = project.key || nanoid();
  await localForage.setItem(key, {
    key,
    id: project.id,
    name: project.name,
    files: project.files,
    assets: project.assets,
    modifiedDate: Date.now(),
    thumb: onGetThumb(onGetThumb),
    meta: project.meta,
  });
  return key;
}

export async function renameProject(key, name) {
  const project = await localForage.getItem(key);
  project.name = name;
  await localForage.setItem(project.key, project);
}

export async function cloneProject(key) {
  const project = await getProject(key);
  project.key = nanoid();
  project.modifiedDate = Date.now();
  await localForage.setItem(project.key, project);
}

export async function delProject(key) {
  await localForage.removeItem(key);
}

export async function getProjectsThumbs() {
  let result = [];
  await localForage.iterate((project, key) => {
    result.push({
      key,
      id: project.id,
      name: project.name,
      thumb: project.thumb,
      modifiedDate: project.modifiedDate,
      meta: project.meta,
    });
  });
  // 从新到旧排序
  result = result.sort((a, b) => b.modifiedDate - a.modifiedDate);
  return result;
}
