import React from "react";
import Image from "next/image";
class Home extends React.Component {
    constructor(props)
    {
        super(props);
        
    }
    headerHtml() {
        return <div id="header">
        <ul id="navbar">
            <li className="navItem"><div id="logo">Cat Corp LLC.</div></li>
            <li className="navItem" id="contactLink"><a>Contact Us</a></li>
            <li className="navItem" id="solutionsLink"><a>Solutions</a></li>
            <li className="navItem" id="aboutLink"><a>About Us</a></li>
        </ul>
    </div>;
    };
    
    leftHtml() {
        return <div id="leftPage">
        <ul id="Reviews">
            <li className="reviewsItem" id="review1">
                <div className="reviewText">"Professional"</div>
                <div className="reviewAuthor">- Google</div>
            </li>
            <li className="reviewsItem" id="review2">
                <div className="reviewText">"Highly Skilled"</div>
                <div className="reviewAuthor">- Microsoft</div>
            </li>
            <li className="reviewsItem" id="review3">
                <div className="reviewText">"...Cats in Suits"</div>
                <div className="reviewAuthor">- Amazon</div>
            </li>
        </ul>
    </div>;
    };
    
    centerHtml () {
        return     <div id="centerPage">
        <Image id="centerImg" src="/images/catsuitmain.png" height={612} width={612}/>
    </div>;
    };
    
    footerHtml (){
        return <div id="footer">
        <ul id="footerbar">
            <li className="navItem"><div id="logo">Cat Corp LLC.</div></li>
            <li className="navItem" id="contactLink"><a>Contact Us</a></li>
            <li className="navItem" id="solutionsLink"><a>Solutions</a></li>
            <li className="navItem" id="aboutLink"><a>About Us</a></li>        
        </ul>
    </div>;
    };
    render()
    {
        return(
        <div id="home">
            {this.headerHtml()}
            {this.leftHtml()}
            {this.centerHtml()}
            {this.footerHtml()}
        </div>
        );
    };

    
}
function HomePage() {
    return <Home />;
};

export default HomePage