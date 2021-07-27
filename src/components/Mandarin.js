import React from 'react';
import CollapsibleCurriculum from './CollapsibleCurriculum';
import Applicationform from './Applicationform';
import { init } from 'emailjs-com';
init("user_JjmLKCBJBxK1mSzjw7tMX");
import EscapeOutside from "react-escape-outside";


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
       

        return <div class="container">
        <div class="learn-mandarin fixed-bg">
            <div class="row">
                <div class="one columns">&nbsp;</div>
                <div class="six columns">
                    <h1 class="uppercase">LEARN CHINESE</h1>
                </div>
                </div>
                <div class="row">
                <div class="one columns">&nbsp;</div>
                <div class="four columns">
                <p class="vertical-margin">
                Build your foundation in learning Chinese, or explore new topics with us at vybe!
                </p>
                <ol class="strong">
                    <li><span>Theme-based topics that change every month</span></li>
                    <li><span>Edtech vocabulary and grammar learning</span></li>
                    <li><span>Emphasis on spoken Chinese and communication in our classrooms                    </span></li>
                </ol>
                <a href="/#apply" class=" button uppercase language-button">GET STARTED. TAKE A CHINESE PLACEMENT TEST NOW!</a>
                </div>
            </div>
            
        
        </div>
        
        <div class="why-choose-vybe">
        <div class="row">
            <div class="four columns">
                &nbsp;
            </div>
            <div class="four columns">
            <h1 class="aligncenter uppercase why-choose-vybe-heading">Why Choose Vybe?</h1>
            </div>
        </div>
        <div class="row">
            <div class="one columns">&nbsp;</div>
            <div class="ten columns">
                <div class="why-choose-vybe-content">
                    <div class="why-choose-vybe-left">&nbsp;</div>
                    <div class="why-choose-vybe-right">Learn Chinese through exciting, theme-based classes on relevant topics that appeal to Millenials and Gen Zs – ranging from internet phenomenons to getting drinks at a bar.
                    </div>
                </div>

                <div class="burntyellow-background why-choose-vybe-content vertical-margin">
                    <div class="why-choose-vybe-left">&nbsp;</div>
                    <div class="why-choose-vybe-right">No more fixed courses! Book classes according to your own interests and learn basic vocabulary and grammar before coming to class. We adopt EdTech so that students get the best of both worlds in learning a new language.
                    </div>
                </div>

                <div class="why-choose-vybe-content">
                    <div class="why-choose-vybe-left">&nbsp;</div>
                    <div class="why-choose-vybe-right">Our teaching style is active, not passive. We emphasize building confidence in speech and interacting with others through activities. Grammar and vocabulary is important, but not as important as being understood.
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div class="curriculum fixed-bg">
            <div class="row">
                <div class="two columns">&nbsp;</div>
                <div class="three columns">
                    
                    <h1 class="uppercase">Types of Classes</h1>
                    <br/>
                    <p>Our Chinese curriculum is designed to accommodate each and every step of your language learning journey. 
                    </p>
                    </div>
                   
                <div class="one columns">&nbsp;</div>
                <div class="four columns">
                    <img class="bottom-margin u-max-full-width" src="/assets/images/Curriculum-img2.png"></img>
                </div>
            </div>
        
            <CollapsibleCurriculum number="01" title="Foundational classes" description ="Designed for beginners to build basic communication skills.">
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p> 
                    Our Foundational classes revolve around teaching CEFR A1 and A2 grammar and vocabulary. Learn the basics and slowly build your confidence in speaking and using Chinese. If you ever feel like our foundational classes are too easy, simply take a placement test to be able to join our topical classes!
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

            <CollapsibleCurriculum number="02" title="Topical classes" description ="Designed for intermediate learners to learn new and relevant topics.">
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p>Our theme-based topical classes range from CEFR A2-B2 level. They are suitable for a wide range of intermediate learners who have already learned some basic grammar and vocabulary, and would like to further practice using Chinese across a variety of situations.
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

            <CollapsibleCurriculum number="03" title="Conversational classes" description ="Designed for all learners who wish to practice speaking and expressing themselves.">
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p>Our Conservational classes provide students with a safe space to think and practice speaking, mimicking the actual conversations we would have with friends in a foreign country. 
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

            <CollapsibleCurriculum number="04" title="Activity classes" description ="Designed for all learners to bond through fun, miscellaneous activities
            ">
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p>Our Activity classes consist of multimedia games and interactive events which provide a space for our students to connect and get to know one another. This provides an immersive experience and strengthens the vybe community spirit.
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
                    <h1 class="uppercase">Subscription Based Learning</h1>
                    <br/>
                    <p class="extra-bottom-margin">Our flexible plans cater to your learning needs.</p>
                </div>
            </div>
            <div class="row">
            
                <div class="four columns">
                    <div class="subscription-card u-max-full-width left-card">
                        <div class="subscription-card-top">
                            <img class="tier-image" src="/assets/images/Tier-img1.png"></img>
                            <section class="tier-name">
                                <h5 class>TIER 1</h5>
                                <p class="slate aligncenter">฿ <h2 class="tier-price">12,345</h2> / month</p>
                            </section>
                        </div>
                        <div class="tier-divider"></div>
                        <section class="tier-features">
                            <ul>
                               <li><span>This is a <strong>Tier 1 feature.</strong></span></li> 
                               <li><span>This is <strong>another</strong> Tier 1 feature.</span></li>
                               <li><span>This is the <strong>last</strong> Tier 1 feature.</span> </li>
                               <li class="hidden">Hidden</li>
                            </ul>
                        </section>
                        <button class="uppercase tier-button" onClick={() => this.setTier(1, "12,345")} >Get Started</button>
                        </div>
                </div>
            
                <div class="four columns">
                    <div class=" subscription-card u-max-full-width center-card">
                    <div class="subscription-card-top">
                    <img class="tier-image" src="/assets/images/Tier-img2.png"></img>
                    <section class="tier-name">
                        <h5 class>TIER 2</h5>
                        <p class="slate aligncenter">฿ <h2 class="tier-price">12,345</h2> / month</p>
                    </section>
                    </div>
                    <div class="tier-divider"></div>
                    <section class="tier-features">
                        <ul>
                        <li><span>This is a <strong>Tier 2 feature.</strong></span></li> 
                        <li><span>This is <strong>another</strong> Tier 2 feature.</span></li>
                        <li><span>This is the <strong>third</strong> Tier 2 feature.</span> </li>
                        <li><span>This is the <strong>last</strong> Tier 2 feature.</span> </li>
                        </ul>
                    </section>
                    <button class="uppercase tier-button" onClick={() => this.setTier(2, "12,345")} >Get Started</button>
                    </div>
                </div>
            

                <div class="four columns">
                    <div class="subscription-card u-max-full-width right-card">
                    <div class="subscription-card-top">
                            <img class="tier-image" src="/assets/images/Tier-img3.png"></img>
                            <section class="tier-name">
                                <h5 class>TIER 1</h5>
                                <p class="slate aligncenter">฿ <h2 class="tier-price">12,345</h2> / month</p>
                            </section>
                        </div>
                        <div class="tier-divider"></div>
                        <section class="tier-features">
                            <ul>
                               <li><span>This is a <strong>Tier 3 feature.</strong></span></li> 
                               <li><span>This is <strong>another</strong> Tier 3 feature.</span></li>
                               <li><span>This is the <strong>third</strong> Tier 3 feature.</span> </li>
                                <li><span>This is the <strong>last</strong> Tier 3 feature.</span> </li>
                            </ul>
                        </section>
                        <button class="uppercase tier-button" onClick={() => this.setTier(3, "12,345")} >Get Started</button>
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