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
                VYBE arose from our desire to create a language learning experience that is both current and engaging.
                </h1>
            </div>
        </div>

        <div class="row vertical-margin">
        <div class="one columns"> &nbsp; </div>
        <div class="three columns">
            <p>
            At vybe, many of our teachers have lived abroad and understand the difficulties and frustrations of learning a new language. 
            <br/><br/>
            Learning a language takes time and patience. It is often easy to give up learning a foreign language when studying starts to get boring and our lives start to get busy. 

            </p>
        </div>

        <div class="three columns">
            <p>
            That is why we have curated and designed a curriculum that goes beyond what is covered in textbooks, bringing in topics that are most relevant and engaging in the lives of our students. 
            </p>
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
                It all started with our own experience learning foreign languages. We spent 5 years learning Chinese through apps and attending classes, yet when we went to China, our minds blanked and we could only stutter and stammer as we spoke to the locals. We realized that more than 80% of what we learnt from textbooks and classes were inadequate. Despite the initial hiccup, we did not give up our passion for learning, and challenged ourselves by staying in Shanghai for 6 months. Through living, conversing and immersing ourselves with the local community, we gradually gained confidence and fluency in using Chinese.                </p>
                <br/><br/>
                <p>
                Our language learning journey taught us that one of the most effective ways to master a new language is by using it in a foreign country. However, the act of immersion does not guarantee a smooth language learning journey. We still have to be proactive in reaching out and actively communicating with others in order to grow. During our stay in Shanghai, we met a British teacher who had lived in China for over 10 years, yet he could not speak a word of Chinese. Why? Because he never bothered to speak Chinese when shopping on Nanjing Road or dining at Xin Tian Di. 
                </p>
                <br/><br/>
                <p>
                We then realized that language learning is not only about immersion, but more importantly, it is also about taking advantage of touch points to communicate in a foreign language. For this reason, we hope to disrupt the way that languages are traditionally taught by bringing the overseas immersion experience into the local context of Southeast Asia and providing students with opportunities to speak up.
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
                    <h1 class="op-question teal uppercase">Do our mission and values resonate with you?</h1>
                    <br/>
                    <p class="op-p">We are currently looking for like-minded individuals to join the growing vybe team. </p>
                    <br/>
                    <a href="/careers" class="op-button button uppercase">See Our Open Positions</a>
                </div>
            </div>
        
        </div>
        
        </div>

        
        
    }
}