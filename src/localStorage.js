export function getTokenFromLocalStorage() {
  return localStorage.getItem('currentToken');
}

export function setTokenToLocalStorage(token) {
  localStorage.setItem('currentToken', token);
}

export function removeTokenFromLocalStorage() {
  localStorage.removeItem('currentToken');
}
