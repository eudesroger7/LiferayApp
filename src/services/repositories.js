import { api } from './api';

export async function getRepository(path) {
    const response = await api.get(`/repos/${path}`);
    return response;
}

export function index() {
    const data = window.localStorage.getItem('repositories');
    return data ? JSON.parse(data) : [];
}

export function store(repository) {
    let data = index();
    data.push(repository);
    window.localStorage.setItem('repositories', JSON.stringify(data));
}