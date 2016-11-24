import * as React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../actions/CounterActions';

interface DispatchProps {
  increment(),
  decrement()
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => {
      dispatch(Actions.counterIncrement())
    },
    decrement: () => {
      dispatch(Actions.counterDecrement())
    }
  }
}

class CountControls extends React.Component<DispatchProps, {}> {
  render () {
    return (
      <div>
        <a onClick={this.props.increment}>↑</a>
        <a onClick={this.props.decrement}>↓</a>
      </div>
    )
  }
}

export default connect(function() { return {} }, mapDispatchToProps)(CountControls);