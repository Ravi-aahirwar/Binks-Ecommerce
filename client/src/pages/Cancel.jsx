import React from 'react'
import { Link } from 'react-router-dom'

export default function Cancel() {
    return (
        <div className='cancel-paument'>
            <h1 style={{ color: "red", margin: "10px" }} >Payment Cancel</h1>
            <h4 style={{ margin: "10px" }} >
                <Link to="/">Back To Home</Link>
            </h4>
        </div>
    )
}
