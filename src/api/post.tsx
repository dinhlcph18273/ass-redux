import instance from "./instance";

export const post = () => {
    const url = '/post';
    return instance.get(url);
}
