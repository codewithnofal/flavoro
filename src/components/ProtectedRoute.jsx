import React, { useContext } from 'react'
import DataContext from './DataContext'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({element}) => {
   const {cart} =  useContext(DataContext)
  return (
    <div>
      {cart.length > 0 ? element : <Navigate to="/" /> }
    </div>
  )
}

export default ProtectedRoute
