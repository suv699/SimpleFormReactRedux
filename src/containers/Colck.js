import React, { Component } from 'react';
import { connect } from 'react-redux';
import {nextTime} from '../actions/index';

class Clock extends Component {

	timerId = setInterval(() => {
		this.handleTimeActionDecrement();
	}, 1000);

	handleTimeActionDecrement = () => {
        this.props.onDecrementClick(new Date());
    };

    render() {
		const { time } = this.props;
		return(
			<div>
				<div>Текущее время:</div>
				<div>{time.toLocaleTimeString()}</div>
			</div>
		);
	};
};

const mapStateToProps = (state) => {
	return {time: state.curTime.time}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onDecrementClick: (time) => {dispatch(nextTime(time));}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Clock);