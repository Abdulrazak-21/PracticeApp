import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer from './Reducer'
// const getDataFromAPI = () => {

//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState('')
//     const URL = 'https://jsonplaceholder.typicode.com/photos'
//     function getData() {
//         setLoading(true)
//         axios
//             .get(URL)
//             .then((res) => {
//                 console.log(res.data)
//                 setData(res.data)
//                 setLoading(false)
//             })
//             .catch((e) => {
//                 setError(e)
//                 setLoading(false)
//             })
//     }

//     useEffect(() => {
//         getData();
//     }, []);

//     return { data, loading, error }
// }

// export default getDataFromAPI;


const initialState = {
    loading: true,
    error: '',
    post: []
}


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