import React from 'react'
import { useLocation } from 'react-router-dom'

const useDinamic = () => {

  const location = useLocation()
  

  return {
    location
  }
}

export default useDinamic