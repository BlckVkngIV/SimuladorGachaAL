import React from 'react';
import Header from './Components/Header';
import './App.css';
import Content from './shared/layout/Content';
import Footer from './shared/layout/Footer';

import {Element} from 'prop-types';


function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
        <Content >
          {props.children}
        </Content>
      <Footer className="App-footer"/>
    </div>
  );
}

App.propTypes = {
  children: Element.isRequired,
};

export default App;
