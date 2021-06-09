//createRedux.js-----------------------------

import {createStore} from 'redux';

import {AllTests} from 'AllTests.js';

import {CorrectAnswersTests} from 'CorrectAnswersTests.js';

import {SOCIETYwords} from "society_words.js";
import {SPORTwords} from "sport_words.js";
import {ACCOMMODATIONwords} from "accommodation_words.js";
import {APPEARANCEwords} from "appearance_words.js";
import {PREPOSITIONSwords} from "prepositions_words.js";
import {NATUREwords} from "nature_words.js";
import {Jokes} from "jokes.js";

let workAllTest = AllTests(); // read all tests
//let workTest = workAllTest[0].length; // amount of questions in current test

let initialStore = 

{
	//initialisation -----------
    stateTests: "empty",
    stateWords: "empty",
    stateListen: "empty",
    statePhrases: "empty",
    stateJokes: "empty",
    itemMenu1: "",
    itemMenu2: "",
	global_words_files:  ["SOCIETY","SPORT","ACCOMMODATION", "APPEARANCE", "PREPOSITIONS", "NATURE"], // words files
	global_words:  [], // words array
//	global_all_words: [], // array of all words
// 	global_jokes_arr: [], // jokes array
	global_work_arr: [], // array of random numbers
	global_count_pick_button_show_word:  0,  //count of picking button_show_word
	global_count_pick_button_show_description:  0, //count of picking button_show_description
	global_current_number_word:  0,  //current number word
	global_current_number_word_group:  0, // current word group (SOCIETY)
	global_count_pick_button_show_answer:  0,
	global_nWords:  0, // quantity of words
//  	global_nTests:  0, // quantity of tests
  	global_currentTest:  0, // current test
	global_countDownDate:  new Date().getTime(), // start time for the chosing test
	global_countDownDate_qst:  new Date().getTime(), // start time for the chosing question
  	global_count_time_question:  [],  // all time for the current question
  	global_count_time_test:  [], // all time for the current test
	global_current_question:  0, // current question  ( 0  -  first)
	global_X_setInterval:  0, // id of clearInterval

	global_idioms_files:  ["JOB","HOT","MIX"], // idioms files
  	
	/* initialize variables */
	global_count:  0, 
	global_clearTime:  0, 
	global_seconds:  0,
	global_minutes:  0,
	global_hours:  0, 
	global_clearState:  0, 
	global_secs:  0,
	global_mins:  0,
	global_gethours:  0, 


	// tests -----------------
	global_tests:  workAllTest, // read all tests

	global_nTests:  workAllTest.length, // amount of all tetsts

	global_cAnswers: CorrectAnswersTests(),  // read all correct answers
	
	global_selected_answer: -1,  // number of the selected answer in the current question

	global_count_correct_answer: [],  // amount of correct answers for earch question

	
	// words -----------------
    global_all_words: [SOCIETYwords(),SPORTwords(),ACCOMMODATIONwords(),APPEARANCEwords(),PREPOSITIONSwords(),NATUREwords()], // array of all words

//	global_all_words[0] = SOCIETYwords(),
//	global_all_words[1] = SPORTwords(),
//	global_all_words[2] = ACCOMMODATIONwords(),
//	global_all_words[3] = APPEARANCEwords(),
//	global_all_words[4] = PREPOSITIONSwords(),
//	global_all_words[5] = NATUREwords(),

	global_curent_number_word: 0,


	// LISTEN-READ --------------
	global_nAudio: 3,  // amount of all audio files


	// jokes -----------------
	global_jokes_arr: Jokes() // read all jokes
	

}; //initialStore  

let workInitialStore = initialStore;
initialStore.global_count_questions_test = workAllTest[workInitialStore.global_currentTest].length; // amount of questions in current test
initialStore.global_nJokes = workInitialStore.global_jokes_arr.length // amount of all jokes


// Reducer
let reducer = (state = initialStore, cmd) => {
    console.log('createRedux: cmd=',cmd);
    console.log('createRedux: store=',state);

/*
    dispatch({type: 'SET_TESTS', setStateTests: stateTests});
    dispatch({type: 'SET_WORDS', setStateWords: stateWords});
    dispatch({type: 'SET_LISTEN', setStateListen: stateListen});
    dispatch({type: 'SET_PHRASES', setStatePhrases: statePhrases});
    dispatch({type: 'SET_JOKES', setStateJokes: stateJokes});
*/
    switch(cmd.type) {
        case 'SET_TESTS': 
            document.getElementById('words_wrapper').value = '';
            document.getElementById('listen_wrapper').value = '';
            document.getElementById('phrases_wrapper').value = '';
            document.getElementById('jokes_wrapper').value = '';
            return {
                ...state,
                stateTests: "full",
                stateWords: "empty",
                stateListen: "empty",
                statePhrases: "empty",
                stateJokes: "empty",
            };
        case 'SET_WORDS': 
            document.getElementById('tests_wrapper').value = '';
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
}; //reducer


let state = createStore(reducer);

export default state;




