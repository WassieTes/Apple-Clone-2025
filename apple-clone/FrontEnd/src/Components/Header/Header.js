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
            <div class="mac_dropdown">
              <div class="mac_one">
                <p>Explore Mac</p>
                <a href="https://www.apple.com/mac/">Explore All Mac</a>
                <a href="https://www.apple.com/macbook-air/">MacBook Air</a>
                <a href="https://www.apple.com/macbook-pro/">MacBook Pro</a>
                <a href="https://www.apple.com/imac/">iMac</a>
                <a href="https://www.apple.com/mac-mini/">Mac mini</a>
                <a href="https://www.apple.com/mac-studio/">Mac Studio</a>
                <a href="https://www.apple.com/mac-pro/">Mac Pro</a>
                <a href="https://www.apple.com/displays/">Displays</a>
                <p>Compare Mac</p>
                <p>Switch from pc to Mac</p>
              </div>

              <div class="mac_two">
                <p>Shop Mac</p>
                <a href="https://www.apple.com/us-edu/shop/buy-mac">Shop Mac</a>
                <a href="https://www.apple.com/mac/best-mac/">Help Me Choose</a>
                <a href="https://www.apple.com/us-edu/shop/mac/accessories">
                  Mac Accessories
                </a>
                <a href="https://www.apple.com/us-edu/shop/trade-in#mac">
                  Apple Trade in
                </a>
                <a href="https://www.apple.com/us-edu/shop/browse/education_payment_plan">
                  Financing
                </a>
              </div>

              <div class="mac_three">
                <p>More from Mac</p>
                <a href="https://support.apple.com/mac?cid=gn-ols-mac-psp-prodfly">
                  Mac Support
                </a>
                <a href="https://www.apple.com/applecare/?filter=mac">
                  AppleCare
                </a>
                <a href="https://www.apple.com/os/macos/">macOS Tahoe</a>
                <a href="https://www.apple.com/apple-intelligence/">
                  Apple Intelligence
                </a>
                <a href="https://www.apple.com/apps/">Apps by Apple</a>
                <a href="https://www.apple.com/macos/continuity/">
                  Better with iPhone
                </a>
                <a href="https://www.apple.com/icloud/">iCloud+</a>
                <a href="https://www.apple.com/business/mac-does-that/">
                  Mac for Business
                </a>
                <a href="https://www.apple.com/education/">Education</a>
              </div>
            </div>
          </li>

          <li>
            <a href="#">ipad</a>
            <div class="ipad_dropdown">
              <div class="ipad_one">
                <p>Explore iPad</p>
                <a href="https://www.apple.com/ipad/">Explore All iPad</a>
                <a href="https://www.apple.com/ipad-pro/">iPad Pro</a>
                <a href="https://www.apple.com/ipad-air/">iPad Air</a>
                <a href="https://www.apple.com/ipad-11/">iPad</a>
                <a href="https://www.apple.com/ipad-mini/">iPad mini</a>
                <a href="https://www.apple.com/apple-pencil/">Apple Pencil</a>
                <a href="https://www.apple.com/ipad-keyboards/">Keyboards</a>
                <p>Compare iPaad</p>
              </div>

              <div class="ipad_two">
                <p>Shop iPad</p>
                <a href="https://www.apple.com/us-edu/shop/buy-mac">
                  Shop iPad
                </a>
                <a href="https://www.apple.com/us-edu/shop/ipad/accessories">
                  iPad Accessories
                </a>
                <a href="https://www.apple.com/us-edu/shop/trade-in#ipad">
                  Apple Trade In
                </a>
                <a href="https://www.apple.com/us-edu/shop/browse/education_payment_plan">
                  Financing
                </a>
              </div>

              <div class="ipad_three">
                <p>More from iPad</p>
                <a href="https://support.apple.com/ipad?cid=gn-ols-ipad-psp-prodfly">
                  iPad Support
                </a>
                <a href="https://www.apple.com/applecare/?filter=ipad">
                  AppleCare
                </a>
                <a href="https://www.apple.com/os/ipados/">iPadOS 26</a>
                <a href="https://www.apple.com/apple-intelligence/">
                  Apple Intelligence
                </a>
                <a href="https://www.apple.com/apps/">Apps by Apple</a>
                <a href="https://www.apple.com/icloud/">iCloud+</a>
                <a href="https://www.apple.com/education/">Education</a>
              </div>
            </div>
          </li>

          <li>
            <a href="#">iphone</a>

            <div class="iphone_dropdown">
              <div class="iphone_one">
                <p>Explore iPhone</p>
                <a href="https://www.apple.com/iphone/">Explore All iPhone</a>
                <a href="https://www.apple.com/iphone-17-pro/">iPhone 17 Pro</a>
                <a href="https://www.apple.com/iphone-air/">iPhone Air</a>
                <a href="https://www.apple.com/iphone-17/">iPhone 17</a>
                <a href="https://www.apple.com/us-edu/shop/buy-iphone/iphone-16">
                  iPhone 16
                </a>
                <a href="https://www.apple.com/iphone-16e/">iPhone 16e</a>
                <p>Compare iPhone</p>
                <p>Switch from Android</p>
              </div>

              <div class="iphone_two">
                <p>Shop iPhone</p>
                <a href="https://www.apple.com/us-edu/shop/buy-iphone">
                  Shop iPhone
                </a>
                <a href="https://www.apple.com/us-edu/shop/iphone/accessories">
                  iPhone Accessories
                </a>
                <a href="https://www.apple.com/us-edu/shop/trade-in#iphone">
                  Apple Trade In
                </a>
                <a href="https://www.apple.com/us-edu/shop/buy-iphone/carrier-offers">
                  Carrier Deals at Apple
                </a>
                <a href="https://www.apple.com/us-edu/shop/browse/education_payment_plan">
                  Financing
                </a>
              </div>

              <div class="iphone_three">
                <p>More from iPhone</p>
                <a href="https://support.apple.com/iphone?cid=gn-ols-iphone-psp-prodfly">
                  iPhone Support
                </a>
                <a href="https://www.apple.com/applecare/?filter=iphone">
                  AppleCare
                </a>
                <a href="https://www.apple.com/os/ios/">iOS 26</a>
                <a href="https://www.apple.com/apple-intelligence/">
                  Apple Intelligence
                </a>
                <a href="https://www.apple.com/apps/">Apps by Apple</a>
                <a href="https://www.apple.com/privacy/">iPhone Privacy</a>
                <a href="https://www.apple.com/macos/continuity/">
                  Better with Mac
                </a>
                <a href="https://www.apple.com/icloud/">iCloud+</a>
                <a href="https://www.apple.com/wallet/">Wallet, Pay, Card</a>
                <a href="https://www.apple.com/siri/">Siri</a>
              </div>
            </div>
          </li>

          <li>
            <a href="#">Watch</a>
            <div class="Watch_dropdown">
              <div class="Watch_one">
                <p>Explore Watch</p>
                <a href="https://www.apple.com/watch/">
                  Explore All Apple Watch
                </a>
                <a href="https://www.apple.com/apple-watch-series-11/">
                  Apple Watch Series 11
                </a>
                <a href="https://www.apple.com/apple-watch-se-3/">
                  Apple Watch SE3
                </a>
                <a href="https://www.apple.com/apple-watch-ultra-3/">
                  Apple Watch Ultra 3
                </a>
                <a href="https://www.apple.com/apple-watch-nike/">
                  Applw Watch Nike
                </a>
                <a href="https://www.apple.com/apple-watch-hermes/">
                  Apple Watch Hermes
                </a>
                <p>Compare Watch</p>
                <p>Why AppleWatch</p>
              </div>

              <div class="Watch_two">
                <p>Shop Watch</p>
                <a href="https://www.apple.com/us-edu/shop/buy-watch">
                  Shop Apple Watch
                </a>
                <a href="https://www.apple.com/us-edu/shop/watch/bands">
                  Apple Watch Bands
                </a>
                <a href="https://www.apple.com/us-edu/shop/watch/accessories">
                  Apple Watch Accessories
                </a>
                <a href="https://www.apple.com/us-edu/shop/trade-in#watch">
                  Apple Trade In
                </a>
                <a href="https://www.apple.com/us-edu/shop/browse/education_payment_plan">
                  Financing
                </a>
              </div>

              <div class="Watch_three">
                <p>More from Watch</p>
                <a href="https://support.apple.com/watch?cid=gn-ols-watch-psp-prodfly">
                  Apple Watch Support
                </a>
                <a href="https://www.apple.com/applecare/?filter=watch">
                  AppleCare
                </a>
                <a href="https://www.apple.com/os/watchos/">WatchOS 26</a>
                <a href="https://www.apple.com/apple-watch-for-your-kids/">
                  Apple Watch For Your Kids
                </a>
                <a href="https://www.apple.com/apps/">Apps by Apple</a>
                <a href="https://www.apple.com/apple-fitness-plus/">
                  Apple Fitness+
                </a>
              </div>
            </div>
          </li>

          <li>
            <a href="#">Vision</a>

            <div class="Vision_dropdown">
              <div class="Vision_one">
                <p>Explore Vision</p>
                <a href="https://www.apple.com/apple-vision-pro/">
                  Explore Apple Vision
                </a>
                <p>Tech Specs</p>
              </div>

              <div class="Vision_two">
                <p>Shop Vision</p>
                <a href="https://www.apple.com/us-edu/store">
                  Shop Apple Vision Pro{" "}
                </a>
                <a href="https://www.apple.com/us-edu/store">
                  Apple Vision Pro Accessories
                </a>
                <a href="https://www.apple.com/retail/instore-shopping-session/session-selection/?topic=visionpro">
                  Book a Demo
                </a>
                <a href="https://www.apple.com/us-edu/shop/browse/education_payment_plan">
                  Financing
                </a>
              </div>

              <div class="Vision_three">
                <p>More from Watch</p>
                <a href="https://support.apple.com/apple-vision-pro?cid=gn-nav-vision-psp-prodfly">
                  Apple Vision pro Support
                </a>
                <a href="https://www.apple.com/applecare/?filter=apple-vision-pro">
                  AppleCare
                </a>
                <a href="https://www.apple.com/os/visionos/">VisionOS 26</a>
              </div>
            </div>
          </li>

          <li>
            <a href="#">Airpods</a>
            <div class="Airpods_dropdown">
              <div class="Airpods_one">
                <p>Explore Airpods</p>
                <a href="https://www.apple.com/airpods/">Explore All Airpods</a>
                <a href="https://www.apple.com/airpods-4/">Airpods 4</a>
                <a href="https://www.apple.com/airpods-pro/">Airpods Pro 3</a>
                <a href="https://www.apple.com/airpods-max/">Airpods Max</a>
                <p>Compare Airpods</p>
              </div>

              <div class="Airpods_two">
                <p>Shop Watch</p>
                <a href="https://www.apple.com/us-edu/shop/accessories/all/headphones-speakers?f=apple-overear-sport&fh=47d1%2B3214%2B45aa%2B45ab&page=1">
                  Shop Airpods
                </a>
                <a href="https://www.apple.com/us-edu/shop/airpods/accessories">
                  Airpods Accessories
                </a>
              </div>

              <div class="Airpods_three">
                <p>More from Airpods</p>
                <a href="https://www.apple.com/us-edu/shop/airpods/accessories">
                  Airpods Support
                </a>
                <a href="https://www.apple.com/applecare/?filter=headphones">
                  AppleCare
                </a>
                <a href="https://www.apple.com/airpods-pro/hearing-health/">
                  Hearing Health
                </a>
                <a href="https://www.apple.com/apple-music/">Apple Music</a>
                <a href="https://www.apple.com/apple-fitness-plus/">
                  Apple Fitness+
                </a>
              </div>
            </div>
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
