import React, { Component } from 'react';


class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '#'};
  }

  componentDidMount() {
    let context = this;
    fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
    .then(response => {
      if (!response.ok) {
        throw 'Error from ListItem';
      }
      return response.json();
    })
    .then(data => {
      context.setState({title: data.title, url: data.url});
    })
    .catch(e => {
      console.error('Error');
    });
  }

  render() {
    return(
      <li>
        <a href={this.state.url}>
          {this.state.title}
        </a>
      </li>)
  }
}

export default ListItem;