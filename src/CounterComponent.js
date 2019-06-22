import React from "react";
import { connect } from "react-redux";
import { remove, add, reset } from "./counterAction";

//
const CounterComponent = ({
  counter,
  setCounter,
  removeCounter,
  resetCounter
}) => {
  return (
    <div>
      <p>{counter}</p>

      <button onClick={() => setCounter(1)}>ADD ONE</button>
      <button onClick={() => removeCounter(1)}>REMOVE ONE</button>
      <button onClick={() => setCounter(10)}>ADD TEN</button>
      <button onClick={() => removeCounter(10)}>REMOVE TEN</button>
      <button onClick={() => resetCounter(0)}>RESET</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { counter: state.counter };
};

const mapDispatchToProps = dispatch => {
  return {
    setCounter: value => {
      dispatch(add(value));
    },
    removeCounter: value => {
      dispatch(remove(value));
    },
    resetCounter: value => {
      dispatch(reset(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
