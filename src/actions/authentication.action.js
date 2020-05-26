export const login = (email, password) => {
    return {
        type:'AUTHENTICATION_LOGIN',
        email,
        password
    }
}