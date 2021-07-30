import React from 'react';
import CollapsibleQuestion from './CollapsibleQuestion';
import { Text, LanguageContext } from '../context/Language';



export default class Faq extends React.Component{
    render() {
        return <div class="container">
            <div class="faq-heading">
                <div class="row">
                    <div class="one columns">&nbsp;</div>
                    <div class="six columns">
                        <h1 class="uppercase">Frequently asked questions</h1>
                        <br/>
                        <p>If you have any further questions, please <a class="underline-link" href="#contact">contact us.</a></p>
                    </div>
                </div>
            </div>
        
            <div class="faq-questions">
                <div class="row">
                <div class="one columns">&nbsp;</div>
                <div class="faq-sections three columns">
                    <ul>
                        <li> <span>Section Name</span></li>
                        <li> <span>Section Name</span></li>
                        <li> <span>Section Name</span></li>
                        <li> <span>Section Name</span></li>
                        <li> <span>Section Name</span></li>
                    </ul>
                </div>
                <div class="questions seven columns">
                    <h1 class="uppercase"><Text tid="exploreHeader" /> </h1>
                    <div class="questions-list">
                    <CollapsibleQuestion question="What is your first question?">
                            Here is your answer. 
                    </CollapsibleQuestion>

                    <CollapsibleQuestion question="What is your second question?">
                            Here is your answer. 
                    </CollapsibleQuestion>

                    <CollapsibleQuestion question="What is your third question?">
                            Here is your answer. 
                    </CollapsibleQuestion> 

                    </div>

                    <h1 class="uppercase ">Second Section Name</h1>
                    <div class="questions-list">
                    <CollapsibleQuestion question="What is your first question?">
                        Here is your answer. 
                    </CollapsibleQuestion>

                    <CollapsibleQuestion question="What is your second question?">
                            Here is your answer. 
                    </CollapsibleQuestion>

                    <CollapsibleQuestion question="What is your third question?">
                            Here is your answer. 
                    </CollapsibleQuestion> 
                    </div>

                    <h1 class="uppercase ">Third Section Name</h1>
                    <div class="questions-list">
                    <CollapsibleQuestion question="What is your first question?">
                            Here is your answer. 
                    </CollapsibleQuestion>

                    <CollapsibleQuestion question="What is your second question?">
                            Here is your answer. 
                    </CollapsibleQuestion>

                    <CollapsibleQuestion question="What is your third question?">
                            Here is your answer. 
                    </CollapsibleQuestion> 
                    </div>

                    <h1 class="uppercase">Fourth Section Name</h1>
                    <div class="questions-list">
                    <CollapsibleQuestion question="What is your first question?">
                            Here is your answer. 
                    </CollapsibleQuestion>

                    <CollapsibleQuestion question="What is your second question?">
                            Here is your answer. 
                    </CollapsibleQuestion>

                    <CollapsibleQuestion question="What is your third question?">
                            Here is your answer. 
                    </CollapsibleQuestion> 
                    </div>

                    <h1 class="uppercase small-bottom-margin">Fifth Section Name</h1>
                    <div class="questions-list">
                    <CollapsibleQuestion question="What is your first question?">
                            Here is your answer. 
                    </CollapsibleQuestion>

                    <CollapsibleQuestion question="What is your second question?">
                            Here is your answer. 
                    </CollapsibleQuestion>

                    <CollapsibleQuestion question="What is your third question?">
                            Here is your answer. 
                    </CollapsibleQuestion> 
                    </div>
                </div>
                
                </div>
            </div>
        </div>
    }
}