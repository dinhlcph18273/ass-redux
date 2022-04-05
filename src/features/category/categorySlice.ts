import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCate, listCate, readCate, removeCate, updateCate } from "../../api/category";

export const listCategory = createAsyncThunk(
    "category/listCategory",
    async () => {
        try {
            const { data }: any = await listCate()
            return data
        } catch (error) {
            console.log(error);

        }
    }
)
export const removeCategory = createAsyncThunk(
    "category/removeCategory",
    async (id: any) => {
        try {
            const { data } = await removeCate(id)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const addCategory = createAsyncThunk(
    "category/addCategory",
    async (category: any) => {
        try {
            const { data }: any = await createCate(category)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const editCategory = createAsyncThunk(
    "category/editCategory",
    async (category: any) => {
        try {
            const { data } = await updateCate(category)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const readCategory = createAsyncThunk(
    "category/readCategory",
    async (id: any) => {
        try {
            const { data }: any = await readCate(id)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState: {
        value: [],
        valueOne: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(listCategory.fulfilled, (state: any, action: any) => {
            state.value = action.payload
        })
        builder.addCase(removeCategory.fulfilled, (state: any, action: any) => {
            state.value = state.value.filter((item: any) => item._id !== action.payload._id)
        })
        builder.addCase(addCategory.fulfilled, (state: any, action: any) => {
            state.value.push(action.payload)
        })
        builder.addCase(editCategory.fulfilled, (state: any, action: any) => {
            state.value = state.value.map((item: any) => item._id === action.payload._id ? action.payload : item)
        })
    }
})

export default categorySlice.reducer;