import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  components: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exist = state.components?.find(
        (item) => item.category === action.payload.category
      );
      if (!exist) {
        state.components.push(action.payload);
      } else {
        toast.error("Component already selected.");
      }
    },
    removeItem: (state, action) => {
      state.components = state.components.filter(
        (product) => product._id.toString() !== action.payload._id.toString()
      );
    },
  },
});

export const { addItem, removeItem } = productSlice.actions;

export default productSlice.reducer;
