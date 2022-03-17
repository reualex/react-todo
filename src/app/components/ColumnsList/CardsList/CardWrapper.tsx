import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { dndTypes } from "../../../constans/dndTypes";
import { fetchDnDTask } from "../../../storage/thunks/column";
import CardBody from "./CardBody";
interface IProps {
  card: ITask;
}
const CardWrapper = (props: IProps) => {
  const dispatch = useDispatch();
  const [, drop] = useDrop(
    () => ({
      accept: dndTypes.CARD,
      drop(item: any, monitor) {
        console.log("CardWrapper ITEM: ", item);
        // console.log('CardWrapper CARD: ', props.card);
        dispatch(fetchDnDTask({ oldTask: item, newTask: props.card }));
      },
    }),
    []
  );
  return (
    <li id={`${props.card.id}`} ref={drop}>
      <CardBody card={props.card} />
    </li>
  );
};

export default CardWrapper;
