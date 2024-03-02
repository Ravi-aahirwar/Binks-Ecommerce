import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <div className='page-not-found'>
            <h1 style={{ margin: "10px" }} >Page Not Found</h1>
            <h4 style={{ margin: "10px" }} >
                <Link to="/">Back To Home</Link>
            </h4>
        </div>
    )
}
