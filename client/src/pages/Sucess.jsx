import React from 'react'
import { Link } from 'react-router-dom'
import "./Sucess.css"
export default function Sucess() {
  let sucessGf = "https://media1.tenor.com/m/KFe6o_5Kg2oAAAAC/bddr-team-horizon-congratulations-gif-bddr.gif"
  return (
    <div>
      <div className='payment-sucess mainPaymnt'>
        <div className='paymentMini-div'>
          <h1>Payment Sucess </h1>
          <h4> <Link to="/products" > Continue Shopping. </Link></h4>
        </div>
      </div>
    </div>
  )
}
