class AboutApp extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div id="aboutAppRoot">
                {Header()}
                <p id="mainPara">
                    CatCorpLLC is the leading cat run software development firm.
                    Our solutions meet and exceed client expectations and requirements.
                    For information about our solutions see <a href="/solutions">Solutions</a>.
                </p>
                {Footer()}
            </div>
        )
    }
}

ReactDOM.render(<AboutApp />, document.getElementById('root'));