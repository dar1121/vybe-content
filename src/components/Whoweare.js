import React from 'react';

export default class Whoweare extends React.Component{

    constructor(props) {
        super(props);
        this.valueOne = this.valueOne.bind(this);
        this.valueTwo = this.valueOne.bind(this);
        this.valueTwo = this.valueOne.bind(this);

    }
    valueOne = () => {
        chosenvalue = document.getElementsByClassName(chosen-value);
        chosenvalue.innerHTML = 
                        '<br/> <h1 class="uppercase">Value 1.</h1> <br/> <p>We prize people that are not afraid to be who they are. </p>';
                        ;
        firstvalue = document.getElementsByClassName(value1);
        firstvalue.classList.add(chosen)
        secondvalue = document.getElementsByClassName(value2);
        if (secondvalue.classList.contains(chosen)) {
            secondvalue.classList.remove(chosen)
        }
        thirdvalue = document.getElementsByClassName(value3);
        if (thirdvalue.classList.contains(chosen)) {
            thirdvalue.classList.remove(chosen)
        }
                   
       }
    valueTwo = () => {
        chosenvalue = document.getElementsByClassName(chosen-value);
        chosenvalue.innerHTML = 
                        '<br/> <h1 class="uppercase">Value 2.</h1> <br/> <p>We prize people that are not afraid to be who they are. </p>';
                        ;
                    
        secondvalue = document.getElementsByClassName(value2);
        secondvalue.classList.add(chosen)
        firstvalue = document.getElementsByClassName(value1);
        if (firstvalue.classList.contains(chosen)) {
            firstvalue.classList.remove(chosen)
        }
        thirdvalue = document.getElementsByClassName(value3);
        if (thirdvalue.classList.contains(chosen)) {
            thirdvalue.classList.remove(chosen)
        }
           
       }
    valueThree = () => {
        chosenvalue = document.getElementsByClassName(chosen-value);
        chosenvalue.innerHTML = 
                        '<br/> <h1 class="uppercase">Value 3.</h1> <br/> <p>We prize people that are not afraid to be who they are. </p>';
                        ;
        thirdvalue = document.getElementsByClassName(value3);
        thirdvalue.classList.add(chosen)
        secondvalue = document.getElementsByClassName(value2);
        if (secondvalue.classList.contains(chosen)) {
            secondvalue.classList.remove(chosen)
        }
        firstvalue = document.getElementsByClassName(value1);
        if (firstvalue.classList.contains(chosen)) {
            firstvalue.classList.remove(chosen)
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
                    <div class="value-1 value-option chosen" onclick={valueOne}>Authenticity</div>
                    <div class="value-2 value-option" onclick={valueTwo}>Community</div>
                    <div class="value-3 value-option" onclick={valueThree}>Integrity</div>
                    <div class="chosen-value">
                        <br/>
                        <h1 class="uppercase">Be true to you.</h1>
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