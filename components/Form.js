import { createForm } from 'micro-form'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.Component = createForm(props.children)
  }

  render () {
    const { Component, props } = this
    return <Component {...props} />
  }
}

module.exports = Form
