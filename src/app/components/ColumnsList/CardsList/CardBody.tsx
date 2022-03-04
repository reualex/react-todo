import React from 'react'
import { useDrag } from 'react-dnd';
import { dndTypes } from '../../../constans/dndTypes';

interface IProps {
    card: ITask;
}
const CardBody = (props: IProps) => {
    const [collected, drag, dragPreview] = useDrag(() => ({
        type: dndTypes.CARD,
        item: { ...props.card },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }));
    return <div ref={collected.isDragging ? dragPreview : drag}>{props.card.title}</div>
};

export default CardBody;