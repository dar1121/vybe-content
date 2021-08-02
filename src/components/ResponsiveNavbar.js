import React from 'react';
import { Text, LanguageContext } from '../context/Language';


export default class ResponsiveNavbar extends React.Component{
    constructor(props){
        super(props);
    }
    

    render() {
      return (<div class="responsive-navbar">
                <ul>
                    <a href="/"><li class="selected"><Text tid="naviwhatwedo" /></li>  </a>
                    <a href="/about-us"><li class=""><Text tid="naviwhoweare" /></li></a>
                    <a href="/#our-languages"><li class="languages"><Text tid="navilanguages" /></li></a>
                </ul>
    </div>
  
  );
    }
}