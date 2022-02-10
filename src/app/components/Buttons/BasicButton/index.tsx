import React from "react";
import "./styles.scss";

interface IProps {
  type: "button" | "submit" | "reset",
  className: string,
  text: string,
  onClick: () => void
}

const BasicButton = (props: IProps) => {
  return (
    <div className={props.className}>
        <button className="basic-button" type={props.type} onClick={props.onClick}>{props.text}</button>
    </div>
  );
};


BasicButton.defaultProps = {
    type: "button",
    className: "",
    text: "",
  };
export default BasicButton;
