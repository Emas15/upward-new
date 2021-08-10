import React, { Component } from 'react';
import Home from './Pages/Home';
import Navbar from './Navbar';
import Footer from './FooterComponent';

class Main extends Component {
    render(){
        return(
            <div>
                <Navbar />
                <Home />
                <Footer />
            </div>
        )
    }
}

export default Main;