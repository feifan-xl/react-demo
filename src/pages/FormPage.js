import React, {Component} from 'react'

import {Button, Form, Input} from 'antd'

export default class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      password: '',
      name: ''
    }
  }

  submit = () => {
    console.log('submit', this.state)
  }
  render () {
    const {name, password} = this.state
    return (
      <div>
        <h3>FormPage</h3>
        <Form>
          <Form.Item>
            <Input placeholder="please input ur name"
              value={name}
              onChange={ e => this.setState({
                name: e.target.value
              })}
            />
          </Form.Item>
          <Form.Item>
            <Input placeholder="please input ur name"
              type="password"
              value={password}
              onChange={e => this.setState({
                password: e.target.value
              })}
            />
          </Form.Item>
          <Button type="primary" onClick={this.submit}>
            submit
          </Button>
        </Form>
      </div>
    )
  }
}