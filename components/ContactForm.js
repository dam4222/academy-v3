
import { Component } from 'react'
import Head from 'next/head'
import 'isomorphic-fetch'
import PropTypes from 'prop-types';

// App Specific
import ProgressButton from './progressButton.js'

import {
  Form,
  Input
} from './microForm.js'

class ContactForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submitting: false,
      submitted: false
    }
  }
  submitForm (data) {
    fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      res.status === 200 ? this.setState({ submitted: true }) : ''
    })
  }
  render () {
    const title = 'Contact Page'
    return (
        <div id='container' className='contact'>
          <div>
            <div>
              <Form>
              {({ validateForm, getPayload }) => {
                return (
                  <form className="board-form" onSubmit={e => {
                    e.preventDefault()
                    validateForm() && this.submitForm(getPayload())
                  }}>
                    <h2>Contact</h2>
                    <div className="f fw grid-row--s">
                      <div className="mb1 pb05">
                        <Input name="name" label="Name" required />
                      </div>
                      <div className="mb1 pb05">
                        <Input name="email" label="Email" required />
                      </div>
                    </div>

                    <ProgressButton
                      className="button green"
                      formNoValidate={true}
                      inProgress={this.state.submitting}
                      inProgressText='Submitting'
                      isDone={this.state.submitted}
                      isDoneText='Submitted'>
                      Submit Form
                    </ProgressButton>

                  </form>
                )
              }}
            </Form>
            </div>
          </div>
        </div>

    )
  }
}

export default ContactForm
