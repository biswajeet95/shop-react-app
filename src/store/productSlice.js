const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "LOADING",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  //   reducers: {
  //     // setProducts(state, action) {
  //     //   state.data = action.payload;
  //     // },

  //     // setStatus(state, action) {
  //     //   state.status = action.payload;
  //  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const json = await res.json();
  return json;
});

// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       let res = await fetch("https://fakestoreapi.com/products");
//       let json = await res.json();
//       dispatch(setProducts(json));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (err) {
//         dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
