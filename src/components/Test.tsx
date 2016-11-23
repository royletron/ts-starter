import * as React from 'react';

export interface TestProps { message: string; }

export class Test extends React.Component<TestProps, {}> {
  render () {
    return <h1>Hey {this.props.message}</h1>
  }
}