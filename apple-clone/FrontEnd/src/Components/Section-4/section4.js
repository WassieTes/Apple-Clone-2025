import React from 'react'
import "./section4.css"
import Applegames from "./images-4/1007.png"

export default function section4() {
  return (
    <>
      <div class="sec4-wrapper">
  <div class="icloud">
      <h3>iCloud+</h3>
      <p>Supercharge iphone with extra storage, <br/>automatic backup,and more.</p>
       <div class="button4">
          <button class="but7"><a>Learn more</a></button>
          <button class="but8"><a>Upgrade</a></button>
      </div>
  </div>
  <div class="games">
      <img class="game-img" src= {Applegames} />
      <p>All your games.All your friends.</p>
      <p>All in one place.</p>
       <button class="but9"><a>Get the app</a></button>
  </div>
 </div><br/> 
    </>
  )
}
