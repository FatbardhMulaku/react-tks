import React, { Component } from 'react';
import './Style/SectionH5.css';
import SoftwareH5 from './SoftwareH5';
import DevelopmentH5 from './DevelopmentH5';
import DesignH5 from './DesignH5';
import { withStyles } from '@material-ui/core/styles';
 

const styles = theme =>   ({
    butone: {
      border: '1px solid #d9d9d9',
      padding: '20px 50px',
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
            case 'Software': return <SoftwareH5/>
            case 'Development' : return <DevelopmentH5/>
            case 'Design': return <DesignH5/>
            default: return <SoftwareH5/>
        }
    }

    
    render() {
        const { classes } = this.props;
        const classa = `${classes.butone} ${classes.active}`;

        
        
        return (
            
            <div data-aos="zoom-in-up" data-aos-once="false" data-aos-duration="2000" className="WorkSection container my-auto"> 
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
