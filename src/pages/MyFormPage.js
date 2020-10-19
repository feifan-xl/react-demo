import React, { Component } from 'react'

import kFormCreate from "../components/kFormCreate";

@kFormCreate
class MyFormPage extends Component {

  submit = () => {
    console.log('submit')
  }

  render () {
    const {getFieldDecorator} = this.props
    return (
      <div>
        <h3>myPropsPage</h3>
        {
          getFieldDecorator('name')(
            <input type="text" placeholder="please input name" />
          )
        }
        <input type="password" placeholder="please input password" />
        <button onClick={this.submit}>提交</button>
      </div>
    )
  }
}

export default MyFormPage
