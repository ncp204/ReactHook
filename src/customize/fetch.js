import { useEffect, useState } from "react"
import axios from 'axios';

const useFetch = (url) => {
    let [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    // = componentDidmount() {}
    useEffect(() => {
        let canceled = false;
        const fetchData = async () => {
            try {
                let res = await axios.get(url)
                let data = res && res.data && res.data.data ? res.data.data : [];
                if (!canceled) {
                    setData(data);
                    setIsLoading(false)
                    setIsError(false)
                }
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled ', error.message);
                }
                setIsError(true)
                setIsLoading(false)
            }

        }
        setTimeout(() => {
            fetchData()
        }, 2000);
        return () => (canceled = true)
    }, [])

    return {
        data, isLoading, isError
    }
}

export default useFetch;