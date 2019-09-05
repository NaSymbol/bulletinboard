import React, { Component } from 'react'


// imported assets
import './Header.css';
import logoMin from '../images/logoMin.png';
import logoLar from '../images/logoLarge.png';






// header component
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