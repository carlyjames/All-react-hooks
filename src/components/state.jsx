import React, { Component } from 'react';

class States extends Component {
    state = { 
        name : ''
    };
    changed = (e) => {
        let names = ['james','chinedu','carly','baba']
        let Randnames = names[Math.floor(Math.random()*names.length)]


        this.setState({name : Randnames})
    };

     
    render() { 
        return (
            <div>
                <input type="text" value={this.state.name} />
                <button onClick={this.changed} className='btn btn-primary mx-2'>Change Name</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}
 
export default States;