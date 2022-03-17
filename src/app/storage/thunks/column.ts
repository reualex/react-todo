import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewCol: any = createAsyncThunk(
  "tasks/addNewCol",
  async (data: any, thunkAPI: any) => {
    const users = thunkAPI.getState().user.users;
    // beacuse its test thunk, just use setTimeout and handler use status pending
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });

    let result = await promise;
    return result;
  }
);

export const fetchChangeCol: any = createAsyncThunk(
  "tasks/changeCol",
  async (data: any, thunkAPI: any) => {
    // beacuse its test thunk, just use setTimeout and handler use status pending
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });

    let result = await promise;
    return result;
  }
);

export const fetchDeleteCol: any = createAsyncThunk(
  "tasks/deleteCol",
  async (data: any, thunkAPI: any) => {
    // beacuse its test thunk, just use setTimeout and handler use status pending
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });

    let result = await promise;
    return result;
  }
);

export const fetchAddTask: any = createAsyncThunk(
  "tasks/addTask",
  async (data: any, thunkAPI: any) => {
    // beacuse its test thunk, just use setTimeout and handler use status pending
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });

    let result = await promise;
    return result;
  }
);

export const fetchDnDColumn: any = createAsyncThunk(
  "column/DnDColumn",
  async (data: any, thunkAPI: any) => {
    // request to back-end for set sort
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 0);
    });

    let result = await promise;
    return result;
  }
);

//fetchDnDTaskEmptyCol
export const fetchDnDTask: any = createAsyncThunk(
  "task/DnDTask",
  async (data: any, thunkAPI: any) => {
    // request to back-end for set sort
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 0);
    });

    let result = await promise;
    return result;
  }
);
export const fetchDnDTaskEmptyCol: any = createAsyncThunk(
  "task/DnDTaskEmptyCol",
  async (data: any, thunkAPI: any) => {
    // request to back-end for set sort
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 0);
    });

    let result = await promise;
    return result;
  }
);
// get position
export const fetchGetDnDColumn: any = createAsyncThunk(
  "column/GetDnDColumns",
  async (data: any, thunkAPI: any) => {
    // request to back-end for get sort
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 0);
    });

    let result = await promise;
    return result;
  }
);
