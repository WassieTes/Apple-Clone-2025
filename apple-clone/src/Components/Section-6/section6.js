import React from 'react'
import "./section6.css"
import Tradein from "./images-6/10001.png";
import Cardimg from "./images-6/10002.png"

export default function section6() {
  return (
    <>
      <div class="sec6-wrapper">
        <div class="phone">
          <img class="Trade-in" src={Tradein} />
          <p>
            Get up to $200-$700
            <br />
            in credit when you trade in <br />
            iphone 13 or higher.
          </p>
          <button class="but15">
            <a>Get your estimate</a>
          </button>
        </div>
        <div class="apple-card">
          <img class="card-img" src={Cardimg} />
          <p>
            Get up to 3% Daily Cash back
            <br />
            with every purchase.
          </p>
          <div class="button6">
            <button class="but13">
              <a>Learn more</a>
            </button>
            <button class="but14">
              <a>Upgrade</a>
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
