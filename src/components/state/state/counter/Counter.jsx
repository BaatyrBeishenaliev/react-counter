import React, { Component } from "react";
import PropTypes from "prop-types";

const Counter = ({ counter, func, number, string }) => {
    console.log(counter, func, number, string)
    return (
        <div>
            <h1>React Counter</h1>
            <h2>{`Cчетчик: ${counter}`}</h2>
        </div>
    )
}

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    func: PropTypes.func,
    number: PropTypes.number,
    string: PropTypes.string
}

Counter.defaultProps = {
    func: () => { },
    number: 0,
    string: '',
}

class CounterButton extends Component {
    state = {
        counter: 0,
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
        this.props.func(this.state.counter)
    }

    minusValue = () => {
        this.setState({
            counter: this.state.counter - 1,
        })
        this.props.func(this.state.counter)
    }

    render() {
        const { counter } = this.state

        return (
            <div className="container">
                <div>{counter}</div>
                <Counter counter={counter} />
                <button onClick={this.handleClick}>+1</button>
                <button onClick={this.minusValue}>-1</button>
            </div>
        )
    }
}

export default CounterButton;