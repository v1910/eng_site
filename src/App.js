import React from 'react';
import { connect } from 'react-redux';
import './App.css';

//import {Global} from 'Global.js';

import {HeaderBgrTest} from "HeaderBgrTest.js";

import {FooterSite} from 'FooterSite.js';

//import {TestWrapper} from 'TestWrapper.js';

//import {GlobVar, global} from 'Global.js';

let global = Global();

//let GlobVar = React.createContext({global});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemMenu1: "", // TESTS, WORDS, LISTEN, PHRASES, JOKES
      itemMenu2: ""  // TEST2 or SPORT or ...
    };
  }

  handleClick(item1,item2) {
    this.setState(
      {itemMenu1: item1,
       itemMenu2: item2
      }   
    );
  }

  render() {
    return (
      <>
        <HeaderBgrTest />
        <section id="tests_wrapper"></section>
        <section id="words_wrapper"></section>
        <section id="listen_wrapper"></section>
        <section id="phrases_wrapper"></section>
        <section id="jokes_wrapper"></section>
        <FooterSite />
      </>
    )
  }
}


  