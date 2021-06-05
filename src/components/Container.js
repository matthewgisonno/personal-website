import React, { Component } from 'react'
import Home from './Home'
import Technologies from './Technologies'
import TechnologiesReact from './TechnologiesReact'
import TechnologiesWordpress from './TechnologiesWordpress'
import TechnologiesAngular from './TechnologiesAngular'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'


export default class Container extends Component {
    render() {
        const currentActiveLink = this.props.page;
        const currentActiveSubLink = this.props.subpage;
        return (
            <div id="mainContentContainerOutter">
                <div id="mainContentContainerInner">
                    <div className="p-3">
                        {currentActiveLink === 'Home' ? <Home /> : ''}
                        {currentActiveLink === 'Technologies' && currentActiveSubLink === 'React' ? <TechnologiesReact /> : ''}
                        {currentActiveLink === 'Technologies' && currentActiveSubLink === 'Wordpress' ? <TechnologiesWordpress /> : ''}
                        {currentActiveLink === 'Technologies' && currentActiveSubLink === 'Angular' ? <TechnologiesAngular/> : ''}
                        {currentActiveLink === 'Technologies' && currentActiveSubLink === '' ? <Technologies /> : ''}
                        {currentActiveLink === 'Resume' ? <Resume /> : ''}
                        {currentActiveLink === 'Portfolio' ? <Portfolio /> : ''}
                        {currentActiveLink === 'Contact' ? <Contact /> : ''}
                    </div>
                </div>
            </div>
        )
    }
}