import React, { Component } from 'react';
import './WorkSection.css';
import Software from '../Work/Software';
import Development from '../Work/Development';
import Design from '../Work/Design';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    butone: {
      border: 'none',
      padding: '20px 30px',
      margin: '20px',
      color: 'black',
      borderRadius: '10px',
      cursor: 'pointer',
      '&:hover': { backgroundColor: '#006FFF',
                    color: 'white',
     },

    },
    active:{
        
        '&:focus':{
            backgroundColor: '#006FFF',
            outline: 'none',
            color: 'white'  
        }
    },
    seeall:{
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'underline',
        color: 'black',
        fontSize: '20px',
        padding: '5px 20px',
    }

  };

export class WorkSection extends Component {
    constructor(){
        super();
        this.state = {render:'Software', activeName: false}
    }
    handleClick(compName, e){
        console.log(compName);
        const activeName = e.target.name;
        this.setState({render:compName, activeName});        
    }
    _renderSubComp(){
        switch(this.state.render){
            case 'Software': return <Software/>
            case 'Development' : return <Development/>
            case 'Design': return <Design/>
            default: return <Software/>
        }
    }

    
    render() {
        const { classes } = this.props;
        const classa = `${classes.butone} ${classes.active}`
        return (
            <div className="WorkSection">
                <h1>Our Creative Works</h1>
                <div clasname="workUL">
                    <button className={classa} name='butoni1' onClick={this.handleClick.bind(this, 'Software')}>Software</button>
                    <button className={classa} name='butoni1' onClick={this.handleClick.bind(this, 'Development')}>Development</button>
                    <button className={classa} name='butoni1' onClick={this.handleClick.bind(this, 'Design')}>UI/UX Design</button>
                </div>
                {this._renderSubComp()}
                <div className={classes.seeall}>See all items</div>
            </div>
        )
    }
}

export default withStyles(styles)(WorkSection);
