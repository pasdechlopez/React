import React from 'react';
import { combineReducers } from 'redux';

//exmps on Reducers work in Redux

const initialState = {
  todos: []
}

//generates func to call all reducers needed
const todoApp = combineReducers({
  visibilityFilter, 
  todos
});

// vs


// export default function todoApp(state, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   };
// }

function todos(state = { todos: []}, action) {
  switch (action.type) {
    case: "ADD_TODO":
      return Object.assign({}, state, {
        todos: [...state.todos, {
          text: action.text,
        }]
      });
      default: 
        return state;
  }
}



// function todoApp(state, action) {
//   if (typeof state  === "undefined") {
//     return initialState
//   }

//   return state
// }

// vs 

function todoApp(state = initialState, action) {

  switch (action.type) {
    case "ADD_TODO":
      return Object.assign({}, state, { //create new copy of state - first arg must be {}
        todos: [...state.todos, {
          text: action.text,
        }]
      });
      default: 
      return state;   // if default case, return unchanged state
    }
}

function visibilityFilter (state = "SHOW_ALL", action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;         // toggle betweeen visible and hidden states
    default: 
      return state;
  }
}

