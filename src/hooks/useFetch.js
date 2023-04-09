import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url).then(response => {
                //console.log(response.data);
                setData(response);
                setLoading(false);
            });
        }
        fetchData();
    }, [url]);

    return { data, loading };
}

export default useFetch;