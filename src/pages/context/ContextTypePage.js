import React, { Component } from 'react';
import {ThemeContext} from './ThemeContext'

class ContextTypePage extends Component {
  render() { 
    const {themeColor} = this.context
    return (
      <div className="border">
        <h3 className={themeColor}>ContextTypePage</h3>
      </div>
    )
  }
}
ContextTypePage.contextType = ThemeContext
export default ContextTypePage;
