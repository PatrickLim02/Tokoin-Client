import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useDidUpdateEffect } from "../../helpers/hooks";
const ButtonComponent = (props) => {
    const {
        handleSubmit,
        style,
        color = "",
        label,
        submiting,
        disabled = true,
    } = props;

    const labelRenderer = () => {
        if (submiting) {
            return (
                <FontAwesomeIcon
                    color={"white"}
                    size={"lg"}
                    icon={faSpinner}
                    spin
                />
            );
        }
        return label;
    };
    return (
        <Button
            {...props}
            disabled={!disabled}
            color={color}
            onClick={() => handleSubmit()}
            size="md"
            style={style}
        >
            {labelRenderer()}
        </Button>
    );
};

ButtonComponent.propTypes = {
    handleSubmit: PropTypes.func,
};

ButtonComponent.defaultProps = {
    handleSubmit: () => null,
};

export default ButtonComponent;
