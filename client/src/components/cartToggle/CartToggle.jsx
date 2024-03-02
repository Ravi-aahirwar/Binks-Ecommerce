import React from 'react'
import "./CartToggle.css"
export default function CartToggle({ amount, setDecrease, setIncrease}) {
    return (
        <div>
            <div className='cartToggleOuterDiv'>
                <p onClick={setDecrease}>-</p>
                <h5>{amount}</h5>
                <p onClick={setIncrease}>+</p>
            </div>
        </div>
    )
}
