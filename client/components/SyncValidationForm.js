import React from 'react'
import { Field, reduxForm } from 'redux-form'
// import DatePicker from './DatePicker';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocaliser from 'react-widgets/lib/localizers/moment'

import 'react-widgets/dist/css/react-widgets.css'

import { TextField, DatePicker } from 'redux-form-material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton'
injectTapEventPlugin();

momentLocaliser(moment)

const required = value => (value == null ? 'Required' : undefined)

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  return warnings
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error &&
          <span>
            {error}
          </span>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
    </div>
  </div>

const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
  <div>
        <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} autoOk={true} onChange={(event, value) => input.onChange(value)} />
        {touched && error && <span>{error}</span>}
  </div>
);

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />

const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
      <Field
        name="firstName"
        type="text"
        component={TextField}
        floatingLabelText="First Name"
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={TextField}
        label="Last Name"
        floatingLabelText="Last Name"
      />
      <Field 
        name="email" 
        type="email" 
        component={TextField} 
        label="Email" 
        floatingLabelText="Email"
      />
      <Field
        name="date"
        component={DatePicker}
        format={null}
        validate={required}
        floatingLabelText="Date"
      />
      <div>
        <RaisedButton type="submit" disabled={pristine || submitting}>
          Submit
        </RaisedButton>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(SyncValidationForm)