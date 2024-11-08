const TOKEN_KEY = "planea-in-accesstoken1.2";

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function unsetToken() {
    localStorage.removeItem(TOKEN_KEY);
}