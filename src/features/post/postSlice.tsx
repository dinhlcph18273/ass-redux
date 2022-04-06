import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post } from "../../api/post";

export const listPost = createAsyncThunk(
    "post/listPost",
    async () => {
        try {
            const { data }: any = await post()
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

const postSlice = createSlice({
    name: "post",
    initialState: {
        value: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(listPost.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default postSlice.reducer