import React from 'react';

export default class ResponsiveNavbar extends React.Component{
    constructor(props){
        super(props);
    }
    

    render() {
      return (<div class="responsive-navbar">
                <ul>
                    <li class="selected"><a href="/">What We Do</a></li>  
                    <li class=""><a href="/about-us">Who We Are</a></li>
                    <li class="languages"><a href="/#our-languages">Languages</a></li>
                </ul>
    </div>
  
  );
    }
}