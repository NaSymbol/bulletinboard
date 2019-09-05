import React, { Component } from 'react'
import Board from './Board/Board'
import Header from './Header'
import Footer from './Footer'

class Index extends Component {


	render() {
		return (
            <div>
            <Header/>

            <Board/>
            <Footer/>
            </div>

        )
        }
}


export default Index