import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore} from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/reducers.jsx';


const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(reducer, middleware);

class MyApp extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  render() {
    return(
      <div>
        <h1>{"Alison's Board"}</h1>
      </div>);
    
  }
}

ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>, document.getElementById("app"));
