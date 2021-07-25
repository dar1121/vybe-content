import React from 'react';

export default class Whoweare extends React.Component{

    constructor(props) {
        super(props);
        this.valueOne = this.valueOne.bind(this);
        this.valueTwo = this.valueTwo.bind(this);
        this.valueThree = this.valueThree.bind(this);

    }
    valueOne = () => {
       
        let chosenvalue = document.getElementsByClassName('chosen-value');
        chosenvalue[0].innerHTML = 
                        '<br/> <h1 class="uppercase">Value 1</h1> <br/> <p>We prize people that are not afraid to be who they are. </p>';
                        ;
        let firstvalue = document.getElementsByClassName('value-1');
        
        firstvalue[0].classList.add('chosen');
        let secondvalue = document.getElementsByClassName('value-2');
        if (secondvalue[0].classList.contains('chosen')) {
            secondvalue[0].classList.remove('chosen')
        }
        let thirdvalue = document.getElementsByClassName('value-3');
        if (thirdvalue[0].classList.contains('chosen')) {
            thirdvalue[0].classList.remove('chosen')
        }
                   
       }
    valueTwo = () => {
        
        let chosenvalue = document.getElementsByClassName('chosen-value');
        chosenvalue[0].innerHTML = 
                        '<br/> <h1 class="uppercase">Value 2</h1> <br/> <p>We prize people that are not afraid to be who they are. </p>';
                        ;
                    
        let secondvalue = document.getElementsByClassName('value-2');
        secondvalue[0].classList.add('chosen')
        let firstvalue = document.getElementsByClassName('value-1');
        if (firstvalue[0].classList.contains('chosen')) {
            firstvalue[0].classList.remove('chosen')
        }
        let thirdvalue = document.getElementsByClassName('value-3');
        if (thirdvalue[0].classList.contains('chosen')) {
            thirdvalue[0].classList.remove('chosen')
        }
           
       }
    valueThree = () => {
        
        let chosenvalue = document.getElementsByClassName('chosen-value');
        chosenvalue[0].innerHTML = 
                        '<br/> <h1 class="uppercase">Value 3</h1> <br/> <p>We prize people that are not afraid to be who they are. </p>';
                        ;
        let thirdvalue = document.getElementsByClassName('value3');
        thirdvalue[0].classList.add('chosen')
        let secondvalue = document.getElementsByClassName('value2');
        if (secondvalue[0].classList.contains('chosen')) {
            secondvalue[0].classList.remove('chosen')
        }
        let firstvalue = document.getElementsByClassName('value1');
        if (firstvalue[0].classList.contains('chosen')) {
            firstvalue[0].classList.remove('chosen')
        }
                       
       }

    render() {
        return <div class="container">
        
        <div class="who-we-are1 fixed-bg">
        
        <div class="row">
            <div class="one columns"> &nbsp; </div>
            <div class="six columns extra-top-margin">
                <h1> This is a statement about the group of people who brought the VYBE vision to life. </h1>
            </div>
        </div>

        <div class="row vertical-margin">
        <div class="one columns"> &nbsp; </div>
        <div class="three columns">
            <p>
            This paragraph should give a glimpse into what the people behind VYBE do and what drives them to do it.
            </p>
        </div>

        <div class="three columns">
            <p>
            If there is a longer about me text, that can be included in a link below. 
            </p>
            <br/>
            <a href=""><h3>Read More</h3></a>
        </div>
        </div>
        
        </div>
        
        <div class="our-story fixed-bg">
            <div class="section-title">
            Our Story
            </div>

            <div class="row">
                <div class="one columns"> &nbsp;</div>
                <div class="four columns">
                    <img class="u-max-full-width" src="/assets/images/Whoweare-img1.png"></img>
                </div>
                <div class="one columns"> &nbsp;</div>
                <div class="five columns extra-top-margin">
                <p>
                This is a story about how VYBE was founded. Try to craft this into a narrative and show, not tell why VYBE focuses on what they do.
                </p>
                <br/><br/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <br/><br/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <br/><br/>
                </div>
            </div>
        </div>
        

        <div class="our-values">
        
            <div class="section-title">
                Our Values
            </div>
        
            <div class="row extra-top-margin">
            
                <div class="one columns">&nbsp;</div>
                <div class="four columns">
                    <img class="u-max-full-width" src="/assets/images/Value_img1.png"></img>
                </div>
                <div class="six columns our-values-content">
                    <a class="value-1 value-option chosen" onClick={this.valueOne}>Authenticity</a>
                    <a class="value-2 value-option" onClick={this.valueTwo}>Community</a>
                    <a class="value-3 value-option" onClick={this.valueThree}>Integrity</a>
                    <div class="chosen-value">
                        <br/>
                        <h1 class="uppercase">Value 1</h1>
                        <br/>
                        <p>We prize people that are not afraid to be who they are. </p>
                    </div>
                </div>
                
            

            </div>
        </div>
        
        <div class="open-positions-cta">
            <div class="open-positions-circle">
                <div class="open-positions-text">
                    <h1 class="op-question teal uppercase">Does This Sound Like You?</h1>
                    <br/>
                    <p class="op-p">We are currently looking for like-minded individuals to join the growing VyBE team.</p>
                    <br/>
                    <a href="/careers" class="op-button button uppercase">See Our Open Positions</a>
                </div>
            </div>
        
        </div>
        
        </div>

        
        
    }
}