import React, { useState, useEffect, useRef } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import ColumnCard from "./ColumnCard";
import BasicButton from "../../components/Buttons/BasicButton";
import BasicInput from "../../components/Inputs/BasicInput";
import "./styles.scss";
import { fetchDnDColumn, fetchNewCol } from "../../storage/thunks/column";

import uuid from "react-uuid";

import strings from "../../../../localization";
import ColumnsList from "./ColumnsList";

interface IProps {
  list: IColumn[];
}

const DnDContainerColumnsList = (props: IProps) => {
  // const colList = useRef();
  // const [, drop] = useDrop(
  //   () => ({
  //     accept: 'COLUMN',
  //     drop(item) {
  //       console.log("item: ", item);
  //     },
  //   }),
  //   []
  // );

  // const [collectedProps, drop] = useDrop(() => ({
  //   accept: "column",
  // }));

  const [showInput, setShowInput] = useState<boolean>(false);
  const [newColTitle, setNewColTitle] = useState<string>("");

  const dispatch = useDispatch();

  const addColumn = () => {
    if (newColTitle.length) {
      dispatch(
        fetchNewCol({
          id: uuid(),
          title: newColTitle,
          tasks: [],
        })
      );
      setNewColTitle("");
      setShowInput(false);
    }
  };

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        {/* <ul id="columns" className="col-list">
          {props.list.map((col, index) => {
            return <ColumnCard column={col} index={index} />;
          })}
        </ul> */}
        <ColumnsList list={props.list} />
        </DndProvider>
      {showInput ? (
        <div className="col-list--new-col">
          <BasicInput value={newColTitle} onChange={(v) => setNewColTitle(v)} />
          <BasicButton text="+" onClick={addColumn} />
          <BasicButton text="x" onClick={() => setShowInput(false)} />
        </div>
      ) : (
        <div className="col-list--new-col">
          <BasicButton
            type="button"
            text={`+ ${strings.addNewCol}`}
            onClick={() => setShowInput(true)}
          />
        </div>
      )}
    </div>
  );
};

export default DnDContainerColumnsList;
