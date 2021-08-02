import React from 'react';
import { Text, LanguageContext } from '../context/Language';
import Header from './Header';



export default class Whoweare extends React.Component{

    constructor(props) {
        super(props);
        this.valueOne = this.valueOne.bind(this);
        this.valueTwo = this.valueTwo.bind(this);
        this.valueThree = this.valueThree.bind(this);

    }
    valueOne = () => {
       
        let chosenvalue = document.getElementsByClassName('chosen-value');
        const data = require('../languages/en.json');     
        let text = '<br/> <h1 class="uppercase">' + data.aboutValue1 + '</h1> <br/> <p>' + data.aboutValue1P + '</p>'
        chosenvalue[0].innerHTML = text;
                        
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
        const data = require('../languages/en.json');     
        let text = '<br/> <h1 class="uppercase">' + data.aboutValue2 + '</h1> <br/> <p>' + data.aboutValue2P + '</p>'
        chosenvalue[0].innerHTML = text;
                        
                    
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
        const data = require('../languages/en.json');
        let text = '<br/> <h1 class="uppercase">' + data.aboutValue3 + '</h1> <br/> <p>' + data.aboutValue3P + '</p>';
        chosenvalue[0].innerHTML = text;                        ;
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
        return <div>
        <Header>
                <ul>
                <a href="/#our-languages"><li class="languages"><Text tid="navilanguages" /></li></a>
                <a href="/about-us"><li class="selected"><Text tid="naviwhoweare" /></li></a>
                <a href="/"><li class=""><Text tid="naviwhatwedo" /></li>  </a>
                </ul>
            </Header>
            <div class="container">
        
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
        </div>
        
        
    }
}