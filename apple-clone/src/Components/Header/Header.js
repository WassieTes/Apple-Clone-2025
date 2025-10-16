import React from 'react'
import "./Header.css";
import apple from "./images/apple.svg"
import search from "./images/search.svg"
import cart from "./images/cart.svg"


export default function Header() {
  return (
    <>
      <div class="wrapper">
        <ul class="list-wrapper">
          <li>
            <a href="/">
              <img src={apple} />
            </a>
          </li>
          <li>
            <a href="#">Store</a>
            <ul class="dropdown">
              <li>
                <a href="#">Shop the Latest</a>
              </li>
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#">iPhone</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">ipad</a>
          </li>
          <li>
            <a href="#">iphone</a>
          </li>
          <li>
            <a href="#">Watch</a>
          </li>
          <li>
            <a href="#">Vision</a>
          </li>
          <li>
            <a href="#">Airpods</a>
          </li>
          <li>
            <a href="#">Tv&Home</a>
          </li>
          <li>
            <a href="#">Entertainment</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">
              <img src={search} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={cart} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
