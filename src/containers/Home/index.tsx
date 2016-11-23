import * as React from 'react';

var styles = require<any>('./index.css');

export interface HomeProps { }

export default class Home extends React.Component<HomeProps, {}> {
  render () {
    return <h1 className={styles.home}>Welcome Home</h1>
  }
}