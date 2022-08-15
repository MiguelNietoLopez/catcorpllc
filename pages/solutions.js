class SolutionsApp extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div id="solutionsAppMain">
                {Header()}
                <h1 id="title">Solutions</h1>
                <h2 id="subtitle">Explore what solutions we offer</h2>

                <h4 id="softwaredevelopmenttitle">Software Development</h4>
                <ul id="softwaredevelopmentlist">
                    <li className="softwaredevelopmentlistitem">Custom Developed Software</li>
                    <li className="softwaredevelopmentlistitem">Familiarity with latest standards</li>
                    <li className="softwaredevelopmentlistitem">100% made by cats</li>
                </ul>
                <img src="/common/images/greggregorygregson.jpg"></img>

                {Footer()}
            </div>
        )
    }
}

ReactDOM.render(<SolutionsApp />, document.getElementById('root'));