import React from 'react'
import "./section8.css"
import Fitnessimg from "./images-8/1.jpg"
import podimg from "./images-8/2.jpg"
import Golfimg from "./images-8/3.jpg"
import Greggimg from "./images-8/4.jpg"
import Musicimg  from "./images-8/5.jpg"
import Balatroimg from "./images-8/6.jpg"



export default function section8() {
  return (
    <>
      <div class="sec8-wrapper">
  <div class="inner-wrapper">


    <div class="card-fitness">
       <div class="overlay1"></div>
      <button class="watch-btn1">Watch now</button>
      <img class="fitness-img" src= {Fitnessimg} />
      <div class="card-content1">
        <p class="title1">Strong and Calm Combos for Busy Days</p>
        <p class="subtitle1"> Fitness+</p>
      </div>
    </div>



     <div class="card-podcast">
      <div class="card-content2">
        <img class="pod-img"  src= {podimg} />
        <p class="title2">Seth Rogen: The Zane Lowe<br/>Interview</p>
        <p class="subtitle2">Music</p>
      </div>
      <div class="overlay2"></div>
      <button class="watch-btn2">Listen now</button>
    </div>



     <div class="card-golf">
      <img class="golf-img"  src= {Golfimg} />
      <button class="watch-btn3">Play now</button>
       <div class="overlay3"></div>
      <div class="card-content3">
        <p class="title3">PGA TOUR Pro Golf</p>
        <p class="subtitle3">Arcade</p>
      </div>
    </div>




   <div class="card-Gregg">
      <img class="Gregg-img"  src= {Greggimg} />
      <button class=" watch-btn4 "> Watch now </button>
       <div class="overlay4 "></div>
      <div class="card-content4 ">
        <p class="title4 ">strength with Gregg</p>
        <p class="subtitle4 ">Fitness</p>
      </div>
    </div>




<div class="card-music ">
      <div class="card-content5 ">
        <img class="Music-img "  src= {Musicimg } />
        <p class="title5">A-List Pop</p>
        <p class="subtitle5">Music</p>
      </div>
      <div class="overlay5"></div>
      <button class="watch-btn5">Listen now</button>
    </div>




<div class="card-Balatro">
  <img class="Balatro-img"  src= {Balatroimg} />
      <div class="card-content6">       
        <p class="title6">Balatro+</p>
        <p class="subtitle6">Arcade+</p>
      </div>
      <div class="overlay6"></div>
      <button class="watch-btn6">Play now</button>
    </div>
 
  </div>
</div><br/>
    </>
  )
}
