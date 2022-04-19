import React from "react";
import Image from "next/image";
import Link from "next/link";

function headerHtml() {
    return <div id="header">
    <ul id="navbar">
        <li className="navItem"><div id="logo">Cat Corp LLC.</div></li>
        <li className="navItem" id="contactLink"><Link href="/contact">Contact Us</Link></li>
        <li className="navItem" id="solutionsLink"><Link href="/solutions">Solutions</Link></li>
        <li className="navItem" id="aboutLink"><Link href="/about">About Us</Link></li>
    </ul>
</div>;
};
function footerHtml (){
    return <div id="footer">
    <ul id="footerbar">
        <li className="navItem"><div id="logo">Cat Corp LLC.</div></li>
        <li className="navItem" id="contactLink"><a>Contact Us</a></li>
        <li className="navItem" id="solutionsLink"><a>Solutions</a></li>
        <li className="navItem" id="aboutLink"><a>About Us</a></li>        
    </ul>
</div>;
};
export {headerHtml, footerHtml};