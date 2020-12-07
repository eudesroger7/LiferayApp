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
    data.unshift(repository);
    window.localStorage.setItem('repositories', JSON.stringify(data));
}

export function destroy(repository) {
    let data = index();
    const _index = data.findIndex(_repo => _repo.id == repository.id);
    data.splice(_index, 1);
    window.localStorage.setItem('repositories', JSON.stringify(data));
}