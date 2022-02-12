import React from "react";
import { useSelector } from "react-redux";
import ColumnsList from "../../components/ColumnsList";

import "./styles.scss";

const Home = () => {
  const columns = useSelector((state) =>  state.columns.columns);

  return (
    <div className="home">
      {columns?.length ? (
        <div className="home--content">
          <ColumnsList list={columns} />
        </div>
      ) : (
        <div>Error</div>
      )}
    </div>
  );
};

export default Home;
