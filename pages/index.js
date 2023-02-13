class IndexApp extends React.Component {
    constructor(props)
    {
        super(props);{

        }
    }
    render(){
        return(
            <main id="indexApp">
                {Header()}
                <div id="centerContent">
                    <h1 id="title">Cat Corp LLC</h1>
                    <h2 id="subtitle">Number One Cat based Software Firm</h2>
                    <img id="img1" className="img" alt="Image of Cat working on Computer"  src="common/images/business-cat-in-office.jpg"></img>
                    <p className="centerText imgDesc" id="main">We provide many different services and can help you.</p>
                    <p className="centerText imgTitle" id="stats">Our customers see an average of:</p>
                    <img id="img2" className="img" alt="Image of Graph. The Information of the Graph is described as"  src="/common/images/13122-01-data-driven-infographic-16x9-1.jpg"></img>
                    <p className="centerText imgDesc" id="stats2">5000x more purchases, 90000x more return customers, and an average life expectancy of 35000 years</p>
                    <p className="centerText imgTitle" id="thumbsuptext">Contact Us Today for a Free quote</p>
                    <img id="img4" className="img" src="/common/images/srdffd.PNG" alt="Image of Happy Customers Giving A Thumbs Up"></img>
                </div>
                {Footer()}
            </main>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IndexApp />);
