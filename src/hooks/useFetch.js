import {useEffect, useState} from 'react';
export default (endpoint) =>{
    const [data, setData] = useState([])
    const [error, setError]= useState([])
    const [loading ,setLoading]= useState(true)

    useEffect(() => {
        fetch(endpoint, {
            method: 'GET',
            })
            .then((response) => response.json())
            .then((result) => {
                setData(result)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            });

    },[]);

    return{
        data,error,loading
    }
}