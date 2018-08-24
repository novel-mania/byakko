import http from './http';

export const getAll = () => http.get('/users');
export const getById = id => http.get(`/users/${id}`);
export const update = (id, user) => http.patch(`/users/${id}`, user);
