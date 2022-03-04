import {
  fetchAddTask,
  fetchChangeCol,
  fetchDeleteCol,
  fetchDnDColumn,
  fetchDnDTask,
  fetchNewCol,
} from "./../../thunks/column";
import { createSlice } from "@reduxjs/toolkit";

declare global {
  interface IColumn {
    id: number | string;
    title: string;
    userId: number | string | null;
    tasks: ITask[];
  }

  interface ITask {
    id: number | string;
    title: string;
    desc: string;
    createdAt: string;
    updatedAt: string;
    tag: number | string | null;
    columnId: number | string | null;
  }
}

const initColumns: IColumn[] = [
  {
    id: "1",
    title: "Create",
    userId: null,
    tasks: [
      {
        id: 12,
        title: "First task",
        desc: "",
        createdAt: "",
        updatedAt: "",
        tag: null,
        columnId: 1,
      },
    ] as ITask[],
  },
  {
    id: "100",
    title: "Done",
    userId: null,
    tasks: [] as ITask[],
  },
];

export const columnsSlice = createSlice({
  name: "columns",
  initialState: {
    columns:
      JSON.parse(localStorage.getItem("columns")) || (initColumns as IColumn[]),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewCol.fulfilled, (state, action) => {
      state.columns.push(action.payload);
      localStorage.setItem("columns", JSON.stringify(state.columns));
    });

    // change title
    builder.addCase(fetchChangeCol.fulfilled, (state, action) => {
      let currentCol: IColumn = state.columns.filter(
        (col) => col.id === action.payload.id
      )[0];
      let colIdx = state.columns.findIndex(
        (col) => col.id === action.payload.id
      );
      currentCol.title = action.payload.title;

      state.columns.splice(colIdx, 1, currentCol);
      localStorage.setItem("columns", JSON.stringify(state.columns));
    });

    // delete column
    builder.addCase(fetchDeleteCol.fulfilled, (state, action) => {
      let colIdx = state.columns.findIndex(
        (col) => col.id === action.payload.id
      );

      state.columns.splice(colIdx, 1);
      localStorage.setItem("columns", JSON.stringify(state.columns));
    });

    // add task
    builder.addCase(fetchAddTask.fulfilled, (state, action) => {
      let colIdx = state.columns.findIndex(
        (col) => col.id === action.payload.columnId
      );
      state.columns[colIdx].tasks.push(action.payload);
      localStorage.setItem("columns", JSON.stringify(state.columns));
    });

    // fetch order DnD Column
    builder.addCase(fetchDnDColumn.fulfilled, (state, action) => {
      const options = action.payload;
      const newColIdx = state.columns.findIndex(
        (el) => el.id === options.newColId
      );
      const oldColIdx = state.columns.findIndex(
        (el) => el.id === options.oldColId
      );

      const col = state.columns.splice(oldColIdx, 1)[0];
      state.columns.splice(newColIdx, 0, col);
      localStorage.setItem("columns", JSON.stringify(state.columns));
    });

    // fetch order DnD Task
    builder.addCase(fetchDnDTask.fulfilled, (state, action) => {
      const data = action.payload;
      if (data.type === "INSIDE") {
        // console.log(" fetchDnDTask: ", data);
      } else if (data.type === "OUTSIDE") {
        // console.log(" not pass: ", data.type);
      }

      // localStorage.setItem("columns", JSON.stringify(state.columns));
    });
  },
});

// Action creators are generated for each case reducer function
// export const { toggleLoader } = columnsSlice.actions;

export default columnsSlice.reducer;
