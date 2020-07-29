import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {

    state = {
        name : '',
        age : ''
    }

    nameChangedHandler = (event) => {
        this.setState({name : event.target.value});
    }

    ageChangedHandler = (event) => {
        this.setState({age:event.target.value});
    }

    render() {
        return (
            <div className="AddPerson">
            <input 
            type="text" 
            placeholder="Name" 
            style={{border:"2px solid green"}}
            onChange={this.nameChangedHandler}
            value={this.state.name}
            /> &nbsp;

            <input 
            type="number" 
            placeholder="Age" 
            style={{border:"2px solid green"}}
            onChange={this.ageChangedHandler}
            value={this.state.age}
            /> &nbsp;
    
            <button 
            onClick={() => this.props.personAdded(this.state.name, this.state.age)}
            style={{border:"1px solid brown", backgroundColor:"lightgreen"}}
            >Add Person</button>
        </div>
        );
    }
}

export default AddPerson;