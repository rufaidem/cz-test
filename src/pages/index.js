import * as React from "react"
import { useEffect, useState } from "react";
import "../css/index.css"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Particles from "react-particles-js"

const particlesParams = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 2500
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: false
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}

// markup
const IndexPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (<div>
    <main >
          <header class="header" id="header">
            <nav class="nav container">
              <div class="nav_logo">
                <a href="#" >                  
                  <StaticImage src="../images/logo1.png" class="logo" className="logo" alt="czodiac logo" />  
                </a>
              </div>                                                         
              <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                  <li class="nav__item">
                    <a href="#home" onClick={()=>setIsMenuOpen(false)} class="nav__link ">                             
                      <i class="fas fa-home nav__icon"></i>
                      <span class="nav__name">Czodiac</span>
                    </a>
                  </li>      
                  <li class="nav__item">
                    <a href="#farm" onClick={()=>setIsMenuOpen(false)} class="nav__link">                                
                      
                      <i class="fas fa-tractor nav__icon"></i>
                      <span class="nav__name">Farm&nbsp;2.0</span>
                    </a>
                  </li>
                  <li class="nav__item">
                    <a href="#Czfarm" onClick={()=>setIsMenuOpen(false)} class="nav__link">                       
                    <i class="fas fa-coins nav__icon"></i>
                      <span class="nav__name">cztoken</span>
                    </a>
                  </li>
                  <li class="nav__item">
                    <a href="#OurTeam" onClick={()=>setIsMenuOpen(false)} class="nav__link">
                      <i class="fas fa-user-friends nav__icon"></i>
                      <span class="nav__name">Team</span>
                    </a>
                  </li>
                  
               </ul>
              </div>
              <img src="assets/img/perfil.png" alt="" class="nav__img" />
            </nav>
          </header>
      <div className="content">

        <div className="item">
          <div id="home" className="jumpMarker" />
          <h1 > Defi 1.0 + Defi 2.0 = CZfarm </h1>
          <br/>
          
          <br/><br/>
          <p>
          CZodiac uses game theory to develop novel Defi 2.0 technologies that protect farmers and stakers.
            <br/><br/>
          </p>

          <br/><br/>

          <div className="btn-redirect">
            <div className="btn"><a className="one" target="_blank" href="https://czodiac.gitbook.io/czodiac-litepapper/"><b>Whitepaper</b></a></div>
            <div className="btn"><a className="two" href="http://app.czodiac.com"><b>Farm &amp; Pool</b></a></div>
          </div>
          <br/><br/>
        </div>

        <div class="pol">
          <h2> Protocol Owned Liquidity </h2>
          <div class="paragraph--type--card-row">
            <div class="card">
              <div class="card-content">
                <p>
                  protects depositors from Impermanent Loss by using Liquidity.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <p>
                  The protocol itself own the LP tokens, not the user or creator.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <p>
                  providing high APR without loosing its value due to Lp withdraw.
                </p>
              </div>
            </div>
          </div>
        </div>
        

        <div class="feature">
        <div id="farm" className="jumpMarker" />
        
        <StaticImage className="image" src="../images/czfarm.jpg" alt="czfarm" />
        <h2> Farm 2.0 </h2>
          <div class="paragraph--type--card-row">
            <div class="card">
              <div class="card-image">
                <StaticImage src="../images/czfarm.jpg" alt="stim farms" />
              </div>
              <div class="card-content">
                <h3> <a href=""> Stim Farms </a></h3>
                <p>
                Users deposit Liquidity (LP) tokens into Stim Farms during a 24 hour window. After the window expires, rewards vest for 1 week. At the end of the week, CZF is distributed to the depositors equal to the value of the LP plus a high APR.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-image"> 
                <StaticImage src="../images/czfarm.jpg" alt="stim farms" />
              </div>
              <div class="card-content">
                <h3><a href=""> Exotic Farms </a>  </h3>
                <p>
                Burn CZF to earn rewards each block for the vesting period. Rewards can be fast forwarded from the future at a discount. APR is set at a base level until enough deposits are collected at which point the APR begins to fall.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <StaticImage src="../images/czfarm.jpg" alt="stim farms" />
              </div>
              <div class="card-content">
                <h3><a href=""> Chrono Pools </a> </h3>
                <p>
                Exotic Farms are a Defi 2.0 farming system that protects depositors from Impermanent Loss while providing high APR. Deliver liquidity tokens (LP) to earn vesting CZF. The amount of vesting CZF is equal to the value of the LP in CZF plus interest. 
                </p>
              </div>
            </div>
          </div>
        </div>


        <div class="ourteam">
          <div id="OurTeam" className="jumpMarker" />
          <h2> Our Team</h2>
          <div class="paragraph--type--card-narrow-row">
        	  <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <StaticImage src="../images/admins/plastic 500x500.png" alt="Platic Digits" />
              </div>
              <div class="card-narrow-content">
                <h3>Plastic Digits</h3>
                
              </div>
            </div>
	          <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <StaticImage src="../images/admins/rayoshi 500x500.png" alt="rayoshi" />
              </div>
              <div class="card-narrow-content">
                <h3>Rayoshi </h3>
  		          
              </div>
            </div>
	          <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <StaticImage src="../images/admins/500x500.png" alt="icashy" />
              </div>
              <div class="card-narrow-content">
                <h3> icashy</h3>
                
              </div>
	          </div>
          	<div class="card-narrow">
	   	        <div class="card-narrow-image">
               <StaticImage src="../images/admins/sai 500x500.jpg" alt="Sai Portrait" />
              </div>
              <div class="card-narrow-content">
                <h3> sai</h3>
  		          
              </div>
	          </div>
          </div>
        </div>
        

        <footer className="social">          
            <div class="container">              
            <h4><a href="mailto:team@czodiac.com">team@czodiac.com</a></h4>
              <div class="row row-cols-1 row-cols-xl-5">
              <div class="col"><a href="https://twitter.com/zodiacs_c"><StaticImage src="../images/twitter.png" alt="twitter" /></a></div>
              <div class="col"><a href="https://discord.gg/FEpu3xF2Hb"><StaticImage src="../images/discord.png" alt="discord" /></a></div>
              <div class="col"><a href="https://czodiacs.medium.com/"><StaticImage src="../images/medium.png" alt="medium" /></a></div>
              <div class="col"><a href="https://github.com/chinese-zodiac/czodiac"><StaticImage src="../images/github.png" alt="github" /></a></div>
              <div class="col"><a href="https://t.me/CZodiacofficial"><StaticImage src="../images/telegram.png" alt="telegram" /></a></div>
            </div>
          </div>  
        </footer>

      </div>        
    </main>
      <div id="particles-js">
        <div>
          <Particles width="100%" height="100vh" params={particlesParams} style={{
            backgroundColor: "transparent",
            position: "absolute",
            width: "100%",
            height: "100%"
            
          }} />
        </div>
      </div>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>CZodiac - DeFi NFT Games on BSC</title>  
          <meta name="description" content= "Lucky portfolios with CZF, Chinese Zodiac NFTs and tokens, farming, defi, and games all on the BSC blockchain." />
          <meta name="robots" content= "index, follow" />
          <link rel="canonical" href="https://czodiac.com" />
          <meta property="og:title" content="CZodiac - DeFi NFT Games on BSC" />
          <meta property="og:image" content="../images/image6.jpg" />
          <meta property="og:description" content="Lucky portfolios with CZF, Chinese Zodiac NFTs and tokens, farming, defi, and games all on the BSC blockchain." />
          <meta property="og:url" content="https://czodiac.com" />
          <meta name="twitter:card" content="../images/image6.jpg" />
          <script src="https://kit.fontawesome.com/01310ff41a.js" crossorigin="anonymous"></script>
 
         
          <script src="https://bootstrapcreative.com/wp-bc/wp-content/themes/wp-bootstrap/codepen/bootstrapcreative.js?v=11"></script>
        </Helmet>
      </div>
    </div>
  )
}


export default IndexPage