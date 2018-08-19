import http from './http';

export const getAll = () => http.get('/novels');
export const getById = (id) => http.get(`/novels/${id}`);

