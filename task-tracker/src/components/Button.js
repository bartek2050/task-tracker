import React from "react";
import PropTypes from "prop-types"

const Button = ({color, text, clickHandler}) => {

    return (
        <button onClick={clickHandler} className={"btn"} style={{backgroundColor: color}}>{text}</button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}

export default Button;