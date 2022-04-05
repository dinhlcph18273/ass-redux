import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signin } from "../../api/user";
import { authenticated } from "../../utils/localStorage";


export const login = createAsyncThunk(
    "auth/login",
    async (user: any) => {
        try {
            console.log(user);
            const { data }: any = await signin(user)
            authenticated("user", data)
        } catch (error) {
            console.log(error)
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: {},
        isSignin: false
    },
    reducers: {

    },
    extraReducers: (builder: any) => {
        builder.addCase(login.fulfilled, (state: any, action: any) => {
            state.auth = action.payload;
            state.isSignin = true
        })
    }
})
export default authSlice.reducer