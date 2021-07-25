import React from 'react';


export default class Footer extends React.Component{
    render() {
        return  <div class="footer row ">
        
            <div class="three columns">

                <div class="footer-block">
                    <a href="/">What We Do</a>
                </div>
            
                <div class="footer-block">
                    <a href="/about-us">Who We Are</a>
                </div>

                <div class="footer-block">
                    <a href="/english">English Course</a>
                </div>

                <div class="footer-block">
                    <a href="/mandarin">Mandarin Course</a>
                </div>
            </div>

            <div class="three columns">
                
            <div class="footer-block">
                <a href="/careers">Careers</a>
            </div>

            <div class="footer-block">
                <a href="/faq">FAQ</a>
            </div>


            <div class="footer-block">
                <a href="/tos">Terms & Conditions</a>
            </div>

            
        
            </div>

            <div class="three columns "> 
            <div class="footer-block">
                Phone
            </div>

            <p class="footer-one-line-p"> +44 (444) 444 4444 </p>
            
            <div class="footer-block">
                Address
            </div>

            <p class="footer-p">
                23/6 Moo 8,<br/>
                Soi Wattana,<br/>
                Rachaprarop Road<br/>
                Bangkapi<br/>
                Bangkok 10800
            </p>
            </div>

            <div class="three columns ">
            <div class="footer-block">
                Inquiries
            </div>

            <p class="footer-one-line-p">hi@vybe.co </p>
            
            <div class="footer-block">
                Follow Us
            </div>

            <div class="footer-block">
                (Links here)
            </div>

            </div>
            
      </div>
        
    }
}