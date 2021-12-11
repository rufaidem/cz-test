import * as React from "react"
import { useEffect, useState } from "react";
import "../css/index.css";

import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Particles from "react-particles-js"

if (typeof window !== `undefined`) { // or typeof document !== 'undefined'
  // your code that uses global objects here
  const cards = document.querySelectorAll(".box");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
      const y = ((e.clientY - rect.top) / card.clientHeight) * 100;

    card.style.background = `radial-gradient(circle closest-corner
      at ${x}% ${y}%,
      var(--ripple-color), var(--bg-color))`;
    });

    card.addEventListener("mouseleave", (event) => {
      card.style.removeProperty("background");
    });
  });
}



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
                <a href="#">                  
                  <StaticImage src="../images/logo2.png" class="logo" className="logo" alt="czodiac logo"/>  
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
                    <a href="#pools" onClick={()=>setIsMenuOpen(false)} class="nav__link">                       
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

        <div className="item ">
          <div id="home" className="jumpMarker" />
          <h1 > A next generation Defi 2.0 Technologies on BSC Network</h1>
          <br/>
          
          <br/><br/>
          <p>
          CZodiac uses game theory to develop novel Defi 2.0 technologies that protect farmers and stakers.
            <br/><br/>
          </p>

          <br/><br/>

          <div className="btn-redirect">
            <div className="btn"><a className="one" target="_blank" href="https://czodiac.gitbook.io/czodiac-litepapper/"><b>Whitepaper</b></a></div>
            <div className="btn"><a className="two" href="http://app.czodiac.com"><b>launch app</b></a></div>
          </div>
          <br/><br/>
        </div>

        <div class="feature">
        <div id="pools" className="jumpMarker" />
          <h2> Features </h2>
          <span class="bar"></span>

          <div class="box-container">

            <div class="box">                       
                <a href="#"><h3>Exotic Farms</h3> </a>
            </div>

            <div class="box">   
                 
              <a href="#"> <h3>Chrono Pools</h3>   </a>  
            </div>

            <div class="box">     
                
              <a href="#"> <h3>Stim Farms</h3>  </a>   
            </div>

            <div class="box">               
               
              <a href="#"><h3>Antidump Vaults</h3>  </a>      
            </div>

            <div class="box">   
              
              <a href="#"><h3>Farms v1</h3> </a>
            </div>

            <div class="box">   
               
              <a href="#"> <h3>Pools v1</h3> </a>
            </div>

            <div class="box">   
              
              <a href="#"><h3>Exempt Borrow</h3> </a>
            </div>

            <div class="box">   
             
              <a href="#"> <h3>Scorch Peg</h3>   </a>
            </div>

            <div class="box">   
              
              <a href="#"> <h3>Czodiac Nft</h3></a>
            </div>

          </div>

        </div>
        
        <div class="farm">
          <div id="farm" className="jumpMarker" />
          <h2> Farm 2.0 </h2>
          <StaticImage className="image" src="../images/slider.jpg" alt="czfarm" />
          
          
          <div class="center">
            <div class="traineeship">
              <div class="process-row">
                <div class="activity animate-from-bottom__0">
                  <div class="relative-block">
                    <div class="activity-icon">
                      <img class="whiteline" alt="An image" src="https://i.ibb.co/s3znYkF/Picture4.png"/>
                    </div>
                    <div class="inactive">
                      <div class="title">Stim Farms </div>
                    </div>
                    <div class="active">
                      <div class="title">Stim Farms</div>
                      <div class="sub-title">
                      Users deposit Liquidity (LP) tokens into Stim Farms during a 24 hour window. After the window expires, rewards vest for 1 week. At the end of the week, CZF is distributed to the depositors equal to the value of the LP plus a high APR.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="activity animate-from-bottom__1">
                  <div class="relative-block">
                    <div class="activity-icon">
                      <img class="whiteline" alt="An image" src="https://i.ibb.co/89r2n9x/Picture2.png" alt="ad-operations-process-strategy-activation"/>
                    </div>
                    <div class="inactive">
                      <div class="title">Exotic Farms </div>
                    </div>
                    <div class="active">
                      <div class="title">Exotic Farms</div>
                      <div class="sub-title">
                        Burn CZF to earn rewards each block for the vesting period. Rewards can be fast forwarded from the future at a discount. APR is set at a base level until enough deposits are collected at which point the APR begins to fall.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="activity animate-from-bottom__2">
                  <div class="relative-block">
                    <div class="activity-icon">
                      <img class="whiteline" alt="An image" src="https://i.ibb.co/JqZQxPB/Picture3.png"/>
                    </div>
                    <div class="inactive">
                      <div class="title">Chrono Pools</div>
                    </div>
                    <div class="active">
                      <div class="title">Chrono Pools</div>
                      <div class="sub-title">
                        Exotic Farms are a Defi 2.0 farming system that protects depositors from Impermanent Loss while providing high APR. Deliver liquidity tokens (LP) to earn vesting CZF. The amount of vesting CZF is equal to the value of the LP in CZF plus interest. 
                      </div>
                    </div>
                  </div>
                </div>   
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

        <div class="partner">
          <div id="partner" className="jumpMarker" />
          <h2> Our Partners</h2>
          <div class="paragraph--type--card-narrow-row">
        	  <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="ample-swap" src="https://i.ibb.co/sFjNpmN/ample-swap.png" />
              </div>              
            </div>

	          <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <img alt="auto-shark" src="https://i.ibb.co/k3YR5Tf/auto-shark.png" />
              </div>              
            </div>

	          <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="baby swap" src="https://i.ibb.co/ZGSGWXJ/babyswap.png" />
              </div>              
	          </div>

          	<div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="beefy finance" src="https://i.ibb.co/bbPmXfN/beefy-finance.png" />
              </div>  
	          </div>

            <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="berry data" src="https://i.ibb.co/jJcSpv6/berry-data.png" />
              </div>  
	          </div>

            <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="caffes swap" src="https://i.ibb.co/3dwYfVL/caffes-swap.png" />
              </div>             
	          </div>
            
            <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="coin wind" src="https://i.ibb.co/kcpbT5P/coin-wind.png" />
              </div>             
	          </div>

            <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="framagedon" src="https://i.ibb.co/xhf5r0Y/farmagedon.png" />
              </div>  
	          </div>

          
        	  <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="game one network" src="https://i.ibb.co/DWNtKxN/Game1-Network.png" />
              </div>              
            </div>

	          <div class="card-narrow">
	   	        <div class="card-narrow-image">
                <img alt="gifted hands" src="https://i.ibb.co/B4k05vw/Gifted-Hands.png" />
              </div>              
            </div>

	          <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="guitar swap" src="https://i.ibb.co/85N9ztg/Guitar-Swap.png" />
              </div>              
	          </div>

          	<div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="infinity one" src="https://i.ibb.co/dcWgB1w/infinity-one.png" />
              </div>  
	          </div>

            <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="latteswap" src="https://i.ibb.co/7Kx0d8b/latteswap.png" />
              </div>  
	          </div>

            <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="main street" src="https://i.ibb.co/M8949zS/Picture1.png" />
              </div>             
	          </div>
            
            <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="nft mall" src="https://i.ibb.co/mX5Dnq7/nftmall.png" />
              </div>             
	          </div>

            <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="polkarhino" src="https://i.ibb.co/p3SgdTZ/polkarhino.png" />
              </div>  
	          </div>
            
            
            <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="singular" src="https://i.ibb.co/RSnpMzZ/Picture3.png" />
              </div>  
	          </div>
            
            <div class="card-narrow">
	   	        <div class="card-narrow-image">
               <img alt="treassurland" src="https://i.ibb.co/1QLfMsT/Picture2.png" />
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