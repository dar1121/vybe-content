import React from 'react';

export default class CollapsibleCurriculum extends React.Component{
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
        <div className="lesson-row" onClick={(e)=>this.togglePanel(e)}>
            <div class="row med-padding">
                <div class="two columns">&nbsp;</div>
                <div class="one columns">
                    <h1>{this.props.number}</h1>
                </div>
                <div class="three columns">
                    <h5 class="lesson-heading">{this.props.title}</h5>
                </div>
                <div class="three columns">
                    <p class="lesson-description">{this.props.description}</p>
                </div>
                <div class="one column">
                    <div class="down-arrow"></div>
                </div>
            </div>
        </div>
        {this.state.open ? (
            <div className='extended-content'>
                {this.props.children}
            </div>
            ) : null}

        
    </div>
  
  );
    }
}