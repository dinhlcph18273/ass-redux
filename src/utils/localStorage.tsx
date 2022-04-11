import { notification } from "antd";
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
    const existItem = cart.find((item: any) => item._id === newItem._id);
    if (!existItem) {
        cart.push(newItem);
    } else {
        existItem.quantity += newItem.quantity;
    }
    authenticated("cart", cart);
    next();
};
export const removeItemFromCart = (id: any, next: any) => {
    const confirm = window.confirm("Chú có chắc muốn xóa không?");
    if (confirm) {
        cart = cart.filter((item: any) => item._id !== id);
        notification.success({
            message: "Xóa thành công"
        })
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const increaseQuantityFromCart = (id: any, next: any) => {
    cart.find((item: any) => item.id === id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const decreaseQuantityFromCart = (id: any, next: any) => {
    const currentProduct = cart.find((item: any) => item.id === id);
    currentProduct.quantity--;
    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Chú có chắc chắn muốn xóa không?");
        if (confirm) {
            cart = cart.filter((item: any) => item.id !== id);
        }
        currentProduct.quantity += 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const getTotalPrice = () => {
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart") as string);
    }
    const { user } = JSON.parse(localStorage.getItem("user") as string);
    let toTal = 0;
    cart = cart.filter((item: any) => item.user === user._id);
    cart.forEach((element: any) => {
        toTal += Number(element.price) * element.quantity;
    });
    return toTal;
};