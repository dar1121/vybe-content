import React from 'react';
import classnames from "classnames";
import ResponsiveNavbar from "./ResponsiveNavbar"


export default class Header extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: false,
          clicked: false
        };
        this.responsiveNavbar = this.responsiveNavbar.bind(this);

      }
    
      // Adds an event listener when the component is mount.
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }

      componentDidUpdate(){
      }
    
      // Hide or show the menu.
      handleScroll = () => {
        const { prevScrollpos } = this.state;
        
        const currentScrollPos = window.pageYOffset;
        
        const visible = prevScrollpos > currentScrollPos && prevScrollpos > 100;
        
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };

      responsiveNavbar(){
        this.setState(({ clicked }) => ({ clicked: !clicked }));

        
      }

   

    render() {
        return <div>
          <div class="hero-navbar">
            {this.props.children}
            <div class="icon" onClick={this.responsiveNavbar}></div>
              {this.state.clicked ? <ResponsiveNavbar/> : null}
            
          </div>
          <div class="header">
            <nav  className={classnames("navbar", {"navbar--hidden": !this.state.visible})}>
              {this.props.children}
              
            </nav>
            
          </div>
          
        </div>
    }
}


