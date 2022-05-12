import React, { Component } from 'react'
import RoomJoin from './RoomJoin';
import CreateRoom from './CreateRoom';
import {  
  Routes,
  Route
} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div>
                <h1>This is Home</h1>
            </div>
        );
    }
}
 
export default Home;