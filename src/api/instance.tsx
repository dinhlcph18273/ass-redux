import axios from "axios";

const instance = axios.create({
    baseURL: "https://node-ass.herokuapp.com/api"
})

export default instance