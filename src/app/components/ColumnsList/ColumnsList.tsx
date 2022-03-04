import React from "react";
import ColumnCard from "./ColumnCard/ColumnCardWrapper";


const ColumnsList = (props) => {
  return (
    <ul id="columns" className="col-list">
      {props.list.map((col, index) => {
        return <ColumnCard key={col.id} column={col} index={index} />;
      })}
    </ul>
  );
};

export default ColumnsList;
