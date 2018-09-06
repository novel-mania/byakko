import http from './http';

export const getAll = () => http.get('/roles');
export const getById = id => http.get(`/roles/${id}`);
