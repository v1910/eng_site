//MainReducer.js-----------------------------
// It is the store of the site

import React from "react";

import {AllTests} from 'AllTests.js';

import {CorrectAnswersTests} from 'CorrectAnswersTests.js';

import {SOCIETYwords} from "society_words.js";
import {SPORTwords} from "sport_words.js";
import {ACCOMMODATIONwords} from "accommodation_words.js";
import {APPEARANCEwords} from "appearance_words.js";
import {PREPOSITIONSwords} from "prepositions_words.js";
import {NATUREwords} from "nature_words.js";
import {Jokes} from "jokes.js";
import { insertAfter } from "insertAfter.js";

let workAllTest = AllTests(); // read all tests
//let workTest = workAllTest[0].length; // amount of questions in current test

let initialStore = 

{
	//initialisation -----------
    list_tests_wrapper: 'hidden', // show or hide list_tests_wrapper
    state_tests: [],
    state_edit: true,
    stateTests: "empty",
    stateWords: "empty",
    stateListen: "empty",
    statePhrases: "empty",
    stateJokes: "empty",
    itemMenu1: "",
    itemMenu2: "",
	 words_files:  ["SOCIETY","SPORT","ACCOMMODATION", "APPEARANCE", "PREPOSITIONS", "NATURE"], // words files
	 words:  [], // words array
//	 all_words: [], // array of all words
// 	 jokes_arr: [], // jokes array
	 work_arr: [], // array of random numbers
	 count_pick_button_show_word:  0,  //count of picking button_show_word
	 count_pick_button_show_description:  0, //count of picking button_show_description
	 current_number_word:  0,  //current number word
	 current_number_word_group:  0, // current word group (SOCIETY)
	 count_pick_button_show_answer:  0,
	 nWords:  0, // quantity of words
//  	 nTests:  0, // quantity of tests
  	 currentTest:  0, // current test
	 countDownDate:  new Date().getTime(), // start time for the chosing test
	 countDownDate_qst:  new Date().getTime(), // start time for the chosing question
  	 count_time_question:  [],  // all time for the current question
  	 count_time_test:  [], // all time for the current test
	 current_question:  0, // current question  ( 0  -  first)
	 X_setInterval:  0, // id of clearInterval

	 idioms_files:  ["JOB","HOT","MIX"], // idioms files
  	
	/* initialize variables */
	 count:  0, 
	 clearTime:  0, 
	 seconds:  0,
	 minutes:  0,
	 hours:  0, 
	 clearState:  0, 
	 secs:  0,
	 mins:  0,
	 gethours:  0, 


	// tests -----------------
	 tests:  workAllTest, // read all tests

	 nTests:  workAllTest.length, // amount of all tetsts

	 cAnswers: CorrectAnswersTests(),  // read all correct answers
	
	 selected_answer: -1,  // number of the selected answer in the current question

	 count_correct_answer: [],  // amount of correct answers for earch question

	
	// words -----------------
     all_words: [SOCIETYwords(),SPORTwords(),ACCOMMODATIONwords(),APPEARANCEwords(),PREPOSITIONSwords(),NATUREwords()], // array of all words

//	 all_words[0] = SOCIETYwords(),
//	 all_words[1] = SPORTwords(),
//	 all_words[2] = ACCOMMODATIONwords(),
//	 all_words[3] = APPEARANCEwords(),
//	 all_words[4] = PREPOSITIONSwords(),
//	 all_words[5] = NATUREwords(),

	 curent_number_word: 0,


	// LISTEN-READ --------------
	 nAudio: 3,  // amount of all audio files


	// jokes -----------------
	 jokes_arr: Jokes() // read all jokes
	

}; //initialStore  

let workInitialStore = initialStore;
initialStore.count_questions_test = workAllTest[workInitialStore.currentTest].length; // amount of questions in current test
initialStore.nJokes = workInitialStore.jokes_arr.length // amount of all jokes



function MainReducer(state = initialStore, action){
    console.log('MainReducer: action=',action);
    console.log('MainReducer: state=',state);

    switch(action.type) {
        case 'SET_TESTS':
console.log('MainReducer: SET_TESTS 222222222222');            
console.log('MainReducer: document.getElementById(tests_wrapper)=', document.getElementById('tests_wrapper'));
 
            if(!((document.getElementById('tests_wrapper') === 'underfined') || (document.getElementById('tests_wrapper') === null))){
                document.getElementById('tests_wrapper').value = '';
            } else {
/*                
                HeaderBgrTestLondon();
                let section_tests_wrapper = document.createElement('SECTION');
                section_tests_wrapper.value = '';
                section_tests_wrapper.setAttribute("id", "tests_wrapper");
                let section_tests_wrapper_work = document.getElementById("london_bgr");
                console.log('MainReducer: section_tests_wrapper_work=', section_tests_wrapper_work);
*/                
//                insertAfter(section_tests_wrapper, section_tests_wrapper_work);
            }
                
            if(!((document.getElementById('words_wrapper') === 'underfined') || (document.getElementById('words_wrapper') === null)))               
                document.getElementById('words_wrapper').value = '';
            if(!((document.getElementById('listen_wrapper') === 'underfined') || (document.getElementById('listen_wrapper') === null)))               
                document.getElementById('listen_wrapper').value = '';
            if(!((document.getElementById('phrases_wrapper') === 'underfined') || (document.getElementById('phrases_wrapper') === null)))               
                document.getElementById('phrases_wrapper').value = '';
            if(!((document.getElementById('jokes_wrapper') === 'underfined') || (document.getElementById('jokes_wrapper') === null)))               
                document.getElementById('jokes_wrapper').value = '';
            if(!((document.getElementById('list_words_wrapper') === 'underfined') || (document.getElementById('list_words_wrapper') === null)))                        
                document.getElementById('list_words_wrapper').style.visibility = action.list_words_wrapper;
            if(!((document.getElementById('list_listen_wrapper') === 'underfined') || (document.getElementById('list_listen_wrapper') === null)))               
                document.getElementById('list_listen_wrapper').style.visibility = action.list_listen_wrapper;
            if(!((document.getElementById('list_phrases_wrapper') === 'underfined') || (document.getElementById('list_phrases_wrapper') === null)))               
                document.getElementById('list_phrases_wrapper').style.visibility = action.list_listen_wrapper;
                
//console.log("document.getElementById=",document.getElementById('list_jokes_wrapper'));            

//            if(!(document.getElementById('list_jokes_wrapper').style.visibility == undefined))
//                document.getElementById('list_jokes_wrapper').style.visibility = 'hidden';
            if(!((document.getElementById('list_tests_wrapper') === 'underfined') || (document.getElementById('list_tests_wrapper') === null))){
                document.getElementById('list_tests_wrapper').style.visibility = action.list_tests_wrapper;
                console.log('MainReducer: action.list_tests_wrapper=',action.list_tests_wrapper);
            }               
                
               
            return {      
                ...state,
                state_tests: action.state_tests,
                list_tests_wrapper: action.list_tests_wrapper,
                state_edit: action.state_edit,
                stateWords: "empty",
                stateListen: "empty",
                statePhrases: "empty",
                stateJokes: "empty" 
            };
        case 'SET_WORDS': 
            document.getElementById('tests_wrapper').value = '';
            document.getElementById('words_wrapper').value = '';
            document.getElementById('listen_wrapper').value = '';
            document.getElementById('phrases_wrapper').value = '';
            document.getElementById('jokes_wrapper').value = '';        
            return {
                ...state,
                stateTests: "empty",
                stateWords: "full",
                stateListen: "empty",
                statePhrases: "empty",
                stateJokes: "empty",
            };
        case 'SET_LISTEN': 
            document.getElementById('tests_wrapper').value = '';
            document.getElementById('words_wrapper').value = '';
            document.getElementById('listen_wrapper').value = '';
            document.getElementById('phrases_wrapper').value = '';
            document.getElementById('jokes_wrapper').value = '';
            return {
                ...state,
                stateTests: "empty",
                stateWords: "empty",
                stateListen: "full",
                statePhrases: "empty",
                stateJokes: "empty",
            };
        case 'SET_PHRASES': 
            document.getElementById('tests_wrapper').value = '';
            document.getElementById('words_wrapper').value = '';
            document.getElementById('listen_wrapper').value = '';
            document.getElementById('phrases_wrapper').value = '';
            document.getElementById('jokes_wrapper').value = '';
            return {
                ...state,
                stateTests: "empty",
                stateWords: "empty",
                stateListen: "empty",
                statePhrases: "full",
                stateJokes: "empty",
            };
        case 'SET_JOKES': 
            document.getElementById('tests_wrapper').value = '';
            document.getElementById('words_wrapper').value = '';
            document.getElementById('listen_wrapper').value = '';
            document.getElementById('phrases_wrapper').value = '';
            document.getElementById('jokes_wrapper').value = '';
            return {
                ...state,
                stateTests: "empty",
                stateWords: "empty",
                stateListen: "empty",
                statePhrases: "empty",
                stateJokes: "full",
            };
            
        default:
            return state;

    } //switch

//    return state;   
   

}; //end of MainReducer---------------------------


export default MainReducer;




