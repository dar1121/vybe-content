import React from 'react';
import { Text, LanguageContext } from '../context/Language';



export default class Applicationform extends React.Component{

    render() {
        return <div class="hero-section">
           <div class="yellow-rect"></div>
           <Header>
           <ul>
               <li class="languages"><a href="/#our-languages"><Text tid="navilanguages" /></a></li>
               <li class=""><a href="/about-us"><Text tid="naviwhoweare" /></a></li>
               <li class="selected"><a href="/"><Text tid="naviwhatwedo" /></a></li>  
           </ul>
           
       </Header>
        </div>
    }
}

