import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDnDTaskPosition } from "../../../storage/thunks/column";

import "./styles.scss";

interface IProps {
  list: ITask[];
  class?: string;
  index: number;
}

const CardsList = (props: IProps) => {
  //   const taskList = useRef();
//   const dispatch = useDispatch();

  //   const [sortable, setSortable] = useState();

  return (
    <ul
      id={`task-list--${props.index}--`}
      className={`cards-list ${props.class ? props.class : ""}`}
    >
      {props.list.map((el) => {
        return <li key={el.id + el.title} id={`${el.id}`}>{el.title}</li>;
      })}
    </ul>
  );
};

export default CardsList;
