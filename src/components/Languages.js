import React from 'react';

export default class Languages extends React.Component{
    render() {
        return  <div class="container">
        <div id="our-languages" class="our-languages fixed-bg">
                <div class="section-title">
                    Our Languages
                </div>
            
                <div class="row">
                    <div class="one columns">&nbsp;</div>
                    <div class="five columns">
                    <h1 class="uppercase">Speak with Confidence, Purpose and Flair</h1>
                    </div>
                </div>

                <div class="row vertical-margin">
                    <div class="one columns">&nbsp;</div>
                    <div class="three columns">
                        We currently offer two courses to fit your needs.
                    </div>
                </div>

                <div class="row extra-top-margin">
                    <div class="two columns"> &nbsp; </div>
                    <div class="course-card english-card four columns">
                        <h2 class="uppercase">English</h2>
                        <p>
                        Learn conversational English in a welcoming, fun environment.
                        </p>
                        <a href="/english" class=" button uppercase language-button">Join Now</a>
                    </div>
                    <div class="course-card mandarin-card four columns">
                        <h2 class="uppercase">Mandarin</h2>
                        <p>
                        Learn conversational Mandarin in a welcoming, fun environment.
                        </p>
                        <a href="/mandarin" class=" button uppercase language-button">Join Now</a>
            
                    </div>
                </div>
            </div>
            </div>
        
        
            
    }
}

