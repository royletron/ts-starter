import * as React from 'react';
import { Link } from 'react-router';

var styles = require<any>('./index.css');

export interface AppProps { }

export default class App extends React.Component<AppProps, {}> {
  render () {
    return (
      <div className={styles.app}>
        <Link to=''>Home</Link>
        <Link to='about'>About</Link>
        <Link to='counter'>Counter</Link>
        {this.props.children}
      </div>
    )
  }
}