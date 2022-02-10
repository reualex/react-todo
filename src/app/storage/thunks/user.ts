import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLoginData: any = createAsyncThunk(
    "user/submitForm",
    async (data: any, thunkAPI: any) => {
      const users = thunkAPI.getState().user.users;
      // beacuse its test thunk, just use setTimeout and handler use status pending
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          const res = {
            currentUser: {},
            isAuth: false,
            error: "",
            loader: false,
          };
  
          const currentUser = users.filter(
            (user) => user.login === data.login && user.password === data.password
          )[0];
  
  
          if (currentUser) {
            res.currentUser = currentUser;
            res.isAuth = true;
          } else {
            res.error = "Invalid login or password";
          }
          resolve(res);
        }, 1500);
      });
  
      let result = await promise;
      return result;
    }
  );

  export const fetchLogout: any = createAsyncThunk(
    "user/logout",
    async (data: any, thunkAPI: any) => {
      const users = thunkAPI.getState().user.users;
      // beacuse its test thunk, just use setTimeout and handler use status pending
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          const res = {
            currentUser: {},
            isAuth: false,
            error: "",
            loader: false,
          };
          resolve(res);
        }, 1000);
      });
  
      let result = await promise;
      return result;
    }
  );