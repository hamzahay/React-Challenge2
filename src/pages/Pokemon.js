import React from 'react'
import { useParams } from 'react-router-dom'

export default function Pokemon () {

  let { id } = useParams();
  console.log(`on pokemon detail for pokemon`, id)
  return (
    <div>
    </div>
  )
}