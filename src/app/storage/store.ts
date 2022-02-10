import loaderSlice from './features/loader/loaderSlice';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';

declare global {
  interface IState {
    user: IUsersState
  }
}

export const store = configureStore({
  reducer: {
    user: userSlice,
    loader: loaderSlice,
  },
});
