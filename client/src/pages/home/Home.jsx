import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useProductContext } from '../../utils/contexts/ProductsContext'

export default function Home() {

    const {loading, error} = useProductContext()
    console.log(error);
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
    <div>
     <Navbar/>
     <h2> {error} </h2>
    </div>
  )
}
