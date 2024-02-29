import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link to="/" >
                <h2>Back To Home.</h2>
            </Link>
        </div>
    )
}
