import cx from 'classnames'
import { createFactory } from 'micro-form'

const Input = createFactory(({ name, value, valid, validateField, updateField, ...props }) => {
  const required = 'required' in props

  const attrs = {
    type: props.type || 'text',
    name,
    value,
    onChange: e => updateField(e.target.value)
  }

  if (props.placeholder) {
    attrs.placeholder = props.placeholder
  }
  if (props.minLength) {
    attrs.minLength = props.minLength
  }
  if (props.pattern) {
    attrs.pattern = props.pattern
  }

  if (required) {
    attrs.onBlur = e => {
      validateField()
    }
  }

  return (
    <div className={cx('input-wrapper', props.className, {
      'has-error': !valid,
      'has-value': !!value,
      'no-label': !props.label
    })}>
      <input {...attrs}/>
      {props.label && <label>{props.label}{required ? '*' : ''}</label>}
      <span />
    </div>
  )
})

module.exports = props => <Input validate={val => !props.required || val !== ''} {...props} />
