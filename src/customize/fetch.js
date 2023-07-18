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
                setIsError(true)
                setIsLoading(false)
            }

        }
        fetchData()
        return () => (canceled = true)
    }, [])

    return {
        data, isLoading, isError
    }
}

export default useFetch;