/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import * as mutations from './mutation-types';
import {
  getAll as getNovels,
  getById as getNovel,
  update as patchNovel
} from '~/resources/novels';
import {
  getAll as getChapters,
  getById as getChapter,
  update as patchChapter,
} from '~/resources/chapters';
import {
  getAll as getUsers,
  getById as getUser,
  update as patchUser,
} from '~/resources/users';
import {
  getAll as getRoles,
  getById as getRole,
} from '~/resources/roles';


export const fetchNovels = async ({ commit }) => {
  const novels = await getNovels();
  commit(mutations.NOVELS, novels.data.data);
};

export const fetchNovel = async ({ commit }, novelId) => {
  const novel = await getNovel(novelId);
  commit(mutations.NOVEL, novel.data.data);
};

export const updateNovel = async ({ commit, state }, novelData) => {
  const novelId = state.novels.novel.id;
  const novel = await patchNovel(novelId, novelData);
  commit(mutations.NOVEL, novel.data.data);
};

export const fetchChapters = async ({ commit }, filters) => {
  const chapters = await getChapters(filters);
  commit(mutations.CHAPTERS, chapters.data.data);
};

export const fetchChapter = async ({ commit }, chapterId) => {
  const chapter = await getChapter(chapterId);
  commit(mutations.CHAPTER, chapter.data.data);
};

export const updateChapter = async ({ commit, state }, chapterData) => {
  const chapterId = state.chapters.chapter.id;
  const chapter = await patchChapter(chapterId, chapterData);
  commit(mutations.CHAPTER, chapter.data.data);
};

export const addChaptersFilter = ({commit}, filter) =>
  commit(mutations.CHAPTER_FILTERS_ADD, filter);

export const fetchUsers = async ({ commit }) => {
  const users = await getUsers();
  commit(mutations.USERS, users.data.data);
};

export const fetchUser = async ({ commit }, userId) => {
  const user = await getUser(userId);
  commit(mutations.USER, user.data.data);
};

export const updateUser = async ({ commit, state }, userData) => {
  const userId = state.users.user.id;
  const user = await patchUser(userId, userData);
  commit(mutations.USER, user.data.data);
};

export const fetchRoles = async ({ commit }) => {
  const roles = await getRoles();
  commit(mutations.ROLES, roles.data.data);
};

export const fetchRole = async ({ commit }, roleId) => {
  const role = await getRole(roleId);
  commit(mutations.ROLE, role.data.data);
};
