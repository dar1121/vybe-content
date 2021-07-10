import React from 'react';
import classnames from "classnames";



export default class Header extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: false
        };
      }
    
      // Adds an event listener when the component is mount.
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      // Hide or show the menu.
      handleScroll = () => {
        const { prevScrollpos } = this.state;
        
        const currentScrollPos = window.pageYOffset;
        
        const visible = prevScrollpos > currentScrollPos && prevScrollpos > 100;
        console.log(prevScrollpos, currentScrollPos, visible);
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };

    render() {
        return <div>
        <div class="hero-navbar">
           <ul>
           <li class="languages">
             <a href="/#our-languages">Languages</a>
           </li>

           <li>
             <a href="/about-us">Who We Are</a>
           </li>

           <li class="selected">
             <a href="/">What We Do</a>
           </li>
           
         </ul>
           </div>
        <div class="header">
        <nav  className={classnames("navbar", {"navbar--hidden": !this.state.visible})}>

      
       
          <ul>
            <li class="languages">
              <a href="/#our-languages">Languages</a>
            </li>

            <li>
              <a href="/about-us">Who We Are</a>
            </li>

            <li class="selected">
              <a href="/">What We Do</a>
            </li>
            
          </ul>
          
      </nav>
        </div>
        </div>
    }
}