import React from 'react'
import "./error404.css"

const Error404 = ({text}) => {
    return (
        <div className="not__found">
            <img src={process.env.PUBLIC_URL + "/images/404.png" } alt="error 404" />
            <h1>{text}</h1>
        </div>
    )
}

export default Error404
