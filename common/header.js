export default function Header() {
    return (
        <div id="header">
        <ul>
            <li><img id="headerImage" src=""></img></li>
           <li><a id="homeItem" className="item" href="/">Home</a></li>
           <li><a id="aboutItem" className="item" href="/about">About</a></li>
           <li><a id="solutionsItem" className="item" href="/solutions">Solutions</a></li>
           <li><a id="contactItem" className="item" href="/contact">Contact Us</a></li>
       </ul> 
        </div>
    )
};