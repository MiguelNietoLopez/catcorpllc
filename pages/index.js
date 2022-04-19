import React from "react";
import Image from "next/image";
import Link from "next/link";
import {headerHtml, footerHtml} from '../common/common.js';
class Home extends React.Component {
    constructor(props)
    {
        super(props);
        
    }   
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
    
    render()
    {
        return(
        <div id="home">
            {headerHtml()}
            {this.leftHtml()}
            {this.centerHtml()}
            {footerHtml()}
        </div>
        );
    };

    
}
function HomePage() {
    return <Home />;
};

export default HomePage;
