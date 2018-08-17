import http from './http';

export const getAll = () => http.get('/books');
export const getById = (id) => http.get(`/books/${id}`);
