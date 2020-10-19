import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage'
import { ThemeProvider } from "./ThemeContext";
import ConsumerPage from './ConsumerPage'

export default class Context extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        themeColor: 'red'
      }
    }
  }

  changeColor = () => {
    const {themeColor} = this.state.theme
    this.setState({
      theme: {
        themeColor: themeColor === 'red' ? 'green': 'red'
      }
    })
  }

  render () {
    const {theme} = this.state
    return (
      <div>
        <button onClick={this.changeColor}>change color</button>
        <h3>context page</h3>
        <ThemeProvider value={theme} >
          <ConsumerPage />
          <ContextTypePage />
        </ThemeProvider>
      </div>
    )
  }
}