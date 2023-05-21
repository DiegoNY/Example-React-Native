import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type card_product = {};

const card_product: card_product[] = [];

export const sale = createSlice({
  name: "sale",
  initialState: {
    products_card: card_product,
    view_card_product: false,
    view_modal_add_product: false,
  },
  reducers: {
    AddCardProduct: (state, action) => {
      state.products_card.push(action.payload);
    },
    ChangeCardProduct: (state) => {
      state.view_card_product = !state.view_card_product;
    },
    ChangeAddModalProduct: (state) => {
      state.view_modal_add_product = !state.view_modal_add_product;
    },
  },
});

export const { AddCardProduct, ChangeCardProduct, ChangeAddModalProduct } =
  sale.actions;

export default sale.reducer;
