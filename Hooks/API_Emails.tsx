import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
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

    // return (
    //     <View>
    //         {/* <Text> This is title</Text> */}
    //         <Text>{data.title}</Text>
    //         <Text>{data.body}</Text>

    //     </View>
    // )
    return { data }
}

export default UseAPIEmails;