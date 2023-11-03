import Companies from '../Companies'
import Learn from '../Learn'
import Hosts from '../Hosts'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="main-description">
      <div className="heading-card">
        <h1 className="main-heading">
          "Some people call this artificial intelligence, but the reality is
          this technology will enhance us. So, instead of artificial
          intelligence, I think we’ll augment our intelligence” - Ginni Rometty
          – Former CEO & President, IBM
        </h1>
      </div>
    </div>
    <div className="image-container">
      <div>
        <img
          src="https://resources.commlabindia.com/hs-fs/hubfs/webinars/corporate-training-with-ai-banner-image.png?width=350&height=489&name=corporate-training-with-ai-banner-image.png"
          alt="abc"
          className="home-image"
        />
      </div>
      <div className="details-card">
        <h2 className="head-2"> The Top Trending Topic of the Year </h2>
        <h1 className="head-1">
          Unleashing the Potential of AI in Corporate Training{' '}
        </h1>
        <hr className="line" />
        <ul className="lists-items ">
          <li className="item">
            Learn how AI is helping corporates upskill and reskill workforce
          </li>
          <li className="item">
            Walk away with tips, tools, and resources to get started with
            AI-empowered training
          </li>
        </ul>
        <div className="address">
          <p>JOIN DR RK Prasad, Shalini, Rajesh LIVE</p>
        </div>
        <p className="details-venue">Tuesday, January 09, 2024</p>
        <p className="details-venue"> 11 AM Eastern | 8 AM Pacific </p>
        <p className="details-venue"> Duration: 90 Minutes </p>
        <p>
          <span className="price"> $997 VALUE </span>
          <span className="text">FREE!</span>
        </p>
        <button className="secure-button" type="button">
          SECURE YOUR SEAT
        </button>
      </div>
    </div>
    <Companies />
    <Learn />
    <Hosts />
  </div>
)

export default Home
