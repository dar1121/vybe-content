import React from 'react';
import CollapsibleQuestion from './CollapsibleQuestion';


export default class Test extends React.Component {
    constructor(props) {
     super(props);
     
   }
   render() {
     return  (<div>
         <CollapsibleQuestion question="What is your first question?">
            <div class="answer">
                Here is your answer. 
            </div>
         </CollapsibleQuestion>
     </div>
     )
   }
 }
 
