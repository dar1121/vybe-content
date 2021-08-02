import React from 'react';
import { Text, LanguageContext } from '../context/Language';
import Header from './Header';




export default class Applicationform extends React.Component{

    render() {
        return <div><div class="hero-section">
           <div class="yellow-rect"></div>
        </div>
        <Header>
           <ul>
                <a href="/#our-languages"><li class="languages"><Text tid="navilanguages" /></li></a>
                <a href="/about-us"><li class=""><Text tid="naviwhoweare" /></li></a>
                <a href="/"><li class="selected"><Text tid="naviwhatwedo" /></li></a>
           </ul>
           
       </Header></div>
    }
}

