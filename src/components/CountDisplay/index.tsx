import * as React from 'react';
import {connect} from 'react-redux';

interface StateProps {
  count: number
}


function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class CountDisplay extends React.Component<StateProps, {}> {
  render () {
    return (
      <p>{this.props.count}</p>
    )
  }
}

export default connect(mapStateToProps)(CountDisplay);