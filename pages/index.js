console.log('test');
class IndexApp extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            'value': 0
        }
    }
    render(){
        return(
            <div id="indexApp">
                <button id="button" onClick={() => {this.setState({'value': this.state.value + 1})}}>{this.state.value}</button>
            </div>
        )
    }
}
ReactDOM.render(<IndexApp />, document.getElementById('root'));