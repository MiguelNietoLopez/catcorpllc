import React from "react";
import ReactDOM from "react-dom";
import Header from "../common/header";
import Footer from "../common/footer";
class SolutionsApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            devArray: [
                {                
                    name: "Greg G. Gregson", title: "Senior Web Developer", desc: "Greg G. Gregson has 12 years developing Web based projects. He personally helped develop React, Vue, and many other javascript frameworks used today.", imgSrc:"/common/images/greggregorygregson.jpg" 
                },
                {
                    name: "Peanut", title: "Senior Web Developer", desc: "has designed and maintained multiple websites dedicated to centralizing intelligence on different areas around revolutionary thinkers and their day to day routines and life. His hobbies include puzzles and gardening", imgSrc: "/common/images/peanut.png"
                }
            ],
            devArrayPos : 0
        }

    };
     updateDevPos = (num) => {
        switch (num){
            case 0:
                if(this.state.devArrayPos == 0){
                    this.setState({
                        devArrayPos : this.state.devArray.length - 1
                    })
                }
                else {
                    this.setState({
                        devArrayPos: this.state.devArrayPos - 1
                    })
                }
            case 1:
                if(this.state.devArrayPos == this.state.devArray.length - 1){
                    this.setState({
                        devArrayPos : 0
                    })
                }
                else{
                    this.setState({
                        devArrayPos: this.state.devArrayPos + 1
                    })
                }
        }
    }
    render(){
        return(
            <main id="solutionsApp">
                {Header()}
                <div id="centerContent">                   
                    <h1 id="title">Solutions</h1>
                    <h2 id="subtitle">Explore what solutions we offer</h2>
                    <h4 id="softwaredevelopmenttitle" className="header">Software Development</h4>
                    <ul id="softwaredevelopmentlist" className="centerText">
                        <li className="softwaredevelopmentlistitem">Custom Developed Software</li>
                        <li className="softwaredevelopmentlistitem">Familiarity with latest standards</li>
                        <li className="softwaredevelopmentlistitem">100% made by cats</li>
                    </ul>
                    <h4 id="webdevelopmenttitle" className="header">Web Development</h4>
                    <ul id="webdevelopmentlist" className="centerText">
                        <li className="webdevelopmentlistitem">Agile Development</li>
                        <li className="webdevelopmentlistitem">CI/CD</li>
                        <li className="webdevelopmentlistitem">Full Stack</li>
                    </ul>
                    <h2 id="devshowcaseheader" className="header">Developer Showcase</h2>
                    <div id="imgDiv">
                        <img className="img" alt="Image of Show Cased Developer"src={this.state.devArray[this.state.devArrayPos].imgSrc}></img>
                        <button className="button" id="leftButton" onClick={() => this.updateDevPos(0)}>{'<'}</button>
                        <button className="button" id="rightButton" onClick={() => this.updateDevPos(1)}>{'>'}</button>
                    </div>
                    <h4 id="devname" className="header">{this.state.devArray[this.state.devArrayPos].name} - {this.state.devArray[this.state.devArrayPos].title}</h4>
                    <div id="devdescription" className="centerText">
                        {this.state.devArray[this.state.devArrayPos].desc}
                    </div>
                </div>
                {Footer()}
            </main>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SolutionsApp />)