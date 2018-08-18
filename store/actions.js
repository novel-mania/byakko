/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import * as mutations from './mutation-types';
import { getAll as getNovels } from '~/resources/novels';
import { getAll as getChapters } from '~/resources/chapters';

export const fetchNovels = async ({ commit }) => {
  const novels = await getNovels();
  commit(mutations.NOVELS, novels.data.data);
};

export const fetchChapters = async ({ commit }) => {
  const chapters = await getChapters();
  commit(mutations.CHAPTERS, chapters.data.data);
};