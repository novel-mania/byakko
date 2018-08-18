import http from './http';

export const getAll = () => http.get('/chapters');
export const getById = (id) => http.get(`/chapters/${id}`);
