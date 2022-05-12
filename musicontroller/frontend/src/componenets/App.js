import React, { Component } from 'react';
import { render } from 'react-dom'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return <h1>hello maxo sall</h1>;
    }
}
render(<App/>, document.getElementById('app'))
 
