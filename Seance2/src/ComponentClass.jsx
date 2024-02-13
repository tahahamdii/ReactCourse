import React, { Component } from 'react';

class ComponentClass extends Component {
    state = { monTexte: "Hello, World!"} 
    render() { 
        return (
            <div>
                <h1>{this.state.monTexte}</h1>
                <button onClick={() => this.setState({monTexte: "Bonjour Madame"})}>Changer</button>
            </div>
        );
    }
}
 

export default ComponentClass;

