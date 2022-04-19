import react from 'react';
import {headerHtml, footerHtml} from '../common/common.js';

class About extends react.Component
{
    constructor(props){
        super(props);
    }

    centerHtml()
    {
        return <div id="center">
            <h1 id="centerTitle">About Cat Corp LLC</h1>
            <p id="centerContent">Cat Corp LLC was founded in 50.6-35 <p id="myaExplanation">MYA</p>
            </p>
        </div>
    }
    render(){
        return(
            <div>
                {headerHtml()}
                {this.centerHtml()}
                {footerHtml()}
            </div>
        )
    }
}




function about() {
    return <About />
}


export default about;