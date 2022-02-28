import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import { useSelector } from "react-redux";

import DnDContainerColumnsList from "../../components/ColumnsList";

import "./styles.scss";

const Home = () => {
  const columns = useSelector((state) => state.columns.columns);

  return (
    <div className="home">
      {columns?.length ? (
        <div className="home--content">
          <DnDContainerColumnsList list={columns} />
        </div>
      ) : (
        <div>Error</div>
      )}
    </div>
  );
};

export default Home;
