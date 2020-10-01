import React, { Component } from 'react';
import './SectionH5.css';
import Software from './Software';
import Development from './Development';
import Design from './Design';
import { withStyles } from '@material-ui/core/styles';
 

const styles = theme =>   ({
    butone: {
      border: '1px solid #d9d9d9',
      padding: '30px 50px',
      backgroundColor: '#fff',
      fontWeight: 'bold',
      marginLeft: '0px',
      marginRight: '0px',
      marginBottom: '40px',
      color: 'black',
      fontSize: '14px',
      borderRadius: '10px',
      cursor: 'pointer',
      [theme.breakpoints.down('md')]: {
            padding: '15px 25px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '10px 20px',
        fontSize: '13px',
  },
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

});

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
        const classa = `${classes.butone} ${classes.active}`;

        
        
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
