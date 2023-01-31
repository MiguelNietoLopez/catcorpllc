import React from "react";
import ReactDOM from "react-dom";
import Header from "../common/header";
import Footer from "../common/footer";
class AboutApp extends React.Component{
    constructor(props){
        super(props);
    };
    getDate() {
        let date = new Date();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();
        return `${month}\\${day}\\${year}`;
    }
    render(){
        return(
            <main id="aboutApp">
                {Header()}
                <div id="centerContent">
                <h1 id="title">About CatCorp LLC</h1>
                <h2></h2>
                <h3 id="subtitle" className="header">Our History</h3>
                <p id="historyPara" className="centerText">
                        CatCorpLLC was founded in 1305 by Gregory Von Johnsonsmithersonottenbotten 
                    <img className="img" src="/common/images/catoilpainting1.jpg" alt="Oil Painting of CatCorpLLC founder Gregory Von Johnsonsmithersonottenbotten" />
                    He created the company for the purpose of writing and printing books since it was at the time very profitable. 
                    The company evolved and followed the printed word until 1978 when the last book was published. The company switched
                    to software development and web page design for cats by cats.
                </p>
                <h3 id="todayH" className="header">Us Today</h3>
                <p id="todayPara"className="centerText">
                        Today, Cat Corp LLC still develops software and web pages for cats.
                    We have worked closely with the Secret Cat Government that controls the world.
                    CatCorpLLC developed the SCG, Secret Cat Government, website, several classified project, and the global cat comunication app.
                    However, Cat Corp LLC has also worked with humans and developing for them.
                    Cat Corp LLC values Transparency, Equality, and pushing forward the secret cat world domination agenda.
                </p>
                <h3 id="projectH" className="header">Project Count</h3>
                <p id="statsPara"className="centerText">
                    As Of {this.getDate()}, Cat Corp LLC has created 67,700,234 Websites, 34,502,234 Programs, 45,403,222 Mobile Apps, and 4 Cat Militias
                </p>
                    </div>
                {Footer()}
            </main>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AboutApp />)