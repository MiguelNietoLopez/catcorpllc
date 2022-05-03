class ContactApp extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div id="contactAppMain">
                {Header()}
                {Footer()}
            </div>
        )
    }
}

ReactDOM.render(<ContactApp />, document.getElementById('root'));