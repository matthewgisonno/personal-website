import React, { Component } from 'react'
import Navigation from './Navigation'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <img src="../imgs/logo_mg.png" alt="Matthew Gisonno Logo" className="navbarLogo" /> <a className="navbar-brand" href="/">Matthew Gisonno</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobileNavbarToggler" aria-controls="mobileNavbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mobileNavbarToggler">
                    <Navigation page={this.props.page} subpage={this.props.subpage}></Navigation>
                </div>
            </div>
        </nav>
        )
    }
}