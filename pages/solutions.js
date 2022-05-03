class SolutionsApp extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div id="solutionsAppMain">
                {Header()}
                {Footer()}
            </div>
        )
    }
}

ReactDOM.render(<SolutionsApp />, document.getElementById('root'));