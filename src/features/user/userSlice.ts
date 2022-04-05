import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signup } from "../../api/user";


export const createUser = createAsyncThunk(
    "user/createUser",
    async (user: any) => {
        try {
            const { data }: any = await signup(user)
            return data

        } catch (error) {
            console.log(error);

        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        value: []
    },
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(createUser.fulfilled, (state, action) => {
            state.value = action.payload

        })
    }
})

export default userSlice.reducer