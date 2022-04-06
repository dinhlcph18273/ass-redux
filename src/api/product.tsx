import { ProductType } from "../types/product";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
const user = isAuthenticate('user');

export const list = () => {
    const url = '/products';
    return instance.get(url);
}

export const add = (product: ProductType) => {
    const url = `/products/${user?.user._id}`
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
}
export const read = (id: any) => {
    const url = `/products/${id}`
    return instance.get(url)
}

export const remove = (id: number) => {
    const url = `/products/${id}/${user?.user._id}`
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
}

export const update = (product: any) => {
    const url = `/products/${product.id}/${user?.user._id}`
    return instance.put(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
}