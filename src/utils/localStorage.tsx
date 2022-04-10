import { UserType } from "../types/user";

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