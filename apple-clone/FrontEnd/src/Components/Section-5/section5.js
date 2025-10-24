import React from 'react'
import "./section5.css";
import ipodair from "./images-5/3.png"

export default function section5() {
  return (
    <>
       <div className="sec5-wrapper">
  <div className="mac-book">
      <h3>MacBook Air</h3>
      <p>Sky blue color. <br/>Sky high performance with M4.</p>
       <div className="button5">
          <button className="but10"><a>Learn more</a></button>
          <button className="but11"><a>Buy</a></button>
      </div>
  </div>
  <div className="ipad">
      <img className="ipad-img" src= {ipodair}/>
      <p>Now supercharged by the M3 chip.</p>
       <div className="button55">
          <button className="but101"><a>Learn more</a></button>
          <button className="but111"><a>Buy</a></button>
   </div>
  </div>
 </div><br/>
    </>
  )
}
