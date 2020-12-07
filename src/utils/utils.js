export function isStarred(repositoryId) {
    const starreds = getStarreds();
    return starreds.includes(repositoryId);
}

export function getStarreds() {
    const starreds = window.localStorage.getItem('starreds');
    return starreds ? JSON.parse(starreds) : [];
}

export function markAsStar(repositoryId) {
    let starreds = getStarreds();
    starreds.push(repositoryId);
    window.localStorage.setItem('starreds', JSON.stringify(starreds));
}

export function unmarkAsStar(repositoryId) {
    let starreds = getStarreds();
    starreds.splice(starreds.indexOf(repositoryId), 1);
    window.localStorage.setItem('starreds', JSON.stringify(starreds));
}