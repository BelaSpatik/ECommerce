import React from 'react'
import "./loading.css"

export default function Loading({loading}) {
    return (
        <div className="loading__div">
            <h1 className="message__title">{loading}</h1>
            <img src={process.env.PUBLIC_URL + "/images/spinner.png"} className="App-logo" alt="logo" />
        </div>
    )
}
