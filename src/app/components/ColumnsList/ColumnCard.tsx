import React, { useState, useEffect } from "react";
import { useDrag, useDragLayer } from "react-dnd";

import BasicInput from "../Inputs/BasicInput";
import { useDispatch } from "react-redux";
import CardsList from "./CardsList";
import {
  fetchAddTask,
  fetchChangeCol,
  fetchDeleteCol,
} from "../../storage/thunks/column";
import BasicButton from "../Buttons/BasicButton";
import strings from "../../../../localization";

import uuid from "react-uuid";

interface IProps {
  column: IColumn;
  index: number;
  // ref: any;
}

const ColumnCard = (props: IProps) => {
  const column = props.column;
  const initTask = {
    id: null,
    title: "",
    desc: "",
    columnId: column.id,
    tag: null,
    createdAt: "",
    updatedAt: "",
  };

  const [collected, drag, dragPreview] = useDragLayer((monitor) => ({
    type: "COLUMN",
    // collect: () => ({
    //   isDragging: !!monitor.isDragging(),
    // }),
    isDragging: monitor.isDragging(),
    item: monitor.getItem(),
  }));

  const [showColumnInput, setShowColumnInput] = useState<boolean>(false);
  const [showTaskInput, setShowTaskInput] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(column.title);
  const [newTask, setNewTask] = useState<ITask>(initTask);

  const dispatch = useDispatch();

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

  return collected.isDragging ? (
    <li
      key={column.id + column.title}
      id={column.id + column.title}
      ref={dragPreview}
      className="sort-col"
      style={{
        opacity: true ? 0.5 : 1,
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
          <p onClick={() => setShowColumnInput(true)}>{title}</p>
        )}
      </div>
      <CardsList
        class="col-list--cards"
        list={column.tasks}
        index={props.index}
      />

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
    </li>
  ) : (
    <li
      key={column.id + column.title}
      id={column.id + column.title}
      ref={drag}
      {...collected}
      className="sort-col"
      style={{
        opacity: true ? 0.5 : 1,
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
          <p onClick={() => setShowColumnInput(true)}>{title}</p>
        )}
      </div>
      <CardsList
        class="col-list--cards"
        list={column.tasks}
        index={props.index}
      />

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
    </li>
  );
};

export default ColumnCard;
