import React from 'react';
import CollapsibleCurriculum from './CollapsibleCurriculum';
import Applicationform from './Applicationform';
import { init } from 'emailjs-com';
init("user_JjmLKCBJBxK1mSzjw7tMX");
import EscapeOutside from "react-escape-outside";
import { Text, LanguageContext } from '../context/Language';
import Header from './Header';


export default class Mandarin extends React.Component{
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
       

        return <div>
        <Header>
                <ul>
                    <li class="selected languages"><a href="/#our-languages"><Text tid="navilanguages" /></a></li>
                    <li class=""><a href="/about-us"><Text tid="naviwhoweare" /></a></li>
                    <li class=""><a href="/"><Text tid="naviwhatwedo" /></a></li>  
                </ul>
            </Header>
        <div class="container">
        <div class="learn-mandarin fixed-bg">
            <div class="row">
                <div class="one columns">&nbsp;</div>
                <div class="six columns">
                    <h1 class="uppercase"><Text tid="chineseHeading" /></h1>
                </div>
                </div>
                <div class="row">
                <div class="one columns">&nbsp;</div>
                <div class="four columns">
                <p class="vertical-margin">
                <Text tid="chineseP" />
                </p>
                <ol class="strong">
                    <li><span><Text tid="chineseBullet1" /></span></li>
                    <li><span><Text tid="chineseBullet2" /></span></li>
                    <li><span><Text tid="chineseBullet3" /></span></li>
                </ol>
                <a href="/#apply" class=" button uppercase language-button"><Text tid="chineseButton" /></a>
                </div>
            </div>
            
        
        </div>
        
        <div class="why-choose-vybe">
        <div class="row">
            <div class="four columns">
                &nbsp;
            </div>
            <div class="four columns">
            <h1 class="aligncenter uppercase why-choose-vybe-heading"><Text tid="chineseWhyChooseVybe" /></h1>
            </div>
        </div>
        <div class="row">
            <div class="one columns">&nbsp;</div>
            <div class="ten columns">
                <div class="why-choose-vybe-content">
                    <div class="why-choose-vybe-left">&nbsp;</div>
                    <div class="why-choose-vybe-right"><Text tid="chineseWhyChooseVybeP1" />
                    </div>
                </div>

                <div class="burntyellow-background why-choose-vybe-content vertical-margin">
                    <div class="why-choose-vybe-left">&nbsp;</div>
                    <div class="why-choose-vybe-right"><Text tid="chineseWhyChooseVybeP2" />
                    </div>
                </div>

                <div class="why-choose-vybe-content">
                    <div class="why-choose-vybe-left">&nbsp;</div>
                    <div class="why-choose-vybe-right"><Text tid="chineseWhyChooseVybeP3" />
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div class="curriculum fixed-bg">
            <div class="row">
                <div class="two columns">&nbsp;</div>
                <div class="three columns">
                    
                    <h1 class="uppercase"><Text tid="chineseTypesOfClasses" /></h1>
                    <br/>
                    <p><Text tid="chineseTypesOfClassesP" />
                    </p>
                    </div>
                   
                <div class="one columns">&nbsp;</div>
                <div class="four columns">
                    <img class="bottom-margin u-max-full-width" src="/assets/images/Curriculum-img2.png"></img>
                </div>
            </div>
        
            <CollapsibleCurriculum number={<Text tid="chineseCurriculum1Num" />} title={<Text tid="chineseCurriculum1Title" />} description ={<Text tid="chineseCurriculum1Desc" />}>
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p><Text tid="chineseCurriculum1MoreDesc" />
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

            <CollapsibleCurriculum number={<Text tid="chineseCurriculum2Num" />} title={<Text tid="chineseCurriculum2Title" />} description ={<Text tid="chineseCurriculum2Desc" />}>
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p><Text tid="chineseCurriculum2MoreDesc" />
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

            <CollapsibleCurriculum number={<Text tid="chineseCurriculum3Num" />} title={<Text tid="chineseCurriculum3Title" />} description ={<Text tid="chineseCurriculum3Desc" />}>
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p><Text tid="chineseCurriculum3MoreDesc" />
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

            <CollapsibleCurriculum number={<Text tid="chineseCurriculum4Num" />} title={<Text tid="chineseCurriculum4Title" />} description ={<Text tid="chineseCurriculum4Desc" />}>
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p><Text tid="chineseCurriculum4MoreDesc" />
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
                    <h1 class="uppercase"><Text tid="chineseSubscriptionsHeading" /></h1>
                    <br/>
                    <p class="extra-bottom-margin"><Text tid="chineseSubscriptionsP" /></p>
                </div>
            </div>
            <div class="row">
            
                <div class="four columns">
                    <div class="subscription-card u-max-full-width left-card">
                        <div class="subscription-card-top">
                            <img class="tier-image" src="/assets/images/Tier-img1.png"></img>
							<section class="tier-name">
							<h5 class><Text tid="chineseTier1Heading" /></h5>
							<p class="slate aligncenter">฿ <h2 class="tier-price"><Text tid="chineseTier1Price" /></h2><Text tid="chineseSubscriptionsPerMonth" /></p>
						</section>
                        </div>
                        <div class="tier-divider"></div>
                        <section class="tier-features">
                            <ul>
                               <li><span><Text tid="chineseTier1Bullet1" /></span></li> 
                               <li><span><Text tid="chineseTier1Bullet2" /></span></li>
                               <li><span><Text tid="chineseTier1Bullet3" /></span> </li>
                               <li class="hidden">Hidden</li>
                            </ul>
                        </section>
                        <button class="uppercase tier-button" onClick={() => this.setTier(1, <Text tid="chineseTier1Price" />)} ><Text tid="chineseSubscriptionsCTA" /></button>
                        </div>
                </div>
            
                <div class="four columns">
                    <div class=" subscription-card u-max-full-width center-card">
                    <div class="subscription-card-top">
                    <img class="tier-image" src="/assets/images/Tier-img2.png"></img>
                    <section class="tier-name">
                                <h5 class><Text tid="chineseTier2Heading" /></h5>
                                <p class="slate aligncenter">฿ <h2 class="tier-price"><Text tid="chineseTier2Price" /></h2><Text tid="chineseSubscriptionsPerMonth" /></p>
                    </section>
                    </div>
                    <div class="tier-divider"></div>
                    <section class="tier-features">
                        <ul>
                        <li><span><Text tid="chineseTier2Bullet1" /></span></li> 
                        <li><span><Text tid="chineseTier2Bullet2" /></span></li>
                        <li><span><Text tid="chineseTier2Bullet3" /></span> </li>
                        <li><span><Text tid="chineseTier2Bullet4" /></span> </li>
                        </ul>
                    </section>
                    <button class="uppercase tier-button" onClick={() => this.setTier(2, <Text tid="chineseTier2Price" />)} ><Text tid="chineseSubscriptionsCTA" /></button>
                    </div>
                </div>
            

                <div class="four columns">
                    <div class="subscription-card u-max-full-width right-card">
                    <div class="subscription-card-top">
                            <img class="tier-image" src="/assets/images/Tier-img3.png"></img>
                            <section class="tier-name">
                                <h5 class><Text tid="chineseTier3Heading" /></h5>
                                <p class="slate aligncenter">฿ <h2 class="tier-price"><Text tid="chineseTier3Price" /></h2><Text tid="chineseSubscriptionsPerMonth" /></p>
                            </section>
                        </div>
                        <div class="tier-divider"></div>
                        <section class="tier-features">
                            <ul>
                               <li><span><Text tid="chineseTier3Bullet1" /></span></li> 
                               <li><span><Text tid="chineseTier3Bullet2" /></span></li>
                               <li><span><Text tid="chineseTier3Bullet3" /></span> </li>
                                <li><span><Text tid="chineseTier3Bullet4" /></span> </li>
                            </ul>
                        </section>
                        <button class="uppercase tier-button" onClick={() => this.setTier(3, <Text tid="chineseTier3Price" />)} ><Text tid="chineseSubscriptionsCTA" /></button>
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
        </div></div>
    }
}