import React from 'react';
import LanguageSelector from './Languageselector'
import { Text, LanguageContext } from '../context/Language';



export default class Footer extends React.Component{
    render() {
        return  <div class="footer row ">
        
            <div class="three columns">

                <div class="footer-block">
                    <a href="/"><Text tid="naviwhatwedo" /></a>
                </div>
            
                <div class="footer-block">
                    <a href="/about-us"><Text tid="naviwhoweare" /></a>
                </div>

                <div class="footer-block">
                    <a href="/english"><Text tid="navienglish" /></a>
                </div>

                <div class="footer-block">
                    <a href="/chinese"><Text tid="navichinese" /></a>
                </div>
            </div>

            <div class="three columns">
                
            <div class="footer-block">
                <a href="/careers"><Text tid="navicareers" /></a>
            </div>

            <div class="footer-block">
                <a href="/faq"><Text tid="navifaq" /></a>
            </div>


            <div class="footer-block">
                <a href="/tos"><Text tid="navitos" /></a>
            </div>

            <div class="footer-block">
                
            </div>
        
            </div>

            <div class="three columns "> 
            <div class="footer-block">
                <Text tid="phone" />
            </div>

            <p class="footer-one-line-p"><Text tid="phonecontent" /></p>
            
            <div class="footer-block">
                Address
            </div>

            <p class="footer-p">
            <Text tid="addressline1" /><br/>
            <Text tid="addressline2" /><br/>
            <Text tid="addressline3" /><br/>
            <Text tid="addressline4" /><br/>
            <Text tid="addressline5" />
            </p>
            </div>

            <div class="three columns ">
            <div class="footer-block">
            <Text tid="inquiries" />
            </div>

            <p class="footer-one-line-p">
            <Text tid="inquiriescontent" /> </p>
            
            <div class="footer-block">
            <Text tid="followus" />
            </div>

            <div class="footer-block">
                <a class="footer-imglink" href="https://www.facebook.com/go.vybe">
                    <img src="/assets/images/facebook-square-brands.png" class="footer-img" />
                </a>
                <a class="footer-imglink" href="https://www.instagram.com/go.vybe/">
                    <img src="/assets/images/instagram-square-brands.png" class="footer-img" />
                </a>
                <a class="footer-imglink" href="https://www.linkedin.com/company/vybe-education">
                    <img src="/assets/images/linkedin-brands.png" class="footer-img" />
                </a>
            </div>

            </div>
            
      </div>
        
    }
}