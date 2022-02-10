import { fetchLogout } from './../../thunks/user';
import { createSlice } from "@reduxjs/toolkit";
import { fetchLoginData } from "../../thunks/user";

declare global {
  interface IUsersState {
    users: IUser[],
    currentUser: IUser,
    isAuth: boolean,
    errors: IErrors
  }
  interface IUser {
    id: string | number,
    name: string
    login: string
    password: string
    picture?: string
  }
  interface IErrors {
    invalidData: string
  }
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        id: 1,
        name: "Alex",
        login: "allexx",
        password: "123321",
      },
      {
        id: 2,
        name: "Jane",
        login: "login",
        password: "password",
        picture: "https://www.anypics.ru/mini/201210/14680.jpg"
      },
    ],
    currentUser: JSON.parse(localStorage.getItem('user')),
    isAuth: JSON.parse(localStorage.getItem('isAuth')),
    errors: {
      invalidData: "",
    },
  } as IUsersState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLoginData.fulfilled, (state: any, action) => {
      localStorage.setItem('isAuth', action.payload.isAuth);
      localStorage.setItem('user', JSON.stringify(action.payload.currentUser));
      state.isAuth = action.payload.isAuth;
      state.currentUser = action.payload.currentUser;
      state.errors.invalidData = action.payload.error;
    });
    // logout 

    builder.addCase(fetchLogout.fulfilled, (state: any, action) => {
      localStorage.setItem('isAuth', action.payload.isAuth);
      localStorage.setItem('user', JSON.stringify(action.payload.currentUser));
      state.isAuth = action.payload.isAuth;
      state.currentUser = action.payload.currentUser;
      state.errors.invalidData = action.payload.error;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { } = userSlice.actions;

export default userSlice.reducer;
