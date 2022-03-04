import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAddTask,
  fetchChangeCol,
  fetchDeleteCol,
  fetchDnDTask,
} from "../../../storage/thunks/column";
import uuid from "react-uuid";
import BasicInput from "../../Inputs/BasicInput";
import BasicButton from "../../Buttons/BasicButton";
import CardsList from "../CardsList";
import strings from "../../../../../localization";
import { useDrag, useDrop } from "react-dnd";
import { dndTypes } from "../../../constans/dndTypes";

interface IProps {
  column: IColumn;
  index: number;
}

const ColumnCard = (props: IProps) => {
  const { column, index } = props;
  const initTask = {
    id: null,
    title: "",
    desc: "",
    columnId: column.id,
    tag: null,
    createdAt: "",
    updatedAt: "",
  };
  const dispatch = useDispatch();

  const [collected, drag, dragPreview] = useDrag(() => ({
    type: dndTypes.COLUMN,
    item: { ...column },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, dropCard] = useDrop(
    () => ({
      accept: [dndTypes.CARD, dndTypes.CARD_INSIDE],
      drop(item: any, monitor) {
        console.log("monitor: ", monitor.getItemType());
        console.log("item: ", item);
        dispatch(fetchDnDTask({ item, type: "OUTSIDE" }));
      },
    }),
    []
  );

  const [showColumnInput, setShowColumnInput] = useState<boolean>(false);
  const [showTaskInput, setShowTaskInput] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(column.title);
  const [newTask, setNewTask] = useState<ITask>(initTask);
  const handleInput = (value, type) => {
    if (type === "task") {
      setNewTask({ ...newTask, title: value });
    } else {
      setTitle(value);
    }
  };

  const handleSubmitColTitle = () => {
    if (showColumnInput && title !== column.title) {
      dispatch(fetchChangeCol({ id: column.id, title }));
      handleCancel();
    }
  };

  const handleCreateTask = () => {
    if (newTask.title) {
      const data = { ...newTask, id: uuid(), createdAt: Date.now() };
      dispatch(fetchAddTask(data));

      handleCancel();
    }
  };

  const handleCancel = () => {
    setNewTask(initTask);
    setTitle(column.title);
    setShowColumnInput(false);
    setShowTaskInput(false);
  };

  const deleteColumn = () => {
    dispatch(fetchDeleteCol({ id: column.id }));
  };

  const { isDragging, ...restCollected } = collected;
  return (
    <div
      key={column.id + column.title}
      id={column.id + column.title}
      ref={isDragging ? dragPreview : drag}
      data-handler-id={column.id}
      {...restCollected}
      className="sort-col--body"
      style={{
        opacity: isDragging ? "0" : "1",
        cursor: "move",
      }}
    >
      <div className="col-list--title">
        {showColumnInput ? (
          <div className="col-list--input-block">
            <BasicInput
              class="col-list--input"
              value={title}
              onChange={(v) => handleInput(v, "column-title")}
            />
            <BasicButton
              class="col-list--btn"
              text="ok"
              onClick={handleSubmitColTitle}
            />
            <BasicButton
              class="col-list--btn"
              text="x"
              onClick={handleCancel}
            />
          </div>
        ) : (
          <p onClick={() => setShowColumnInput(true)}>{column.title}</p>
        )}
      </div>
      <div ref={dropCard}>
        <CardsList class="col-list--cards" list={column.tasks} index={index} />
      </div>

      <div className="col-list--footer">
        <hr />
        <div>
          {showTaskInput ? (
            <div>
              <div className="col-list--input-block">
                <BasicInput
                  class="col-list--input"
                  value={newTask.title}
                  onChange={(v) => handleInput(v, "task")}
                />
                <BasicButton
                  class="col-list--btn"
                  text="ok"
                  onClick={handleCreateTask}
                />
                <BasicButton
                  class="col-list--btn"
                  text="x"
                  onClick={handleCancel}
                />
              </div>
            </div>
          ) : (
            <p onClick={() => setShowTaskInput(true)}>{strings.addNewTask}</p>
          )}
        </div>
        <div className="col-list--delete" onClick={deleteColumn}>
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ColumnCard;
