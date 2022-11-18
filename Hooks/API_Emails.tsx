import { useState, useEffect } from 'react';
import axios from 'axios';


const UseAPIEmails = () => {
    const [data, setData] = useState([])


    function getData() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response.data.title);
                console.log(response.data.body);
                setData(response.data)

            })

    }

    useEffect(() => {
        getData();
    }, [])

    return { data }
}

export default UseAPIEmails;