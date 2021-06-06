import React, { Component } from 'react'
import Github from './Github'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <h2>Portfolio!</h2>
                <p>Some content for the web pages...</p>
                <h3>GitHub User Data:</h3>
                <Github />
            </div>
        )
    }
}