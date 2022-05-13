import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './Home';
import CreateRoom from './CreateRoom';
import RoomJoin from './RoomJoin';
import {  
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Home /> }/>
                    <Route path='/create' element={<CreateRoom /> }/>
                    <Route path='/join' element={<RoomJoin /> }/>
                </Routes>
            </Router>            
            );
    }
}
render(<App/>, document.getElementById('app'))
 
