import http from './http';

export const getAll = (filters) => {
  const query = filters.reduce((accumulator, filter) =>
    accumulator += `${filter.name}=${filter.value}`, '');
  return http.get(`/chapters?${query}`);
};
export const getById = id => http.get(`/chapters/${id}`);
export const create = (novel, chapter) => http.post(`/novels/${novel}/chapters`, chapter);
export const update = (id, chapter) => http.patch(`/chapters/${id}`, chapter);
