import React from 'react'
import "./Header.css";
import apple from "./images/apple.svg"
import search from "./images/search.svg"
import cart from "./images/cart.svg"


export default function Header() {
  return (
    <>
      <div className="wrapper">
        <ul className="list-wrapper">
          <li>
            <a href="/">
              <img src={apple} />
            </a>
          </li>

          <li>
            <a href="#">Store</a>

            <div class="store_dropdown">
              <div class="column_one">
                <p>Shop</p>
                <a href="https://www.apple.com/store">Shop the Latest</a>
                <a href="https://www.apple.com/shop/buy-mac">Mac</a>
                <a href="https://www.apple.com/shop/buy-ipad">iPad</a>
                <a href="https://www.apple.com/shop/buy-iphone">iPhone</a>
                <a href="https://www.apple.com/shop/buy-watch">Apple Watch</a>
                <a href="https://www.apple.com/shop/buy-vision">
                  Apple Vision Pro
                </a>
                <a href="https://www.apple.com/shop/airpods/accessories">
                  AirPods
                </a>
                <a href="https://www.apple.com/shop/accessories/all">
                  Accessories
                </a>
              </div>

              <div class="column_two">
                <p>Quick Links</p>
                <a href="https://www.apple.com/retail/">Find a Store</a>
                <a href="#">Order Status</a>
                <a href="https://www.apple.com/shop/trade-in">Apple Trade In</a>
                <a href="https://www.apple.com/shop/browse/financing">
                  Financing
                </a>
                <a href="https://www.apple.com/shop/personal-setup">
                  Personal Setup
                </a>
              </div>

              <div class="column_three">
                <p>Shop Special Stores</p>
                <a href="https://www.apple.com/shop/refurbished">
                  Certified Refurbished
                </a>
                <a href="https://www.apple.com/us-edu/store">Education</a>
                <a href="https://www.apple.com/retail/business/">Business</a>
                <a href="https://www.apple.com/us-edu/shop/browse/home/veterans_military">
                  Veterans and Military
                </a>
                <a href="https://www.apple.com/government/">Government</a>
              </div>
            </div>
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
