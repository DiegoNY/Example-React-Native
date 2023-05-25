import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type card_product = {};

const card_product: card_product[] = [];

export const sale = createSlice({
  name: "sale",
  initialState: {
    payment_type: 1,
    products_card: card_product,
    view_card_product: false,
    view_modal_add_product: false,
    view_sell: false,
  },
  reducers: {
    ChangePaymentType: (state, action) => {
      const { payment } = action.payload;
      state.payment_type = payment;
    },
    AddCardProduct: (state, action) => {
      state.products_card.push(action.payload);
    },
    ChangeCardProduct: (state) => {
      state.view_card_product = !state.view_card_product;
    },
    ChangeAddModalProduct: (state) => {
      state.view_modal_add_product = !state.view_modal_add_product;
    },
    ChangeSale: (state) => {
      state.view_sell = !state.view_sell;
    },
  },
});

export const {
  AddCardProduct,
  ChangeCardProduct,
  ChangeAddModalProduct,
  ChangeSale,
  ChangePaymentType,
} = sale.actions;

export default sale.reducer;
