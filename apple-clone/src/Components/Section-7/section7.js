import React from 'react'
import "./section7.css"
import Img1 from "./images-7/1.jpg"
import Img2 from "./images-7/2.jpg"
import Img3 from "./images-7/3.jpg"
import Img4 from "./images-7/4.jpg"
import Img5 from "./images-7/5.jpg"
import Img6 from "./images-7/6.jpg"
import Img7 from "./images-7/7.jpg"
import Img8 from "./images-7/8.jpg"
import Img9 from "./images-7/9.jpg"
import Img10 from "./images-7/10.jpg"

export default function section7() {
  return (
    <>
      <div class="sec7-wrapper">
        <div class="image-wrapper">
          <img src={Img1} />
          <img src={Img2} />
          <img src={Img3} />
          <img src={Img4} />
          <img src={Img5} />
          <img src={Img6} />
          <img src={Img7} />
          <img src={Img8} />
          <img src={Img9} />
          <img src={Img1} />
        </div>
      </div>

      <div class="slider-dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </>
  );
}
