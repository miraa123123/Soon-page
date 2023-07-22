import React from "react"
import Logo from "./images/logo.svg"
import Img from "./images/illustration-dashboard.png"

function App() {

  return (
    <>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>


        <div className="title">
          <h1 className="h1">We are launching <span className="span">soon!</span></h1>
        </div>
        <div className="sub">
          <h3>Subscribe and get notified</h3>
        </div>

      <div className="input">
        <input className="entry" type="text" placeholder="Your email address" /> <button className="btn">Notify Me</button>
      </div>

      <div className="img">
        <img src={Img} alt="img" />
      </div>

      <div className="copy">
        <p>©Copyright Ping, All rights reserved</p>
      </div>
    </>
  )
}

export default App
