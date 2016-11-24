import * as React from 'react';
import CountControls from '../../components/CountControls';
import CountDisplay from '../../components/CountDisplay';

export interface CounterProps { }

export default class Counter extends React.Component<CounterProps, {}> {
  render () {
    return (
      <div>
        <CountDisplay />
        <CountControls />
      </div>
    )
  }
}