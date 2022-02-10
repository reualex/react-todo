import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
const appRoot = document.getElementById("loader");

const tesst = () => {
  return (
    <div className="loader-bg">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    appRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    appRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      tesst(),
      // A DOM element
      this.el
    );
  }
}

export default Loader;
