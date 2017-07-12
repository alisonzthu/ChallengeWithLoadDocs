import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore} from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/reducers.jsx';
import ListItem from './ListItem.jsx';


const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(reducer, middleware);

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {ids: []};
  }

  componentDidMount() {
    let context = this;
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(response => {
      if (!response.ok) {
        throw 'Error';
      }
      return response.json();
    })
    .then(data => {
      context.setState({ids: data});
    })
    .catch(e =>{
      console.error('error');
    });
  }
  render() {
    return(
      <div>
        <h1>Hello World</h1>
        <ul>
        {this.state.ids.map((id, index) => {
          return (
            <ListItem key={index} id={id}>
            </ListItem>
          )
        })}
        </ul>
      </div>);
    
  }
}

ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>, document.getElementById("app"));
