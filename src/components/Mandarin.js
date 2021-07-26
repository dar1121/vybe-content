import React from 'react';
import CollapsibleCurriculum from './CollapsibleCurriculum';
import Applicationform from './Applicationform';



export default class Mandarin extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
          apply : false,
          tiernumber : 0,
          price: 0
        };
        this.setTier = this.setTier.bind(this);

      };
      
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
                    <h1 class="uppercase">Learn Conversational Mandarin</h1>
                </div>
                </div>
                <div class="row">
                <div class="one columns">&nbsp;</div>
                <div class="four columns">
                <p class="vertical-margin">
                This is a blurb of what VyBE’s Mandarin program offers. I would keep this at two lines.                       <br/>
                </p>
                <ol class="strong">
                    <li><span>Exciting Topics</span></li>
                    <li><span>Edtech and Classrooms</span></li>
                    <li><span>Active Teaching Style</span></li>
                </ol>
                <a href="/#apply" class=" button uppercase language-button">Get Started</a>
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
                    <div class="why-choose-vybe-right">We teach language through exciting, theme-based classes on relevant topics that appeal to Gen Z – ranging from internet phenomenons to getting drinks at a bar.</div>
                </div>

                <div class="burntyellow-background why-choose-vybe-content vertical-margin">
                    <div class="why-choose-vybe-left">&nbsp;</div>
                    <div class="why-choose-vybe-right">We combine edtech with classroom learning. Students get the best of both worlds.</div>
                </div>

                <div class="why-choose-vybe-content">
                    <div class="why-choose-vybe-left">&nbsp;</div>
                    <div class="why-choose-vybe-right">Our teaching style is active not passive. We emphasize building confidence in speech, interacting with others. We focus less on grammar, syntax.</div>
                </div>
            </div>
        </div>
    </div>

        <div class="curriculum fixed-bg">
            <div class="row">
                <div class="two columns">&nbsp;</div>
                <div class="three columns">
                    
                    <h1 class="uppercase">Curriculum</h1>
                    <br/>
                    <p>A phrase about your curriculum. I would keep this at one or two lines.</p>
                    </div>
                   
                <div class="one columns">&nbsp;</div>
                <div class="four columns">
                    <img class="bottom-margin u-max-full-width" src="/assets/images/Curriculum-img2.png"></img>
                </div>
            </div>
        
            <CollapsibleCurriculum number="01" title="The First Lesson" description ="A description about your lesson.">
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p> These descriptions expand to show more text. I suggest keeping the visible descriptions to a short one-liner and then having the bulk of the information in this paragraph. </p>
                </div>
            </div>
            </CollapsibleCurriculum>

            <div class="row">
                <div class="divider-spacing two columns">&nbsp;</div>
                <div class="eight columns">
                    <div class="lesson-divider"></div>
                </div>
            </div>

            <CollapsibleCurriculum number="02" title="The Second Lesson" description ="A description about your lesson.">
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p> These descriptions expand to show more text. I suggest keeping the visible descriptions to a short one-liner and then having the bulk of the information in this paragraph. </p>
                </div>
            </div>
            </CollapsibleCurriculum>

            <div class="row">
                <div class="divider-spacing two columns">&nbsp;</div>
                <div class="eight columns">
                    <div class="lesson-divider"></div>
                </div>
            </div>

            <CollapsibleCurriculum number="03" title="The Third Lesson" description ="A description about your lesson.">
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p> These descriptions expand to show more text. I suggest keeping the visible descriptions to a short one-liner and then having the bulk of the information in this paragraph. </p>
                </div>
            </div>
            </CollapsibleCurriculum>
            <div class="row">
                <div class="divider-spacing two columns">&nbsp;</div>
                <div class="eight columns">
                    <div class="lesson-divider"></div>
                </div>
            </div>

            <CollapsibleCurriculum number="04" title="The Fourth Lesson" description ="A description about your lesson.">
            <div class="row">
                <div class="six columns">&nbsp;</div>
                <div class="three columns bottom-margin">
                    <p> These descriptions expand to show more text. I suggest keeping the visible descriptions to a short one-liner and then having the bulk of the information in this paragraph. </p>
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
                    <p class="extra-bottom-margin">Our plans fit your needs.</p>
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
        {this.state.apply ? <Applicationform tier={this.state.tiernumber} price={this.state.price}/> : null}
        </div>
    }
}