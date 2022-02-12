import React, { useState } from "react";
import { useDispatch } from "react-redux";

import ColumnCard from "./ColumnCard";
import BasicButton from "../../components/Buttons/BasicButton";
import BasicInput from "../../components/Inputs/BasicInput";
import "./styles.scss";
import { fetchDnDColumn, fetchNewCol } from "../../storage/thunks/column";
import uuid from "react-uuid";

import strings from "../../../../localization";

// import { Draggable } from "react-beautiful-dnd";

interface IProps {
  list: IColumn[];
}

const ColumnsList = (props: IProps) => {
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

  const onDragEnd = (result) => {
    // the only one that is required
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const res = reorder(
      props.list,
      result.source.index,
      result.destination.index
    );
    dispatch(fetchDnDColumn(res));
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <div>
            <div>
              <ul className="col-list">
                {props.list.map((col, index) => {
                  return <ColumnCard column={col} index={index} />;
                })}
              </ul>
            </div>
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

export default ColumnsList;
