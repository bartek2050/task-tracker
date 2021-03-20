import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({title}) => {

    const clickHandler = () => {
        console.log("click");
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add" clickHandler={clickHandler}/>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;