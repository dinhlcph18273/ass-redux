import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import userReducer from '../features/user/userSlice';
import authReducer from '../features/auth/authSlice';
import categoryReducer from "../features/category/categorySlice"



export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    auth: authReducer,
    category: categoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
