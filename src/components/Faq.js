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
                        <h1 class="uppercase"><Text tid="faqHeading" /></h1>
                        <br/>
                        <p><Text tid="faqP" /> <a class="underline-link" href="#contact"><Text tid="faqContactUs" /></a></p>
                    </div>
                </div>
            </div>
        
            <div class="faq-questions">
                <div class="row">
                <div class="one columns">&nbsp;</div>
                <div class="faq-sections three columns">
                    <ul>
                        <li> <span><Text tid="faqSection1" /></span></li>
                        <li> <span><Text tid="faqSection2" /></span></li>
                        <li> <span><Text tid="faqSection3" /></span></li>
                        <li> <span><Text tid="faqSection4" /></span></li>
                    </ul>
                </div>
                <div class="questions seven columns">
                    <h1 class="uppercase"><Text tid="faqSection1" /></h1>
                    <div class="questions-list">
                    <CollapsibleQuestion question={<Text tid="faqSection1Q1" />}>
                    <Text tid="faqSection1A1" /> 
                    </CollapsibleQuestion>
                    </div>

                    <h1 class="uppercase "><Text tid="faqSection2" /></h1>
                    <div class="questions-list">
                    <CollapsibleQuestion question={<Text tid="faqSection2Q1" />}>
                    <Text tid="faqSection2A1" />
                    </CollapsibleQuestion> 
                    </div>

                    <h1 class="uppercase "><Text tid="faqSection3" /></h1>
                    <div class="questions-list">
                    <CollapsibleQuestion question={<Text tid="faqSection3Q1" />}>
                            <Text tid="faqSection3A1" />
                    </CollapsibleQuestion>
                    </div>

                    <h1 class="uppercase"><Text tid="faqSection4" /></h1>


                    <div class="questions-list">
                    <CollapsibleQuestion question={<Text tid="faqSection4Q1" />}>
                    <Text tid="faqSection4A1" /> 
                    </CollapsibleQuestion>
                    </div>

                </div>
                
                </div>
            </div>
        </div>
    }
}