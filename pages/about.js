import react from 'react';
import Link from 'next/link';
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
            <p id="centerContent">
                Cat Corp LLC was founded under the name Cat Companie in 1230 by Standord Catterson.
            Stanford was a herbalist in the small village of Lothuwistoft in what is today eastern England.
            He later moved to London in hopes of making a greater wage to sustain his growing family.
            During this period, he founded Cat Companie. Stanford contracted a small crew and ship to import goods from eastern countries.
            His training as a herbalist helped him ensure that they only purchased and exported the finest herbs and teas.
                For generations, until around 1340, him and his descendants continued this journey.
            In 1346, Europe was hit with the Black Death. Hereford Catterson, the current owner of Cat Companie, changed the direction of the company entirely.
            He split the company into two major sections. One dedicated to rat catching, and the other dedicated to writing. 
            The company wrote wills, books, records, and poems for many different cities in Europe.
            Eventually, this section of the company started to outgrow the other.
            By 1780, the company was completely dedicated to writing.
                However, due to political problems in Europe, the company was moved to New York.
            At the time, the company now was dedicated to publishing instead of writing. This continued until 1965 when the company changed focus to production of computer program punch cards.
            In 1965, the company also decided to modernize their name to fit in with the new modern world. 
            Cat Corp LLC was born. When the downfall of punch cards came, they modernized into program writing. Which is still continued to this day.

            For more information on what solutions we currently offer, visit <Link href="/solutions">solutions</Link>.
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