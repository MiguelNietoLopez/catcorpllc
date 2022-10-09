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
                <div id="centerContent">
                    <h1 id="title">Cat Corp LLC</h1>
                    <h2 id="subtitle">Number One Cat based Software Firm</h2>
                    <img id="img1" className="img"  src="common/images/business-cat-in-office.jpg" alt="Cat Corp LLC banner image"></img>
                    <p className="centerText imgDesc" id="main">We provide many different services and can help you.</p>
                    <p className="centerText imgTitle" id="stats">Our customers see an average of:</p>
                    <img id="img2" className="img"  src="/common/images/13122-01-data-driven-infographic-16x9-1.jpg" alt="good chart"></img>
                    <p className="centerText imgDesc" id="stats2">5000x more purchases, 90000x more return customers, and an average life expectancy of 35000 years</p>
                    <p className="centerText imgTitle" id="thumbsuptext">Contact Us Today for a Free quote</p>
                    <img id="img4" className="img" src="/common/images/srdffd.PNG" alt="thumbsup"></img>
                </div>
                {Footer()}
            </div>
        )
    }
}
ReactDOM.render(<IndexApp />, document.getElementById('root'));