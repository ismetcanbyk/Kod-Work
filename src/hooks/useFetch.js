import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
    const [error, setError] = useState(null)
    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const { data } = await axios.get(url)
            setdata(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }


    useEffect(() => { fetchData() }, [])

    return { error, data, loading }
}

export default useFetch;