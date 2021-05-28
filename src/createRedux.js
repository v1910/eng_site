import {createStore} from 'redux';

// Store
let initialStore = 
{
    
}
/*
        [
            {
                id_pr : 0,
                name_pr : "QQQQ",
                price_pr: 1,
                fname_pr: '1.jpg'
            }
        ];
*/
// Reducer

let reducer = (store = initialStore, cmd) => {
    let new_store;
/*    
    if (cmd.type === 'ADD_PU') {
        let id_pu = store.id_pu;  
        let new_store;
        new_store = store;
        return new_store;
    }
  
    if (cmd.type === 'EDIT_PU') {
        
        let new_store;
        new_store = store;
        return new_store;
    };
    
    if (cmd.type === 'REMOVE_PU') {
        let new_store;
        store.splice(cmd.id_pu,1);
        new_store = store;
        return new_store;
    }

    if (cmd.type === 'SAVE_PU') {
        console.log('createRedux: SAVE_PU cmd=',cmd);
        let new_store = cmd.prod;
        console.log('createRedux: SAVE_PU new_store=',new_store);
        return new_store;
    }
*/     
    return store;
};


let engine = createStore(reducer);

export default engine;




