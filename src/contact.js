import React from "react";
import ReactDOM from "react-dom";
import Header from "../common/header";
import Footer from "../common/footer";
class ContactApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            warningText: '',
            warningArray: {
                0 : '',
                1 : 'Message Too Long Please Keep Under 200 Characters',
                2 : 'Alphanumerical Characters(a-z 0-9) only please'
            },
            activeWarnings: new Array()
        };
        this.firstNameHandler = this.firstNameHandler.bind(this);
        this.lastNameHandler = this.lastNameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.messageHandler = this.messageHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.triggerWarning = this.triggerWarning.bind(this);
        this.updateWarnings = this.updateWarnings.bind(this);
    };
    firstNameHandler(e)
    {
        this.setState({firstName: e.target.value});
    };
    lastNameHandler(e)
    {
        this.setState({lastName: e.target.value});
    };
    emailHandler(e)
    {
        this.setState({lastName: e.target.value});
    };
    messageHandler(e)
    {
        console.log(this.state.activeWarnings)
        if (e.target.value.length <= 200){
            this.triggerWarning(-1)
            this.setState({message: e.target.value});
        }
        else if (!this.state.activeWarnings.includes(1)){
            this.triggerWarning(1);
            
        }
    }
    updateWarnings()
    {
        let result = '';
        console.log(this.state.activeWarnings)
       this.state.activeWarnings.forEach(code => result += this.state.warningArray[code] + '\n');
       this.setState({warningText: result});
    }
    triggerWarning(code)
    {
        console.log(typeof this.state.activeWarnings)
        let temp = this.state.activeWarnings; 
        switch (code)
        {
            case -2:
                this.setState({activeWarnings: [].concat(temp.filter(x => x == 1))},() => this.updateWarnings());
                break;
            case -1:
                console.log('jt')
                this.setState({activeWarnings: [].concat(temp.filter(x => x == 2))},() => this.updateWarnings());
                break;
            case 1:
                this.setState({activeWarnings: [].concat([1])},() => this.updateWarnings());
                break;
            case 2:
                this.setState({activeWarnings: [].concat([2])},() => this.updateWarnings());
                break;
        }
        
    }
    submitForm(e)
    {
        e.preventDefault();
        let first = this.verifyName(this.state.firstName);
        let last = this.verifyName(this.state.lastName);
        let email = this.verifyEmail(this.state.email);
        let message = this.verifyMessage(this.state.message);
        switch (false)
        {
            case first:
                console.log('firstname invalid');
            case last:
                console.log('lastname invalid');
            case email:
                console.log('email invalid');
            case message:
                console.log('message not valid');
            default:
                break;
        }
        let body = {
            firstName: first,
            lastName: last,
            email: email,
            message: message
        }
        let option = {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        };
        fetch('http://localhost:3000/api/contact_submit', option).then(() => { console.log('sent')});
    }
    verifyName(name){
        let reg =/^[\p{L}]+$/gu;
        if (reg.test(name) == true)
        {
            return name;
        }
        else 
        {
            return false;
        }
    }
    verifyEmail(email){
        let reg = /^\w+@\w+.(com|org|edu|net|co)/gi;
        if (reg.test(email) == true)
        {
            return email;
        }
        else
        {
            return false;
        }


    }
    verifyMessage(message){
        let reg = /^([\p{L}]|\.|\s)+/gu;
        //let reg =/^[\p{L}]+$/gu;
        if (reg.test(message) == true)
        {
            return message;
        }
        else
        {
            return false;
        }
    }

    render(){
        return(
            <main id="contactApp">
                {Header()}
                <div id="centerContent">
                    <h1 id="title">Contact Us</h1>
                    <h3 id="subtitle">Fill out this form and we will get in touch with you</h3>
                    <form id="contactForm">
                        <div id="firstName" className="formDiv">
                            <label id="firstNameLabel" className="label" htmlFor="firstName">First Name </label>
                            <input type="text" className="inputs" name="firstName" onInput={this.firstNameHandler}></input>
                        </div>
                        <div id="lastName" className="formDiv">
                            <label id="lastNameLabel" className="label" htmlFor="lastName">Last Name </label>
                            <input type="text" name="lastName"  className="inputs" onInput={this.lastNameHandler}></input>
                        </div>
                        <div id="email" className="formDiv">
                            <label className="label" id="emailLabel" htmlFor="email" >Email </label>
                            <input className="inputs" types="email" name="email" onInput={this.emailHandler}></input>
                        </div>
                        <div id="message" className="formDiv">
                            <label id="messageLabel" className="label" htmlFor="message">Message </label>
                            <textarea id="message" className="inputs" name="message" rows="4" onInput={this.messageHandler}></textarea>
                        </div>
                        <p id="warning">{this.state.warningText}</p>
                        <button id="formButton" onClick={this.submitForm}>Submit</button>
                    </form>
                </div>
                {Footer()}
            </main>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactApp />)
