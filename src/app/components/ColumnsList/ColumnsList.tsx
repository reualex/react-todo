import React, {useState} from "react";
import ColumnCard from "./ColumnCard";
import { useDrop } from "react-dnd";


const ColumnsList = (props) => {
  // const [idx, setIdx] = useState(null);
    const [, drop] = useDrop(
    () => ({
      accept: 'COLUMN',
      drop(item, monitor) {
        console.log("item: ", item);
        console.log("monitor: ", monitor);
      },
     
    }),
    []
  );
  return (
    <ul id="columns" ref={drop} className="col-list">
      {props.list.map((col, index) => {
        return <ColumnCard column={col} index={index} />;
      })}
    </ul>
  );
};

export default ColumnsList;
