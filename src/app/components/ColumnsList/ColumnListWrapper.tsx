import React, { useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useDispatch } from "react-redux";

import BasicButton from "../Buttons/BasicButton";
import BasicInput from "../Inputs/BasicInput";
import "./styles.scss";
import { fetchNewCol } from "../../storage/thunks/column";

import uuid from "react-uuid";

import strings from "../../../../localization";
import ColumnsList from "./ColumnsList";

interface IProps {
  list: IColumn[];
}

const ColumnListWrapper = (props: IProps) => {
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
    <>
      <DndProvider backend={HTML5Backend}>
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
    </>
  );
};

export default ColumnListWrapper;
