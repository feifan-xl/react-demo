import React, { Component } from 'react';
import store from './store'

class ReduxPage extends Component {

  componentDidMount () {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  add = () => {
    store.dispatch({type: 'ADD', text: 3})
  }

  minus = () => {
    store.dispatch({type: 'MINUS'})
  }
  
  render() {

    return (
      <div>
        <p>{store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}
 

export default ReduxPage