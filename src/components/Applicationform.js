import React from 'react';



export default class Applicationform extends React.Component{
    render() {
        return <div class="formcontainer">
           
           <h1 class="uppercase">Start Your Application</h1>
           <br/>
           <p>Whether you’re still exploring or you’re ready to start your journey, you’ve come to the right place.</p>
           <div class="form-divider"></div>
            <form>
                <h5 class="teal">Contact Information</h5>
                <br/>
                <label>Full Name: <span class="cherry">*</span></label>
                <input type="text" placeholder="Jean Simmons"></input>
                <br/>
                <label>Email: <span class="cherry">*</span></label>
                <input type="text" placeholder="jsimmons44@vybe.co"></input>
                <br/>
                <label>Phone Number: <span class="cherry">*</span></label>
                <input type="text" placeholder="546 573 5637"></input>

                <div class="form-divider"></div>

                <h5 class="teal">Subscription</h5>
                <br/>

                <div class="selected-subscription-card">
                    <div class="subscription-card-top">
                            <img class="selected-tier-image" src="/assets/images/Tier-img3.png"></img>
                            <section class="tier-name">
                                <h5 class>TIER 1</h5>
                                <p class="slate aligncenter">฿ <h2 class="tier-price">12,345</h2> / month</p>
                            </section>
                    </div>  
                </div>
                <span class="floatright slate"><a href="#">Change Selection</a></span>
                <br/>
                <br/>
                <label>Desired Start Date: <span class="cherry">*</span></label>
                <input type="date" ></input>
                <br/>
                <input type="submit" value="Send Request" />
            </form>
        </div>
    }
}