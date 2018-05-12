import React, { Component } from 'react';
import Clicker from './components/Clicker';
import Jumbo from './components/Jumbo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 
  constructor() {
    super();

    this.state = {
        title: 'Clickity Click!'
    };
}

render() {
    return (
        <div>
            <Jumbo title={this.state.title} />
            <div className="mt-5 text-center">
                <Clicker />
            </div>
        </div>
    );
}
}

export default App;
