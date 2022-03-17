import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { dndTypes } from "../../../constans/dndTypes";
import { fetchDnDTask, fetchDnDTaskEmptyCol } from "../../../storage/thunks/column";
import CardWrapper from "./CardWrapper";

import "./styles.scss";

interface IProps {
  list: ITask[];
  class?: string;
  index: number;
}

const CardsList = (props: IProps) => {
  const dispatch = useDispatch();
  const [, drop] = useDrop(
    () => ({
      accept: dndTypes.CARD,
      drop(item: any, monitor) {
        // console.log('CardWrapper ITEM: ', item);
        // console.log('CardWrapper CARD: ', props.card);
        dispatch(fetchDnDTaskEmptyCol({item, type: 'col'}))
      },
    }),
    []
  );
  return (
    <ul
      id={`task-list--${props.index}--`}
      ref={drop}
      className={`cards-list ${props.class ? props.class : ""}`}
    >
      {props.list.map((el) => {
        return <CardWrapper key={el.id + el.title} card={el} />;
      })}
    </ul>
  );
};

export default CardsList;
