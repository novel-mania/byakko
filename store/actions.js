/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import * as mutations from './mutation-types';
import { getAll as getNovels } from '~/resources/novels';

export const fetchNovels = async ({ commit }) => {
  const novels = await getNovels();
  commit(mutations.NOVELS, novels.data.data);
};
