export function isFavorite(repositoryId) {
    const favorites = getFavorites();
    return favorites.includes(repositoryId);
}

export function getFavorites() {
    const favorites = window.localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}

export function markAsFavorite(repositoryId) {
    let favorites = getFavorites();
    favorites.push(repositoryId);
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function unmarkAsFavorite(repositoryId) {
    let favorites = getFavorites();
    favorites.splice(favorites.indexOf(repositoryId), 1);
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
}