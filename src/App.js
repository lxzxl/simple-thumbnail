import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Thumbnail from './components/Thumbnail';
import { getImages } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    getImages().then(data => {
      console.log(data);
      this.setState({ data });
    });
  }
  render() {
    const { data } = this.state;
    return <Thumbnail cardList={data} />;
  }
}

export default App;
