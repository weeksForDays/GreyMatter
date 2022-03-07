// This is from a Turotial I did to learn react
// Allison Lupien

import React, { Component } from 'react';


class Counter extends Component {

    render() { 

        return (
            <div> 
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={this.props.onIncrement(this.props.counter)} 
                    className="badge bg-secondary">Increment
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">Delete
                </button>
            </div>
        );
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }


}


 
export default Counter;