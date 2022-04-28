
class AboutApp extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div id="aboutAppRoot">
                {Header()}
            </div>
        )
    }
}

ReactDOM.render(<AboutApp />, document.getElementById('root'));