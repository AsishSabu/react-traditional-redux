import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { increment, decrement } from './counterActions.js';

const App=({ count, increment, decrement })=> {
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(App);