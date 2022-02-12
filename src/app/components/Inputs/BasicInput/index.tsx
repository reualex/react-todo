import React from "react";
import uuid from "react-uuid";

import "./styles.scss";

interface IProps {
    class?: string,
    label?: string,
    value: any,
    onChange: (v) => any,

}
const BasicInput = (props: IProps) => {
  const inputID = uuid();

  const handelInput = (e) => {
    props.onChange(e.target.value)
  }
  return (
    <div className={`basic-input__container ${props.class}`}>
        <label htmlFor={inputID}>{props.label}</label>
        <input  className="basic-input" id={inputID} type="text" value={props.value} onChange={handelInput} />
    </div>
  );
};



export default BasicInput;
