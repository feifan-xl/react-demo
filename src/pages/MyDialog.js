import React, { Component } from 'react'
import Dialog from '../components/Dialog'


export default class DialogPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dialogShow: false
    }
  }
  render () {
    const {dialogShow} = this.state
    return (
      <div>
        <h3>DialogPage</h3>
        <button 
        onClick={() => this.setState({dialogShow: !dialogShow})}>
          toggle
        </button>
        {dialogShow && (
          <Dialog>
            <p>text</p>
          </Dialog>
        )}
      </div>
    )
  }
}