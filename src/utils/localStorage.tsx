import { UserType } from "../types/user";

let cart: any = [];

export const authenticated = (key: string, data: UserType) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const isAuthenticate = (key: string) => {
    if (!localStorage.getItem(key)) return
    return JSON.parse(localStorage.getItem(key) as string);
};

export const Signout = (key: string) => {
    localStorage.removeItem(key)
}

if (localStorage.getItem("cart")) {
    cart = isAuthenticate("cart")
}

export const addToCart = (newItem: any, next: any) => {
    const existItem = cart.find((item: any) => item.id === newItem.id);
    if (!existItem) {
        cart.push(newItem);
    } else {
        existItem.quantity += newItem.quantity;
    }
    authenticated("cart", cart);
    next();
};