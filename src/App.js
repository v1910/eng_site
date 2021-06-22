//App.js------------------

import React from 'react';

import {HeaderBgrTest1} from 'HeaderBgrTest1.js';

import {HeaderBgrTest2} from 'HeaderBgrTest2.js';

import {FooterSite} from 'FooterSite.js';

import {HeaderMenuTestsCont2} from "HeaderMenuTestsCont2.js";

import {ListTestsWrapper} from "ListTestsWrapper.js";


function App() {
   
    return (
      <>
        <HeaderBgrTest1 />
        <section id="tests_wrapper"></section>
        <section id="words_wrapper"></section>
        <section id="listen_wrapper"></section>
        <section id="phrases_wrapper"></section>
        <section id="jokes_wrapper"></section>
        <HeaderMenuTestsCont2 f2={ListTestsWrapper} />
        <FooterSite />  
      </>
    )

}
export default App;
