import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setName} from '../actions/index.js';

class Name extends Component {
    constructor(props) {
        super();
        this.FirstName = null;
        this.LastName = null;

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstNameChange(event) {
        this.FirstName = event.target.value;
    }

    handleLastNameChange(event) {
        this.LastName = event.target.value;

    }

    handleSubmit(event) {
        if (this.FirstName === null) {
            alert('Please enter your first name');
            return;
        }
        if (this.LastName === null) {
            alert('Please enter your last name');
            return;
        }
        this.props.setName(this.FirstName,this.LastName);
    }

    render() {
        return (
            <div className="form">
                <form>
                    <input type="text" id="fname" placeholder="Your name.." value={this.FirstName} onChange = {this.handleFirstNameChange} />
                    <input type="text" id="lname" placeholder="Your last name.." value={this.LastName} onChange = {this.handleLastNameChange} />
                    <input type="button" value="Submit" onClick = {this.handleSubmit} />
                </form>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        name:state.name
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setName:setName}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Name);
