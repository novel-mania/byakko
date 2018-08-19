import http from './http';

export const getAll = (filters) => {
  const query = filters.reduce((accumulator, filter) =>
    accumulator += `${filter.name}=${filter.value}`, '');
  return http.get(`/chapters?${query}`);
};
export const getById = (novel, id) => http.get(`/novel/${novel}/chapters/${id}`);
