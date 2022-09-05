import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render () {
        return <>
            <h1> This is HomePage </h1>
            <Link to='/about'>
                Move to About page
            </Link>
        </>
    }
}