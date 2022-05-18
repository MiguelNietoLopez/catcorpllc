class ContactApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        };
        this.firstNameHandler = this.firstNameHandler.bind(this);
        this.lastNameHandler = this.lastNameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.messageHandler = this.messageHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
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
        this.setState({message: e.target.value});
    }
    submitForm(e)
    {
        e.preventDefault();
        let body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            message: this.state.message
        }
        let option = {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        };
        fetch('http://localhost:3000/api/contact_submit', option).then(() => { console.log('sent')});
    }

    render(){
        return(
            <div id="contactAppMain">
                {Header()}
                <form id="contactForm">
                    <label id="firstNameLabel" className="label" htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" onInput={this.firstNameHandler}></input>
                    <label id="lastNameLabel" className="label" htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" onInput={this.lastNameHandler}></input>
                    <label id="emailLabel" htmlFor="email" >Email</label>
                    <input types="email" name="email" onInput={this.emailHandler}></input>
                    <label id="messageLabel" className="label" htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" onInput={this.messageHandler}></textarea>
                    <button id="formButton" onClick={this.submitForm}>Submit</button>
                </form>
                {Footer()}
            </div>
        )
    }
}

ReactDOM.render(<ContactApp />, document.getElementById('root'));
