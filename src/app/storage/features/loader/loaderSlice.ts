import { fetchNewCol, fetchChangeCol, fetchDeleteCol, fetchAddTask } from './../../thunks/column';
import { fetchLoginData } from "./../../thunks/user";
import { fetchLogout } from "./../../thunks/user";
import { createSlice } from "@reduxjs/toolkit";

declare global {
  interface ILoaderState {
    loading: boolean;
  }
}

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loading: false,
  } as ILoaderState,
  reducers: {
    toggleLoader: (state) => {
      state.loading = !state.loading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoginData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchLoginData.fulfilled, (state, action) => {
      state.loading = action.payload.loader;
    });

    builder.addCase(fetchLogout.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchLogout.fulfilled, (state, action) => {
      state.loading = action.payload.loader;
    });

    builder.addCase(fetchNewCol.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchNewCol.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(fetchChangeCol.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchChangeCol.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(fetchDeleteCol.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchDeleteCol.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(fetchAddTask.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAddTask.fulfilled, (state, action) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { toggleLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
