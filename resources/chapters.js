import http from './http';

export const getAll = (filters) => {
  const query = filters.reduce((accumulator, filter) =>
    accumulator += `${filter.name}=${filter.value}`, '');
  return http.get(`/chapters?${query}`);
};
export const getById = id => http.get(`/chapters/${id}`);
export const update = (id, user) => http.patch(`/chapters/${id}`, user);
