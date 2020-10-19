
import React, { Component } from "react";

export default function kFormCreate (Cmp) {
  return class extends Component {
    constructor (props) {
      super(props)
      this.options = {}
      this.state = {}
    }

    getFiledsValue = () => {
      return {...this.state};
    }

    getFiledValue = field => {
      return this.state[field]
    }

    handleChange = e => {
      let {name, value} = e.target
      this.setState({[name]: value})
    }

    getFieldDecorator = (filed, option) => {
      this.options[filed] = option
      return InputCmp => {
        return React.cloneElement(InputCmp, {
          name: filed,
          value: this.state[filed] || '',
          onChange: this.handleChange
        })
      }
    }

    validateFields = callback => {
      // 校验错误信息
      const errors = {};
      const state = {...this.state};
      for (let name in this.options) {
        if (state[name] === undefined) {
          // 没有输入，判断为不合法
          errors[name] = "error";
        }
      }
      if (JSON.stringify(errors) === "{}") {
        // 合法
        callback(undefined, state);
      } else {
        callback(errors, state);
      }
    }

    render () {
      return (
        <div className="border">
          <Cmp 
            getFieldDecorator={this.getFieldDecorator}
          />
        </div>
      )
    }
  }
}