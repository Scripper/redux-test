import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { SET_NUMBER } from "../../store/actions"

const Input = (props: any) => {
	useEffect(() => {
		setInputData(props.number)
	}, [props.number]);
	const [inputData, setInputData] = useState(0);
	const setNumber = () => {
		props.setNumber(inputData)
	};
	const handleChange = (event: any) => {
		setInputData(event.target.value)
	};

	return(
		<div className="input-container">
			<input type="number" value={inputData} onChange={handleChange}/>
			<button type="submit" onClick={setNumber}>Set number</button>
		</div>
	)
};

//get number form store
const mapStateToProps = (state: any) => {
	return { number: state.number}
};

//Set data to store
const mapDispatchToProps = (dispatch: any) => {
	return { setNumber: (data: any) => dispatch(SET_NUMBER(data)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
