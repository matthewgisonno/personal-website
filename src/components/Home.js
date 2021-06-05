import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Welcome</h2>
                <p>
                    Hello there and welcome to my personal website, let me introduce myself.  
                    I am an accomplished Front End Web Developer that has a passion for the web 
                    and the clients that use them.  I believe that the customer interaction should 
                    be properly tracked, tested and ultimately proven by the customer.  When you put 
                    the customer first, everyone wins.
                </p>
                <div className="text-center">
                    <a href="/technologies/react"><img src="./imgs/webdev/react-logo.png" alt="React" id="imgHomeReactLogo" /></a>
                    <a href="/technologies/wordpress"><img src="./imgs/webdev/webdev.png" alt="Web Development" id="imgHomeWebDev" /></a>
                    <a href="/technologies/angular"><img src="./imgs/webdev/angular-logo.png" alt="Angular" id="imgHomeAngularLogo" /></a>
                </div>
                <p>
                    I have a passion for all things related to the web and I love to learn new stuff 
                    just because.  I am a natural problem solver when it comes to the web and will go 
                    above and beyond to ensure the solution is done right.
                </p>
            </div>
        )
    }
}