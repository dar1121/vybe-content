import React from 'react';
import { Text, LanguageContext } from '../context/Language';


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
                        '<br/> <h1 class="uppercase">Relevance</h1> <br/> <p>We strive to constantly evolve and update our curriculum to ensure that our students learn topics that are beyond textbook scenarios.</p>';
                        
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
                        '<br/> <h1 class="uppercase">Community</h1> <br/> <p>Learning is always more fun in a group. We believe that having friends who share the same passion in learning new languages will motivate and encourage us to never give up.</p>';
                        
                    
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
                        '<br/> <h1 class="uppercase">Adventure</h1> <br/> <p>	Learning a new language is difficult, but it should never be boring. We believe in giving our students opportunities to speak out and learn to express themselves in a new language.</p>';
                        ;
        let thirdvalue = document.getElementsByClassName('value-3');
        thirdvalue[0].classList.add('chosen')
        let secondvalue = document.getElementsByClassName('value-2');
        if (secondvalue[0].classList.contains('chosen')) {
            secondvalue[0].classList.remove('chosen')
        }
        let firstvalue = document.getElementsByClassName('value-1');
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
                <h1> 
                    <Text tid="aboutHeading" />
                </h1>
            </div>
        </div>

        <div class="row vertical-margin">
        <div class="one columns"> &nbsp; </div>
        <div class="three columns">
            <p>
            <Text tid="aboutP1" />
            <br/><br/>
            <Text tid="aboutP2" />
            </p>
        </div>

        <div class="three columns">
            <p>
            <Text tid="aboutP3" />            </p>
        </div>
        </div>
        
        </div>
        
        <div class="our-story fixed-bg">
            <div class="section-title">
            <Text tid="aboutOurStory" />
            </div>

            <div class="row">
                <div class="one columns"> &nbsp;</div>
                <div class="four columns">
                    <img class="u-max-full-width" src="/assets/images/Whoweare-img1.png"></img>
                </div>
                <div class="one columns"> &nbsp;</div>
                <div class="five columns extra-top-margin">
                <p>
                <Text tid="aboutOurStoryP1" />
                </p>
                <br/><br/>
                <p>
                <Text tid="aboutOurStoryP2" />                </p>
                <br/><br/>
                <p>
                <Text tid="aboutOurStoryP3" />                </p>
                <br/><br/>
                </div>
            </div>
        </div>
        

        <div class="our-values">
        
            <div class="section-title">
                <Text tid="aboutOurValues" />
            </div>
        
            <div class="row extra-top-margin">
            
                <div class="one columns">&nbsp;</div>
                <div class="four columns">
                    <img class="u-max-full-width" src="/assets/images/Value_img1.png"></img>
                </div>
                <div class="six columns our-values-content">
                    <a class="value-1 value-option chosen" onClick={this.valueOne}>Relevance</a>
                    <a class="value-2 value-option" onClick={this.valueTwo}>Community</a>
                    <a class="value-3 value-option" onClick={this.valueThree}>Adventure</a>
                    <div class="chosen-value">
                        <br/>
                        <h1 class="uppercase">Relevance</h1>
                        <br/>
                        <p>We strive to constantly evolve and update our curriculum to ensure that our students learn topics that are beyond textbook scenarios.</p>
                    </div>
                </div>
                
            

            </div>
        </div>
        
        <div class="open-positions-cta">
            <div class="open-positions-circle">
                <div class="open-positions-text">
                    <h1 class="op-question teal uppercase"><Text tid="aboutOPQ" /></h1>
                    <br/>
                    <p class="op-p"><Text tid="aboutOPP" /></p>
                    <br/>
                    <a href="/careers" class="op-button button uppercase"><Text tid="aboutOPCTA" /></a>
                </div>
            </div>
        
        </div>
        
        </div>

        
        
    }
}