import React from 'react';
import CollapsibleCurriculum from './CollapsibleCurriculum';
import Applicationform from './Applicationform';
import { init } from 'emailjs-com';
init("user_JjmLKCBJBxK1mSzjw7tMX");
import EscapeOutside from "react-escape-outside";
import { Text, LanguageContext } from '../context/Language';


export default class English extends React.Component{   
    constructor(props) {
        super(props);
        
        this.state = {
          apply : false,
          tiernumber : 0,
          price: 0,
          isOpen: false
        };
        this.setTier = this.setTier.bind(this);
        this.handleEscapeOutside = this.handleEscapeOutside.bind(this);
      };

    handleEscapeOutside() {
        this.setState({ apply: false });
        console.log(this.state.isOpen);
      }
      
      setTier(tiervalue, pricenumber) {
        this.setState(({ apply }) => ({ apply: !apply }));
        this.setState({ tiernumber:tiervalue});
        this.setState({ price:pricenumber});
      }
    render() {
        return <div class="container">
        <div class="learn-english fixed-bg">
            <div class="row">
                <div class="one columns">&nbsp;</div>
                <div class="six columns">
                    <h1 class="uppercase"><Text tid="englishHeading" /></h1>
                </div>
                </div>
                <div class="row">
                <div class="one columns">&nbsp;</div>
                <div class="four columns">
                <p class="vertical-margin">
                <Text tid="englishP" /></p>
                <ol class="strong">
                    <li><span><Text tid="englishBullet1" /></span></li>
                    <li><span><Text tid="englishBullet2" />g</span></li>
                    <li><span><Text tid="englishBullet3" /></span></li>
                </ol>
                <button class="language-button uppercase">
                <Text tid="englishButton" />
                </button>
                </div>
            </div>
            
        
        </div>
        
        <div class="why-choose-vybe">
            <div class="row">
                <div class="four columns">
                    &nbsp;
                </div>
                <div class="four columns">
                <h1 class="aligncenter uppercase why-choose-vybe-heading"><Text tid="englishWhyChooseVybe" /></h1>
                </div>
            </div>
            <div class="row">
                <div class="one columns">&nbsp;</div>
                <div class="ten columns">
                    <div class="why-choose-vybe-content">
                        <div class="why-choose-vybe-left">&nbsp;</div>
                        <div class="why-choose-vybe-right">
                        <Text tid="englishWhyChooseVybeP1" />
                        </div>
                    </div>

                    <div class="burntyellow-background why-choose-vybe-content vertical-margin">
                        <div class="why-choose-vybe-left">&nbsp;</div>
                        <div class="why-choose-vybe-right">
                        <Text tid="englishWhyChooseVybeP2" />
                        </div>
                    </div>

                    <div class="why-choose-vybe-content">
                        <div class="why-choose-vybe-left">&nbsp;</div>
                        <div class="why-choose-vybe-right">
                        <Text tid="englishWhyChooseVybeP3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="curriculum fixed-bg">
            <div class="row">
                <div class="two columns">&nbsp;</div>
                <div class="three columns">
                    
                    <h1 class="uppercase"><Text tid="englishTypesOfClasses" /></h1>
                    <br/>
                    <p><Text tid="englishTypesOfClassesP" />
                    </p>
                    </div>
                   
                <div class="one columns">&nbsp;</div>
                <div class="four columns">
                    <img class="bottom-margin u-max-full-width" src="/assets/images/Curriculum-img1.png"></img>
                </div>
            </div>
        
            <CollapsibleCurriculum number={<Text tid="englishCurriculum1Num" />} title={<Text tid="englishCurriculum1Title" />} description ={<Text tid="englishCurriculum1Desc" />}>
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p><Text tid="englishCurriculum1MoreDesc" />
                    </p>
                </div>
            </div>
            </CollapsibleCurriculum>


            <div class="row">
                <div class="divider-spacing two columns">&nbsp;</div>
                <div class="eight columns">
                    <div class="lesson-divider"></div>
                </div>
            </div>

            <CollapsibleCurriculum number={<Text tid="englishCurriculum2Num" />} title={<Text tid="englishCurriculum2Title" />} description ={<Text tid="englishCurriculum2Desc" />}>
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p><Text tid="englishCurriculum2MoreDesc" />
                    </p>
                </div>
            </div>
            </CollapsibleCurriculum>

            <div class="row">
                <div class="divider-spacing two columns">&nbsp;</div>
                <div class="eight columns">
                    <div class="lesson-divider"></div>
                </div>
            </div>

            <CollapsibleCurriculum number={<Text tid="englishCurriculum3Num" />} title={<Text tid="englishCurriculum3Title" />} description ={<Text tid="englishCurriculum3Desc" />}>
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p><Text tid="englishCurriculum3MoreDesc" />
                    </p>
                </div>
            </div>
            </CollapsibleCurriculum>


            <div class="row">
                <div class="divider-spacing two columns">&nbsp;</div>
                <div class="eight columns">
                    <div class="lesson-divider"></div>
                </div>
            </div>

            <CollapsibleCurriculum number={<Text tid="englishCurriculum4Num" />} title={<Text tid="englishCurriculum4Title" />} description ={<Text tid="englishCurriculum4Desc" />}>
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p><Text tid="englishCurriculum4MoreDesc" />
                    </p>
                </div>
            </div>
            </CollapsibleCurriculum>

            <div class="row">
                <div class="divider-spacing two columns">&nbsp;</div>
                <div class="eight columns">
                    <div class="lesson-divider"></div>
                </div>
            </div>


        </div>
        
        <div class="subscriptions">
        
            <div class="row">
                <div class="one columns">&nbsp;</div>
                <div class="six columns">
                    <h1 class="uppercase"><Text tid="englishSubscriptionsHeading" /></h1>
                    <br/>
                    <p class="extra-bottom-margin"><Text tid="englishSubscriptionsP" /></p>
                </div>
            </div>
            <div class="row">
            
                <div class="four columns">
                    <div class="subscription-card u-max-full-width left-card">
                        <div class="subscription-card-top">
                            <img class="tier-image" src="/assets/images/Tier-img1.png"></img>
                            <section class="tier-name">
                                <h5 class><Text tid="englishTier1Heading" /></h5>
                                <p class="slate aligncenter">฿ <h2 class="tier-price"><Text tid="englishTier1Price" /></h2><Text tid="englishSubscriptionsPerMonth" /></p>
                            </section>
                        </div>
                        <div class="tier-divider"></div>
                        <section class="tier-features">
                            <ul>
                               <li><span><Text tid="englishTier1Bullet1" /></span></li> 
                               <li><span><Text tid="englishTier1Bullet2" /></span></li>
                               <li><span><Text tid="englishTier1Bullet3" /></span></li>
                               <li class="hidden">Hidden</li>
                            </ul>
                        </section>
                        <button class="uppercase tier-button" onClick={() => this.setTier(1, <Text tid="englishTier1Price" />)} ><Text tid="englishSubscriptionsCTA" /></button>
                    </div>
                </div>
            
                <div class="four columns">
                    <div class=" subscription-card u-max-full-width center-card">
                    <div class="subscription-card-top">
                    <img class="tier-image" src="/assets/images/Tier-img2.png"></img>
                    <section class="tier-name">
                    <h5 class><Text tid="englishTier2Heading" /></h5>
                    <p class="slate aligncenter">฿ <h2 class="tier-price"><Text tid="englishTier2Price" /></h2><Text tid="englishSubscriptionsPerMonth" /></p>
                    </section>
                    </div>
                    <div class="tier-divider"></div>
                    <section class="tier-features">
                        <ul>
                        <li><span><Text tid="englishTier2Bullet1" /></span></li> 
                        <li><span><Text tid="englishTier2Bullet2" /></span></li>
                        <li><span><Text tid="englishTier2Bullet3" /></span></li>   
                        <li><span><Text tid="englishTier2Bullet4" /></span></li>                           
                        </ul>
                    </section>
                    <button class="uppercase tier-button" onClick={() => this.setTier(2, <Text tid="englishTier2Price" />)} ><Text tid="englishSubscriptionsCTA" /></button>
                    </div>
                </div>
            

                <div class="four columns">
                    <div class="subscription-card u-max-full-width right-card">
                    <div class="subscription-card-top">
                            <img class="tier-image" src="/assets/images/Tier-img3.png"></img>
                            <section class="tier-name">
                            <h5 class><Text tid="englishTier3Heading" /></h5>
                            <p class="slate aligncenter">฿ <h2 class="tier-price"><Text tid="englishTier3Price" /></h2><Text tid="englishSubscriptionsPerMonth" /></p>
                            </section>
                        </div>
                        <div class="tier-divider"></div>
                        <section class="tier-features">
                        <ul>
                            <li><span><Text tid="englishTier3Bullet1" /></span></li> 
                            <li><span><Text tid="englishTier3Bullet2" /></span></li>
                            <li><span><Text tid="englishTier3Bullet3" /></span></li>   
                            <li><span><Text tid="englishTier3Bullet4" /></span></li>                           
                        </ul>
                        </section>
                        <button class="uppercase tier-button" onClick={() => this.setTier(3,<Text tid="englishTier3Price" />)} ><Text tid="englishSubscriptionsCTA" /></button>
                    </div>
                </div>

            
            </div>

        </div>
        {this.state.apply ? 
            <div class="overlay">
            <EscapeOutside 
                onEscapeOutside={ this.handleEscapeOutside }
                style={{
                width:'40%',
                margin: '8% 24%',
                top:'0%',
                }}>
            <Applicationform 
                tier={this.state.tiernumber} 
                price={this.state.price}/>
            </EscapeOutside> 
            </div> : null}
        </div>

    }
}