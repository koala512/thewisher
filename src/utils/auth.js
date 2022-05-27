
// authenticate a user with a token and a uuid then save it in localStorage
export const authenticateUser = (token, uuid) => {
    localStorage.setItem('token', token);
    localStorage.setItem('uuid', uuid);
}

export const isUserAuthenticated = () => {
    return localStorage.getItem('token') !== null
}

export const deAuthenticateUser = () =>  {
    localStorage.removeItem('token');
  }

export const getToken = () => {
    return localStorage.getItem('token');
}

export const getUuid = () => {
    return localStorage.getItem('uuid');
}