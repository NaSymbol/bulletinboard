import React, { Component } from 'react'
import './Header.css';
import logo from '../images/logo.png';
class Header extends Component {


	render() {
		return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>

        )
        }
}


export default Header