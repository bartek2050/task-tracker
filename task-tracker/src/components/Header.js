import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({title, setButton, showAdd}) => {

    const clickHandler = () => {
        setButton()
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={!showAdd ? "green" : "red"} text={!showAdd ? "Add" : "Close"} clickHandler={clickHandler}/>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;