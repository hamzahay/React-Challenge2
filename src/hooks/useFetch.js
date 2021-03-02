import { useEffect, useState } from "react";

export default function useFetch(url) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [url])

  return [data, loading]
}