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
                    <a href="/mandarin"><Text tid="navichinese" /></a>
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
            <Text tid="addresline1" /><br/>
            <Text tid="addresline2" /><br/>
            <Text tid="addresline3" /><br/>
            <Text tid="addresline4" /><br/>
            <Text tid="addresline5" />
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
                (Links here)
            </div>

            </div>
            
      </div>
        
    }
}