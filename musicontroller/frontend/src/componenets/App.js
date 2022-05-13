import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar';
import Main from './Main';
import {  
  BrowserRouter as Router} from "react-router-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div>
                <Navbar/>            
                <Router>
                    <div class="container">
                    <Main />
                    </div>
                </Router>            
            </div>
        );
    }
}
render(<App/>, document.getElementById('app'))
 
