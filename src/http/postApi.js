import {$host, $authHost} from "./index";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const getTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createPost = async (post) => {
    const {data} = await $authHost.post('api/post', post)
    return data
}

export const getPosts = async (typeId, userId) => {
    const {data} = await $host.get('api/post', {params: {typeId, userId}})
    return data
}

export const getOnePost = async (id) => {
    const {data} = await $host.get('api/post/' + id)
    return data
}

