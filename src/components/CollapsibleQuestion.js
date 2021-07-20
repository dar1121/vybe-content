import React from 'react';

export default class CollapsibleQuestion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    componentDidUpdate(){
        
    }

    render() {
      return (<div>
        <div class="question" onClick={(e)=>this.togglePanel(e)}>
                        {this.props.question}
                        <span class="floatright"> + </span>

                        {this.state.open ? (
                            <div className='answer'>
                                {this.props.children}
                            </div>
                            ) : null}
                            
                    </div>
        

        
    </div>
  
  );
    }
}