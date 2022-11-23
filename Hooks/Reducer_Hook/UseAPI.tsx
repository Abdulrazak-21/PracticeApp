import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import { reducer, initialState } from './Reducer'

function fetchDatafromAPI() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const URL = 'https://jsonplaceholder.typicode.com/photos'

    useEffect(() => {
        axios
            .get(URL)
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERRROR', payload: error })
            })
    }, [])

    return { state }
}

export default fetchDatafromAPI;