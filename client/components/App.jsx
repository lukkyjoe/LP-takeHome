import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import store from './store';
// import showResults from './showResults';
import submitResults from './submitResults';
import SyncValidationForm from './SyncValidationForm';
import DatePicker from './DatePicker';

const test = () => console.log('hello it is me'); 

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div style={{ padding: 15 }}>
          <h2>Application for event</h2>
          <SyncValidationForm onSubmit={test} />

        </div>
      </Provider>
    );
  }
}