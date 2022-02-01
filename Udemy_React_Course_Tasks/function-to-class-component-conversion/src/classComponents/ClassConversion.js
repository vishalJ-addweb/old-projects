import React, { Component } from 'react';

class ClassConversion extends Component {

    constructor() {
        super();
        this.state = {
            inputVal: localStorage.getItem("Name") || ""
        }
        this.inputChangeHandler =this.inputChangeHandler.bind(this);
        console.log(this.inputChangeHandler)
    }

    inputChangeHandler(event) {
        // console.log(event.target.value);
        this.setState({inputVal: event.target.value});
        // console.log(this.state.name);
    }

    componentDidUpdate() {
        localStorage.setItem("Name", this.state.inputVal)
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.inputChangeHandler} value={this.state.inputVal} id="name" />
                </form>
                {this.state.inputVal ? <strong>Hello {this.state.inputVal}</strong> : 'Please type your name'}
            </div>
        )
    }
}

export default ClassConversion;