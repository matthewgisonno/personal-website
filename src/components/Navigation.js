import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        const currentActiveLink = this.props.page;
        const currentActiveSubLink = this.props.subpage;
        const activeLinkClass = ' active';
        const activeLinkExtras = 'page';
        return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className={"nav-link" + (currentActiveLink === 'Home' ? activeLinkClass : '')} aria-current={currentActiveLink === 'Home' ? activeLinkExtras : ''} href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className={"nav-link dropdown-toggle" + (currentActiveLink === 'Technologies' ? activeLinkClass : '')} aria-current={currentActiveLink === 'Technologies' ? activeLinkExtras : ''} href="/technologies" id="navbarTechnologiesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Technologies</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarTechnologiesDropdown">
                        <li><a className={"dropdown-item" + (currentActiveLink === 'Technologies' && currentActiveSubLink === '' ? activeLinkClass : '')} href="/technologies">Overview</a></li>
                        <li><a className={"dropdown-item" + (currentActiveSubLink === 'React' ? activeLinkClass : '')} href="/technologies/react">React</a></li>
                        <li><a className={"dropdown-item" + (currentActiveSubLink === 'Wordpress' ? activeLinkClass : '')} href="/technologies/wordpress">Wordpress</a></li>
                        <li><a className={"dropdown-item" + (currentActiveSubLink === 'Angular' ? activeLinkClass : '')} href="/technologies/angular">Angular</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + (currentActiveLink === 'Resume' ? activeLinkClass : '')} aria-current={currentActiveLink === 'Resume' ? activeLinkExtras : ''} href="/resume">Resume</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + (currentActiveLink === 'Portfolio' ? activeLinkClass : '')} aria-current={currentActiveLink === 'Portfolio' ? activeLinkExtras : ''} href="/portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + (currentActiveLink === 'Contact' ? activeLinkClass : '')} aria-current={currentActiveLink === 'Contact' ? activeLinkExtras : ''} href="/contact">Contact</a>
                </li>
            </ul>
        )
    }
}