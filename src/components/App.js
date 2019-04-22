import React, { Component } from 'react';
import { Stacklist } from './Stacklist';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Flash Card</h2>
                <hr />
                <Stacklist />
                <hr />
                <Link to="stack_form">Create a New Stack</Link>
            </div>
        );
    }
}

export { App };
