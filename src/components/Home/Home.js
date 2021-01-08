import React from 'react'
import './home.css'

export const Home = () => {

    let buttonText = "Buttooon1"

    return (
        <div className="home__container" style= { {display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', height: '100vh'}}>
        <button text={buttonText}>Click Me!</button>
        </div>
    )
}

export default Home