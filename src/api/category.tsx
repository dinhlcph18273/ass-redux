import { CategoryType } from "../types/category";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
const user = isAuthenticate('user');

export const createCate = (category: CategoryType) => {
    const url = `/category/${user?.user._id}`
    return instance.post(url, category, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
}
export const listCate = () => {
    const url = "/category"
    return instance.get(url)
}
export const removeCate = (id: any) => {
    const url = `/category/${id}/${user?.user._id}`
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
}
export const updateCate = (category: any) => {
    const url = `/category/${category.id}/${user?.user._id}`
    return instance.put(url, category, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
}
export const readCate = (id: any) => {
    const url = `/category/${id}`
    return instance.get(url)
}
