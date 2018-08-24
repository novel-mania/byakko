/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import * as mutations from './mutation-types';
import { getAll as getNovels } from '~/resources/novels';
import { getAll as getChapters } from '~/resources/chapters';
import {
  getAll as getUsers,
  getById as getUser,
  update as patchUser,
} from '~/resources/users';


export const fetchNovels = async ({ commit }) => {
  const novels = await getNovels();
  commit(mutations.NOVELS, novels.data.data);
};

export const fetchChapters = async ({ commit }, filters) => {
  const chapters = await getChapters(filters);
  commit(mutations.CHAPTERS, chapters.data.data);
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
