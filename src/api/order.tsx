import instance from "./instance"

export const Listorder = async () => {
    const url = `/order`
    return instance.get(url)
}
export const readorder = async (id: any) => {
    const url = `/order/:id`
    return instance.get(url)
}
export const createorder = async (order: any) => {
    const url = `/order`
    return instance.post(url, order)
}

export const removeorder = async (id: any) => {
    const url = `/order/:id`
    return instance.delete(url)
}

export const updateorder = async (order: any) => {
    const url = `/order/${order._id}`
    return instance.put(url, order)
}