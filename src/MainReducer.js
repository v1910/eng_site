//MainReducer.js -----------

import React from "react"
import ReactDOM from 'react-dom';


// state--
let initialStore = 
{
    
	//initialisation -----------
	 words_files:  ["SOCIETY","SPORT","ACCOMMODATION", "APPEARANCE", "PREPOSITIONS", "NATURE"], // words files
	 words : [], // words array
	 all_words : [], // array of all words
 	 jokes_arr : [], // jokes array
	 work_arr : [], // array of random numbers
	 count_pick_button_show_word: 0,  //count of picking button_show_word
	 count_pick_button_show_description: 0, //count of picking button_show_description
	 current_number_word: 0,  //current number word
	 current_number_word_group: 0, // current word group (SOCIETY)
	 count_pick_button_show_answer: 0,
	 nWords: 0, // quantity of words
  	 nTests: 0, // quantity of tests
  	 currentTest: 0, // current test
	 countDownDate: new Date().getTime(), // start time for the chosing test
	 countDownDate_qst: new Date().getTime(), // start time for the chosing question
  	 count_time_question: [],  // all time for the current question
  	 count_time_test: [], // all time for the current test
	 current_question: 0, // current question  ( 0  -  first)
	 X_setInterval: 0, // id of clearInterval
	
	 idioms_files: ["JOB","HOT","MIX"], // idioms files
  	
	/* initialize variables */
	 count: 0, 
	 clearTime: 0, 
	 seconds: 0,
	 minutes: 0,
	 hours: 0, 
	 clearState: 0, 
	 secs: 0,
	 mins: 0,
	 gethours: 0, 


	// tests -----------------

	tests:  "AllTests", // read all tests

	cAnswers:  "CorrectAnswersTests",  // read all correct answers

	count_questions_test:  0, // amount of questions in current test
	
	selected_answer: -1,  // number of the selected answer in the current question

	count_correct_answer: [],  // amount of correct answers for earch question

	
	// words -----------------
	all_words: ["SOCIETYwords", "SPORTwords", "ACCOMMODATIONwords", "APPEARANCEwords", "PREPOSITIONSwords", "NATUREwords"],
	curent_number_word: 0,


	// LISTEN-READ --------------
	nAudio: 3,  // amount of all audio files


	// jokes -----------------
	jokes_arr: "Jokes", // read all jokes
	nJokes:  jokes_arr.length, // amount of all jokes


	// menu
    itemMenu1: "", // TESTS, WORDS, LISTEN, PHRASES, JOKES
    itemMenu2: "",  // TEST2 or SPORT or ...
	
	visible_tests: 'hidden',
	visible_words: 'hidden',
	visible_listen: 'hidden',
	visible_phrases: 'hidden',
	visible_jokes: 'hidden',

	value_tests: 'empty',
	value_words: 'empty',
	value_listen: 'empty',
	value_phrases: 'empty',
	value_jokes: 'empty'
	
}//end of initialStore-------


// Reducer

function MainReducer(state = initialStore, action) {
	console.log('MainReducer 1: ', action);
	switch(action.type){
		case 'SHOW_TESTS_MENU':
			console.log('MainReducer: SHOW_TESTS_MENU');
			return{
				...state,
				visible_tests: action.visible_tests,
				visible_words: action.visible_words,
				visible_listen: 'hidden',
				visible_phrases: 'hidden',
				visible_jokes: 'hidden',
				value_tests: 'empty',
				value_words: 'empty',
				value_listen: 'empty',
				value_phrases: 'empty',
				value_jokes: 'empty'
				
			}
		case 'SHOW_WORDS_MENU':
				console.log('MainReducer: SHOW_WORDS_MENU');
			return{
				...state,
				visible_tests: 'hidden',
				visible_words: 'visible',
				visible_listen: 'hidden',
				visible_phrases: 'hidden',
				visible_jokes: 'hidden',
				value_tests: 'empty',
				value_words: 'empty',
				value_listen: 'empty',
				value_phrases: 'empty',
				value_jokes: 'empty'
					
			}			
			default:
				return state;
	}//switch

   return store;
};//end of MainReducer -----------------------

export default MainReducer;




