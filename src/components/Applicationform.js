import React from 'react';
import { init } from 'emailjs-com';
init("user_JjmLKCBJBxK1mSzjw7tMX");


export default class Applicationform extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          from_name:"",
          from_email: "",
          phone_number: "",
          chosen_tier: this.props.tier,
          start_date: "",
          
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
        start_date: ""
        });
      }
 
    render() {
        
        return  <div class="formcontainer">
           
           <h1 class="uppercase">Start Your Application</h1>
           <br/>
           <p> Whether you’re still exploring or you’re ready to start your journey, you’ve come to the right place.</p>
           <div class="form-divider"></div>
            <form>
                <h5 class="teal">Contact Information</h5>
                <br/>
                <label 
                    for="from_name">Full Name: <span class="cherry">*</span></label>
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
                    for="from_email">Email: <span class="cherry">*</span></label>
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
                    for="phone_number">Phone Number: <span class="cherry">*</span></label>
                <input 
                    name="phone_number" 
                    id="phone_number" 
                    type="text" 
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Your ###"
                    required
                    value={this.state.number}></input>

                <div class="form-divider"></div>

                <h5 class="teal">Subscription</h5>
                <br/>

                <div class="selected-subscription-card">
                    <div class="subscription-card-top">
                            <img class="selected-tier-image" src="/assets/images/Tier-img3.png"></img>
                            <section class="tier-name">
                                <h5 class>TIER {this.props.tier} </h5>
                                <p class="slate aligncenter">฿ <h2 class="tier-price">{this.props.price}</h2> / month</p>
                            </section>
                    </div>  
                </div>

            
                <br/>
                <br/>
                <label for="start_date">Desired Start Date: <span class="cherry">*</span></label>
                <input 
                    name="start_date" 
                    onChange={this.handleInputChange.bind(this)} 
                    required
                    value={this.state.number}
                    id="start_date" 
                    type="date" ></input>
                <br/>
                <input type="submit" value="Send Request" onClick={this.sendMessage.bind(this)} />
            </form>
        </div>
       
    }
    
}