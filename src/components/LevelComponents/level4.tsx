import React from "react";
import {connect} from "react-redux";
import {SET_RANDOM_NUMBER} from "../../store/actions";

const Level4 = (props: any) => {
	const setRandomNumber = () => {
		props.setRandomNumber()
	};
	return (
		<div className="level">
			<p>deep level - 4</p>
			<p>{props.number}</p>
			<button onClick={setRandomNumber}>Set Random number</button>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return { number: state.number}
};

//Set data to store
const mapDispatchToProps = (dispatch: any) => {
	return { setRandomNumber: () => dispatch(SET_RANDOM_NUMBER()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Level4);
