import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Clicker extends Component {

    constructor(props) {
        super();

        // local state
        this.state = {
            count: props.count
        };

        // binding this: 
        // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    incrementCount() {
        this.setState((previousState) => ({count: previousState.count+1}));
    }

    decrementCount() {
        this.setState((previousState) => ({count: previousState.count-1}));
    }

    resetCount() {
        this.setState(() => ({count: 0}))
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    </div>
                    <div className="col-sm">    
                        <h1 className="display-1">{this.state.count}</h1>
                    </div>
                    <div className="col-sm">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <button className="btn btn-success w-100" onClick={this.incrementCount}>
                            <h2>Increment</h2>
                        </button>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-warning w-100" onClick={this.resetCount}>
                            <h2>Reset</h2>
                        </button>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-danger w-100" onClick={this.decrementCount}>
                            <h2>Decrement</h2>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Clicker.propTypes = {
    count: PropTypes.number
};

Clicker.defaultProps = {
    count: 0
};

export default Clicker;