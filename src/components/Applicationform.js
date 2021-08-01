import React from 'react';
import { init } from 'emailjs-com';
init("user_JjmLKCBJBxK1mSzjw7tMX");
import { Text, LanguageContext } from '../context/Language';
import EscapeOutside from "react-escape-outside";



export default class Applicationform extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          from_name:"",
          from_email: "",
          phone_number: "",
          chosen_tier: this.props.tier,
          start_date: "",
          submitModal: false
          
        }
    };

    componentDidMount() {
    console.log(this.props.tier);
    }

    
    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
        console.log(this.state)
    }
    
    
    sendMessage(event) {
        event.preventDefault();

    const templateParams = {
        from_name: this.state.from_name,
        from_email: this.state.from_email,
        phone_number: this.state.phone_number,
        chosen_tier: this.props.tier,
        start_date: this.state.start_date
        };
    emailjs
          .send('service_23tsbwg', 'template_jvqkibm', templateParams)
          .then(
            function(response) {
                console.log('SUCCESS!', response.status, response.text);
             }, function(error) {
                console.log('FAILED...', error);
            }
          );
    this.setState({
        from_name:"",
        from_email: "",
        phone_number: "",
        chosen_tier: this.props.tier,
        start_date: "",
        submitModal: true
        });
      }
 
    render() {
        
        return  <div><div class="formcontainer">
           
           <h1 class="uppercase"> <Text tid="applicationFormHeader" /> </h1>
           <br/>
           <p><Text tid="applicationFormTagline" /></p>
           <div class="form-divider"></div>
            <form>
                <h5 class="teal"><Text tid="applicationContactInformation" /></h5>
                <br/>
                <label 
                    for="from_name"><Text tid="applicationFullName" />:<span class="cherry">*</span></label>
                <input 
                    name="from_name" 
                    id="from_name" 
                    type="text" 
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Your Name"
                    required
                    value={this.state.name}></input>

                <br/>

                <label 
                    for="from_email"><Text tid="applicationEmail" />:<span class="cherry">*</span></label>
                <input 
                    name="from_email" 
                    id="from_email" 
                    type="text" 
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Your Email"
                    required
                    value={this.state.email}
                    ></input>

                <br/>

                <label 
                    for="phone_number"><Text tid="applicationPhoneNumber" />: <span class="cherry">*</span></label>
                <input 
                    name="phone_number" 
                    id="phone_number" 
                    type="text" 
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Your ###"
                    required
                    value={this.state.number}></input>

                <div class="form-divider"></div>

                <h5 class="teal"><Text tid="applicationSubscriptionHeading" /></h5>
                <br/>

                <div class="selected-subscription-card">
                    <div class="subscription-card-top">
                            <img class="selected-tier-image" src="/assets/images/Tier-img3.png"></img>
                            <section class="tier-name">
                                <h5 class><Text tid="applicationSubscriptionTier" /> {this.props.tier} </h5>
                                <p class="slate aligncenter">฿ <h2 class="tier-price">{this.props.price}</h2><Text tid="applicationPerMonth" /></p>
                            </section>
                    </div>  
                </div>

            
                <br/>
                <br/>
                <label for="start_date"><Text tid="applicationDesiredStartDate" />: <span class="cherry">*</span></label>
                <input 
                    name="start_date" 
                    onChange={this.handleInputChange.bind(this)} 
                    required
                    value={this.state.number}
                    id="start_date" 
                    type="date" ></input>
                <br/>
                <button type="submit" onClick={this.sendMessage.bind(this)} > <Text tid="applicationSendRequest"/> </button>
            </form>

        </div>
        {this.state.submitModal ? 
            <div class="overlayModal">
            <EscapeOutside 
                onEscapeOutside={ this.handleEscapeOutside }
                style={{
                width:'30%',
                margin: '18% 30%',
                top:'0%',
                }}>
            <div class="formSubmitted"> 
            Your request has been sent! 
            <a href="/">Return to Home</a>
            </div>
            </EscapeOutside> 
            </div> : null}
            </div>
       
    }
    
}