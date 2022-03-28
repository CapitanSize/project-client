import {$host, $authHost} from "./index";
import jwt_decode from "jwt-decode"

export const registration = async (email, password, nick) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: '', nick})
    const {token, authUser} = data
    localStorage.setItem('token', token)
    localStorage.setItem('authUser', JSON.stringify(authUser))
    return jwt_decode(token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    const {token, authUser} = data
    localStorage.setItem('token', token)
    localStorage.setItem('authUser', JSON.stringify(authUser))
    return jwt_decode(token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const getOneUser = async (id) => {
    const {data} = await $authHost.get('api/user/' + id)
    return data
}

