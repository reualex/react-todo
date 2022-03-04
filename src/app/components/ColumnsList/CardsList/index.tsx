import React from "react";
import CardWrapper from "./CardWrapper";

import "./styles.scss";

interface IProps {
  list: ITask[];
  class?: string;
  index: number;
}

const CardsList = (props: IProps) => {
  return (
    <ul
      id={`task-list--${props.index}--`}
      className={`cards-list ${props.class ? props.class : ""}`}
    >
      {props.list.map((el) => {
        return <CardWrapper key={el.id + el.title} card={el} />;
      })}
    </ul>
  );
};

export default CardsList;
