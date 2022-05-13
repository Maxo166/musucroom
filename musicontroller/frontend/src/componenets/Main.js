import React, { Component } from 'react';
import Home from './Home'
import CreateRoom from './CreateRoom';
import RoomJoin from './RoomJoin';
import { 
    BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";


class Main extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <Routes>
                <Route path='/' element={<Home /> }/>
                <Route path='/create' element={<CreateRoom /> }/>
                <Route path='/join' element={<RoomJoin /> }/>
            </Routes>
        );
    }
}
 
export default Main;