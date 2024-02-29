import React from 'react'

export default function CartToggle({ amount, setDecrease, setIncrease }) {
    return (
        <div>
            <div style={{ display: 'flex', gap: "15px", cursor: "pointer" }}  >
                <p onClick={setDecrease} style={{ fontSize: "14px" }} >-</p>
                <h5> { parseFloat(amount.toFixed(2)) } </h5>
                {/* parseFloat(originalNumber.toFixed(2)) */}
                <p onClick={setIncrease} style={{ fontSize: "14px" }} >+</p>
            </div>
        </div>
    )
}
