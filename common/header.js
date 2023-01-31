import React from "react";
export default function Header() {
    return (
        <nav id="header">
            <a id="homeItem" className="item" href="/">Home</a>
            <a id="aboutItem" className="item" href="/about">About</a>
            <a id="solutionsItem" className="item" href="/solutions">Solutions</a>
            <a id="contactItem" className="item" href="/contact">Contact</a>
        </nav>
    )
};