class IndexApp extends React.Component {
    constructor(props)
    {
        super(props);{

        }
    }
    render(){
        return(
            <div id="indexApp">
                {Header()}
                {Footer()}
            </div>
        )
    }
}
ReactDOM.render(<IndexApp />, document.getElementById('root'));