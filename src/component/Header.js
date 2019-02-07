import React, { Component } from 'react'
import './Header.css';
import logoMin from '../images/logoMin.png';
import logoLar from '../images/logoLarge.png';
class Header extends Component {


	render() {
		return (
            <div>
                <img src={logoLar} className="App-logo-large" alt="logo" />
                <img src={logoMin} className="App-logo-small" alt="logo" />
            </div>

        )
        }
}


export default Header