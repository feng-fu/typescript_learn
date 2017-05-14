import * as React from 'react';
import {Top, Content, Foot} from './components/index'
import './App.css';


export default class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <Top />
        <Content />
        <Foot />
      </div>
    );
  }
}
