import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readCate } from "../../api/category";
import { add, list, read, remove, search, update } from "../../api/product";

export const getProducts = createAsyncThunk(
    "product/getProduct",
    async () => {
        try {
            const { data } = await list();
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const addProducts = createAsyncThunk(
    "product/addProducts",
    async (product: any) => {
        try {
            const { data } = await add(product);
            return data

        } catch (error) {
            console.log(error);
        }
    }
)
export const removeProducts = createAsyncThunk(
    "product/removeProducts",
    async (id: any) => {
        try {
            const { data } = await remove(id);
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
export const updateProducts = createAsyncThunk(
    "product/updateProducts",
    async (product: any) => {
        try {
            const { data } = await update(product)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
export const readProduct = createAsyncThunk(
    "product/readProduct",
    async (id: any) => {
        try {
            const { data } = await read(id)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const readProductWithCate = createAsyncThunk(
    "product/readProductWithCate",
    async (id: any) => {
        try {
            const { data: { products } } = await readCate(id)
            return products
        } catch (error) {
            console.log(error);
        }
    }
)

export const SearchProducts = createAsyncThunk(
    "product/SearchProducts",
    async (q) => {
        try {
            const { data } = await search(q)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
const productSlice = createSlice({
    name: "product",
    initialState: {
        value: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state: any, action: any) => {
            state.value = action.payload
        });
        builder.addCase(removeProducts.fulfilled, (state: any, action: any) => {
            state.value = state.value.filter((item: any) => item._id !== action.payload._id)
        });
        builder.addCase(addProducts.fulfilled, (state: any, action: any) => {
            state.value.push(action.payload)
        });
        builder.addCase(readProduct.fulfilled, (state: any, action: any) => {
            state.value = action.payload
        });
        builder.addCase(updateProducts.fulfilled, (state: any, action: any) => {
            state.value = state.value.map((item: any) =>
                item._id === action.payload._id ? action.payload : item)
        })
        builder.addCase(readProductWithCate.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(SearchProducts.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default productSlice.reducer