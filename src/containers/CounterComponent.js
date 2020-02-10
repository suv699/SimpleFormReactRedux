import React , { Component }from 'react';
import { CounterActionDecrement, CounterActionIncrement } from '../actions';
import { connect } from 'react-redux';

class CounterComponent extends Component {

    toggleBtnActionIn = () => {
        console.log(JSON.stringify(this.props))
        this.props.onIncrementClick(this.props.count);
    }
    toggleBtnActionDe = () => {
        console.log(JSON.stringify(this.props))
        this.props.onDecrementClick(this.props.count);
    }

    render() {
        console.log(JSON.stringify(this.props))

        const { count } = this.props

        return(
            <div>
                <h1>{count}</h1>
                <button onClick={this.toggleBtnActionIn}>+</button>
                <button onClick={this.toggleBtnActionDe}>-</button>
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    //console.log(JSON.stringify(state))
    return {count: state.Counter.count}
};
const mapDispatchToProps = (dispatch) => {
    console.log(JSON.stringify(dispatch))
    return {
        onIncrementClick: (count) => {
            dispatch(CounterActionIncrement(count));
        },
        onDecrementClick: (count) => {
            dispatch(CounterActionDecrement(count));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);