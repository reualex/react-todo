import React from "react";
import { useDrop } from "react-dnd";

import { useDispatch } from "react-redux";
import { fetchDnDColumn } from "../../../storage/thunks/column";

import ColumnCard from ".";
import { dndTypes } from "../../../constans/dndTypes";

interface IProps {
  column: IColumn;
  index: number;
}

const ColumnCardWrapper = (props: IProps) => {
  const column = props.column;

  const dispatch = useDispatch();

  const reorder = (newColId, oldColId) => {
    if (newColId !== oldColId) {
      dispatch(fetchDnDColumn({ newColId, oldColId }));
    }
  };

  const [, drop] = useDrop(
    () => ({
      accept: dndTypes.COLUMN,
      drop(item: any, monitor) {
        const newColId = props.column.id;
        const oldColId = item.id;
        reorder(newColId, oldColId);
      },
      hover(item: any, m) {
        const newColId = props.column.id;
        const oldColId = item.id;
        reorder(newColId, oldColId);
      },
    }),
    []
  );

  return (
    <li ref={drop} className="sort-col">
      <ColumnCard
        column={column}
        index={props.index}
      />
    </li>
  );
};

export default ColumnCardWrapper;
