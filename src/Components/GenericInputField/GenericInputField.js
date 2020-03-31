import React from "react";
import PropTypes from "prop-types";
import { Input } from "reactstrap";

function GenericInputField({ placeholder, type, value, OnChange }) {

    


  return (
    <Input
      onChange={OnChange}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  );
}

GenericInputField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string
};

export default GenericInputField;