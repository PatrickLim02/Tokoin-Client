import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import { styles } from "./styles";

const TextInput = (props) => {
  const { type, name, id, textArea, placeholder, value, handleChange, color } =
    props;
  return (
    <Input
      {...props}
      style={
        type === "loginForm"
          ? styles.inputContainerLogin
          : textArea
            ? styles.TextArea
            : styles.inputContainer
      }
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      color={color}
      onChange={(ev) => handleChange(ev)}
    />
  );
};

TextInput.propTypes = {
  handleChange: PropTypes.func,
};

TextInput.defaultProps = {
  handleChange: () => null,
};

export default TextInput;
