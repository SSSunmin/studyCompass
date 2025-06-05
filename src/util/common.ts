export const getToken = ()=>{
    return window.localStorage.getItem('accessToken')
}

export const getRefreshToken=()=>{
    return window.localStorage.getItem('refreshToken')
}

export const setAccessToken = (token:string, key:string) => {
    window.localStorage.setItem(key, token);
}

export const clearToken = () => {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
}

