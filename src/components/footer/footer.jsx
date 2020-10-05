import React from 'react'
import "./footer.css";


const FooterSpot = () => {
    return (
  <div class="footerPage"> 
        <div id="footerblurb">
        <div id="footerblurb-inner">
        
           
            <div class="column">
                <h2><span>Help</span></h2>
                <a href="/contact">Contact Us</a>
                <a href="/feedback">Feedback</a>
                <a href="/about">About Us</a>
                <a href="/faqs">FAQs</a>
                
                
            </div>
            <div class="column">
                <h2><span>Pages</span></h2>
                <a href="/arcade">Arcade</a>
                <a href="/mysticbadge-play">Mystic Badges Game</a>
                <a href="/plantspagea">Select Level </a>
                <a href="/videos">Videos</a>
            </div>	
            
            <div class="clr"></div>
        </div>
    </div>
    <footer id="footer">
        <div id="footer-inner">
            <p>&copy; Copyright <a href="/home">Study PUP</a> &#124; <a href="/terms">Terms of Use</a> &#124; <a href="/privacy">Privacy Policy</a></p>
            <div class="clr"></div>
        </div>
    </footer>
</div>
   
    
    )
  }
  
  export default FooterSpot;

