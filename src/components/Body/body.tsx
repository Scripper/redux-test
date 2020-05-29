import React from "react";
import { connect } from "react-redux";
import Level1 from "../LevelComponents/level1";

const Body = (props: {number: number}) => {
  return(
    <>
      <div>
        {props.number} - number from store
      </div>
      <Level1/>
    </>
  )
};


const mapStateToProps = (state: any) => {
  return { number: state.number}
};

export default connect(mapStateToProps)(Body);
