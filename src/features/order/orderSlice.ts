import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createorder } from "../../api/order";

export const addOrder = createAsyncThunk(
    "order/addOrder",
    async (order: any) => {
        try {
            const { data } = await createorder(order)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

const orderSlice = createSlice({
    name: "order",
    initialState: {
        value: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addOrder.fulfilled, (state: any, action: any) => {
            state.value.push(action.payload)
        })
    }
})

export default orderSlice.reducer