import React from "react";
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";
import Button from "./Button";

const Header = ({title, setButton, showAdd}) => {
    const location = useLocation()


    const clickHandler = () => {
        setButton()
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === "/" && (
                <Button color={!showAdd ? "green" : "red"} text={!showAdd ? "Add" : "Close"}
                        clickHandler={clickHandler}/>
            )}
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;