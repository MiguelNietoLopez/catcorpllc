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
                <h1 id="title">Cat Corp LLC</h1>
                <h2 id="subtitle">Number One Cat based Software Firm</h2>
                <img src="common/images/business-cat-in-office.jpg" alt="Cat Corp LLC banner image"></img>
                <p id="main">We provide many different services and can help you.</p>
                <p id="stats">Our customers see an average of:</p>
                <img src="" alt="customer service"></img>
                <p id="stats2">5000x more purchases, 90000x more return customers, and an average life expectancy of 35000 years</p>
                <img src="/common/images/13122-01-data-driven-infographic-16x9-1.jpg" alt="good chart"></img>\
                <img src="/common/images/th-2380061417.jpg" alt="chart 2"></img>
                <p id="thumbsuptext">Contact Us Today for a Free quote</p>
                <img src="/common/images/srdffd.PNG" alt="thumbsup"></img>
                {Footer()}
            </div>
        )
    }
}
ReactDOM.render(<IndexApp />, document.getElementById('root'));