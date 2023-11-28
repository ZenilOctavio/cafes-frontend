
export const saveTokenSessionStorage = (token: string) => {
  sessionStorage.setItem('token',token)
}

export const getTokenFromLocalStorage = () => {
  return sessionStorage.getItem('token')
}
