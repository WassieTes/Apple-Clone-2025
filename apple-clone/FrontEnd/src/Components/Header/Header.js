import React from 'react'
import {Link} from "react-router-dom"
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

            <div className="store_dropdown">
              <div className="column_one">
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

              <div className="column_two">
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

              <div className="column_three">
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
            <div className="mac_dropdown">
              <div className="mac_one">
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

              <div className="mac_two">
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

              <div className="mac_three">
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
            <div className="ipad_dropdown">
              <div className="ipad_one">
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

              <div className="ipad_two">
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

              <div className="ipad_three">
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

            <div className="iphone_dropdown">
              <div className="iphone_one">
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

              <div className="iphone_two">
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

              <div className="iphone_three">
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
            <div className="Watch_dropdown">
              <div className="Watch_one">
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

              <div className="Watch_two">
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

              <div className="Watch_three">
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

            <div className="Vision_dropdown">
              <div className="Vision_one">
                <p>Explore Vision</p>
                <a href="https://www.apple.com/apple-vision-pro/">
                  Explore Apple Vision
                </a>
                <p>Tech Specs</p>
              </div>

              <div className="Vision_two">
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

              <div className="Vision_three">
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
            <div className="Airpods_dropdown">
              <div className="Airpods_one">
                <p>Explore Airpods</p>
                <a href="https://www.apple.com/airpods/">Explore All Airpods</a>
                <a href="https://www.apple.com/airpods-4/">Airpods 4</a>
                <a href="https://www.apple.com/airpods-pro/">Airpods Pro 3</a>
                <a href="https://www.apple.com/airpods-max/">Airpods Max</a>
                <p>Compare Airpods</p>
              </div>

              <div className="Airpods_two">
                <p>Shop Watch</p>
                <a href="https://www.apple.com/us-edu/shop/accessories/all/headphones-speakers?f=apple-overear-sport&fh=47d1%2B3214%2B45aa%2B45ab&page=1">
                  Shop Airpods
                </a>
                <a href="https://www.apple.com/us-edu/shop/airpods/accessories">
                  Airpods Accessories
                </a>
              </div>

              <div className="Airpods_three">
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
            <div className="TvHome_dropdown">
              <div className="TvHome_one">
                <p>Explore TV & Home</p>
                <a href="https://www.apple.com/tv-home/">Explore TV & Home</a>
                <a href="https://www.apple.com/apple-tv-4k/">Apple TV 4K</a>
                <a href="https://www.apple.com/homepod-2nd-generation/">
                  HomePod
                </a>
                <a href="https://www.apple.com/homepod-mini/">HomePod mini</a>
              </div>

              <div className="TvHome_two">
                <p>Shop TV & Home</p>
                <a href="https://www.apple.com/shop/buy-tv/apple-tv-4k">
                  Shop Apple TV 4K
                </a>
                <a href="https://www.apple.com/shop/buy-homepod/homepod">
                  Shop HomePod
                </a>
                <a href="https://www.apple.com/shop/buy-homepod/homepod-mini">
                  Shop HomePod mini
                </a>
                <a href="https://www.apple.com/shop/product/mw5g3am/a/siri-remote">
                  Shop Siri Remote
                </a>
                <a href="https://www.apple.com/shop/smart-home/accessories">
                  TV & Home Accessories
                </a>
              </div>

              <div className="TvHome_three">
                <p>More from TV & Home</p>
                <a href="https://support.apple.com/tv">Apple TV Support</a>
                <a href="https://support.apple.com/homepod?cid=gn-ols-homepod-psp-prodfly">
                  HomePod Support
                </a>
                <a href="https://www.apple.com/applecare/?filter=tv">
                  AppleCare fro Apple TV
                </a>
                <a href="https://www.apple.com/applecare/?filter=homepod">
                  AppleCare for HomePod
                </a>
                <a href="https://www.apple.com/apple-tv-app/">Apple TV app</a>
                <a href="https://www.apple.com/apple-tv-plus/">Apple TV+</a>
                <a href="https://www.apple.com/home-app/">Home app</a>
                <a href="https://www.apple.com/apple-music/">Apple Music</a>
                <a href="https://www.apple.com/siri/">Siri</a>
                <a href="https://www.apple.com/airplay/">AirPlay</a>
              </div>
            </div>
          </li>

          <li>
            <a href="#">Entertainment</a>
            <div className="Entertainment_dropdown">
              <div className="Entertainment_one">
                <p>Explore Entertainment</p>
                <a href="https://www.apple.com/services/">
                  Explore Entertainment
                </a>
                <a href="https://www.apple.com/apple-one/">Apple One</a>
                <a href="https://www.apple.com/apple-tv-plus/">Apple TV+</a>
                <a href="https://www.apple.com/apple-music/">Apple Music</a>
                <a href="https://www.apple.com/apple-arcade/">Apple Arcade</a>
                <a href="https://www.apple.com/apple-fitness-plus/">
                  Apple Fitness+
                </a>
                <a href="https://www.apple.com/apple-news/">Apple News+</a>
                <a href="https://www.apple.com/apple-podcasts/">
                  Apple Podcasts
                </a>
                <a href="https://www.apple.com/apple-books/">Apple Books</a>
                <a href="https://www.apple.com/app-store/">App Store</a>
              </div>

              <div className="Entertainment_two">
                <p>Support</p>
                <a href="https://support.apple.com/tv?cid=gn-ols-tvplus-psp-prodfly">
                  Apple TV+ Support
                </a>
                <a href="https://support.apple.com/music?cid=gn-ols-music-psp-prodfly">
                  Apple Music Support
                </a>
              </div>
            </div>
          </li>

          <li>
            <a href="#">Accessories</a>
            <div className="Accessories_dropdown">
              <div className="Accessories_one">
                <p>Shop Entertainment</p>
                <a href="https://www.apple.com/shop/accessories/all">
                  Shop All Accessories
                </a>
                <a href="https://www.apple.com/shop/mac/accessories">Mac</a>
                <a href="https://www.apple.com/shop/ipad/accessories">iPod</a>
                <a href="https://www.apple.com/shop/iphone/accessories">
                  iPhone
                </a>
                <a href="https://www.apple.com/shop/watch/accessories">
                  Apple Watch
                </a>
                <a href="https://www.apple.com/shop/vision/accessories">
                  Apple Vision Pro
                </a>
                <a href="https://www.apple.com/shop/airpods/accessories">
                  AirPods
                </a>
                <a href="https://www.apple.com/shop/smart-home/accessories">
                  TV & Home
                </a>
              </div>

              <div className="Accessories_two">
                <p>Explore Accessories</p>
                <a href="https://www.apple.com/shop/accessories/all/made-by-apple">
                  Made by Apple
                </a>
                <a href="https://www.apple.com/shop/accessories/all/beats-featured">
                  Beats
                </a>
                <a href="https://www.apple.com/airtag/">AirTag</a>
                <a href="https://www.apple.com/accessibility/assistive-technologies/">
                  Assistive Technologies
                </a>
              </div>
            </div>
          </li>

          <li>
            <a href="#">Support</a>
            <div className="Support_dropdown">
              <div className="Support_one">
                <p>Explore Support</p>
                <a href="https://support.apple.com/iphone?cid=gn-ols-iphone-psp-explore">
                  iPhone
                </a>
                <a href="https://support.apple.com/mac?cid=gn-ols-mac-psp-explore">
                  Mac
                </a>
                <a href="https://support.apple.com/ipad?cid=gn-ols-ipad-psp-explore">
                  iPad
                </a>
                <a href="https://support.apple.com/watch?cid=gn-ols-watch-psp-explore">
                  Watch
                </a>
                <a href="https://support.apple.com/apple-vision-pro?cid=gn-nav-vision-psp-explore">
                  Apple Vision Pro
                </a>
                <a href="https://support.apple.com/airpods?cid=gn-ols-airpods-psp-explore">
                  AirPods
                </a>
                <a href="https://support.apple.com/music?cid=gn-ols-music-psp-explore">
                  Music
                </a>
                <a href="https://support.apple.com/tv?cid=gn-ols-tv-psp-explore">
                  TV
                </a>
                <p>Explore Support</p>
              </div>

              <div className="Support_two">
                <p>Get Help</p>
                <a href="https://discussions.apple.com/welcome?cid=gn-com-community-lp-get_help">
                  Community
                </a>
                <a href="https://checkcoverage.apple.com/?cid=gn-ols-checkcoverage-lp-get_help&locale=en_US">
                  Check Coverage
                </a>
                <a href="https://www.apple.com/retail/geniusbar/">Genius Bar</a>
                <a href="https://support.apple.com/repair?cid=gn-ols-repair-lp-get_help">
                  Repair
                </a>
              </div>

              <div className="Support_three">
                <p>Helpful Topics</p>
                <a href="https://www.apple.com/applecare/">Get AppleCare</a>
                <a href="https://support.apple.com/apple-account?cid=gn-ols-appleaccount-psp-helpful_topics">
                  Apple Account and password
                </a>
                <a href="https://support.apple.com/billing?cid=gn-ols-billing-collection-helpful_topics">
                  Billing & Subscription
                </a>
                <a href="https://support.apple.com/accessibility?cid=gn-ols-accessibility-psp-helpful_topics">
                  Accessibility
                </a>
              </div>
            </div>
          </li>

          <li>
            <a href="#">
              <img src={search} />
            </a>
            <div className="Search_dropdown">
              <div className="sear_butt">
                <input type="text" placeholder="Search Apple.com " />
              </div>
              <br />
              <div className="Search_one">
                <p>Quick Links</p>
                <a href="https://www.apple.com/retail/">Find a Store</a>
                <a href="https://www.apple.com/apple-vision-pro/">
                  Apple Vision Pro
                </a>
                <a href="https://www.apple.com/airpods/">AirPods</a>
                <a href="https://www.apple.com/apple-intelligence/">
                  Apple Intelligence
                </a>
                <a href="https://www.apple.com/shop/trade-in">Apple Trade In</a>
              </div>
            </div>
          </li>


          <li>
            <a href="#">
              <img src={cart} />
            </a>
            <div className="cart_dropdown">
          <div className="cart_one">    
              <h1>Your Bag is empty</h1><br/>
              <p><Link to="/signin">Sign In</Link> to see if you have any saved items</p>
          </div><br/>
       <div className="cart_two">
          <p>My Profile</p>
          <a href="#">Orders</a>
          <a href="#">Your Saves</a>
          <a href="#">Account</a>
          <a href="#">Sign in</a>
        </div>
        </div>
          </li>


        </ul>
      </div>
    </>
  );
}
