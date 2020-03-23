import React from 'react';
import handleActions from 'redux-actions';
import {showRequest, showFailure, showSuccess} from '../actions/show';


export default handleActions (
    {
        [showRequest.toString()]: state => ({
            ...state,
            isFetching: true
        }),
        [showSuccess.toString()]: (state, action) => ({
            ...state,
            isFetching: false,
            
        }),


);