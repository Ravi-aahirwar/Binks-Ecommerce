import React from 'react'

export default function CartToggle({ amount, setDecrease, setIncrease }) {
    return (
        <div>
            <div style={{ display: 'flex', gap: "15px", cursor: "pointer" }}  >
                <p onClick={setDecrease} style={{ fontSize: "14px" }} >-</p>
                <h5>{amount}</h5>
                <p onClick={setIncrease} style={{ fontSize: "14px" }} >+</p>
            </div>
        </div>
    )
}
