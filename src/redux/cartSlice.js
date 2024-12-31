import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const isItem = state.items.find(
        (value) =>
          value.id == action.payload.id && value.color == action.payload.color
      );
      if (isItem) {
        isItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.items = state.items.filter(
        (item) =>
          !(item.id == action.payload.id && item.color == action.payload.color)
      );
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
