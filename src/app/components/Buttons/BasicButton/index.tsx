import React from "react";
import "./styles.scss";

interface IProps {
  type?: "button" | "submit" | "reset";
  class?: string;
  text: string;
  onClick: () => void;
}

const BasicButton = (props: IProps) => {
  return (
    <div className={props.class}>
      <button
        className={`basic-button`}
        type={props.type}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  );
};

BasicButton.defaultProps = {
  type: "button",
  class: "",
  text: "",
};
export default BasicButton;
