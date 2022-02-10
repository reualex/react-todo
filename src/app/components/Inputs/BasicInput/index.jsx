import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";

import "./styles.scss";

const BasicInput = ({ className, type, label, register, required, error }) => {
  const inputID = uuid();
  return (
    <div className={`basic-input__container ${className}`}>
      {label ? (
        <label htmlFor={inputID} className="basic-input__label">
          {label}
        </label>
      ) : (
        ""
      )}

      <input
        id={inputID}
        className="basic-input"
        type={type}
        {...register(label, { required })}
      />
      {error.isError ? (
        <span className="error basic-input__error">{error.text}</span>
      ) : (
        ""
      )}
    </div>
  );
};

BasicInput.defaultProps = {
  type: "text",
  className: "",
  placeholder: "",
  label: "",
};

BasicInput.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
};

export default BasicInput;
