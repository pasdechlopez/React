import React from 'react';
import handleActions from 'redux-actions';
import {searchRequest, searchFailure, searchSuccess} from '../actions/search';


export default handleActions (
    {
        [searchRequest.toString()]: state => ({
            ...state,
            isFetching: true
        }),
        [searchSuccess.toString()]: (state, action) => ({
            ...state,
            isFetching: false,
            
        }),


);