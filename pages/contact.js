import react from "react";
import Image from "next/image";
import Link from "next/link";
import {headerHtml, footerHtml} from "../common/common";

class App extends react.Component
{
    constructor(props){
        super(props);
    }

    centerHtml(){
        return(
            <div id="centerHtml">
            <form id="contactForm">
                <input type="text" name="firstName"/>
                <input type="text" name="lastName"/>
                <input type="email" name="email"/>
                <input type="tel" name="phone"/>
                <textarea type="text" name="message">
                </textarea>
                <input type="submit"/>
            </form>
            </div>
        )
    }
    render(){
        return(
            <div>
                {headerHtml()}
                {this.centerHtml()}
                {footerHtml()}
            </div>
        )
    }
}


function Contact() {
    return (<App />)
}


export default Contact;