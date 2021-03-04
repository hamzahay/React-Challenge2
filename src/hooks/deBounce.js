
/*
import { useState, useEffect } from 'react'

export default function deBounce (value, delay) {
  const [searchValue, setSearchValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchValue(value)
    }, delay)
    
    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return searchValue
}
*/