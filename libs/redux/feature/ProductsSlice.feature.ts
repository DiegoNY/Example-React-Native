import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductService } from "../../../service/product.service";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (token: string) => {
    const service = new ProductService(token);
    const products = await service.GetProducts();
    return products;
  }
);

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: false,
  },
  reducers: {
    SetProduct: (state, action) => {
      const { products } = action.payload;
      state.products = products;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const products = action.payload;
        state.products = products;
        console.log(products);
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        const error = action.error;
        console.log(error);
        state.loading = false;
        state.error = true;
      });
  },
});

export const { SetProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
