import React, { Component } from 'react';
import './Style/SectionH5.css';
import SoftwareH5 from './SoftwareH5';
import DevelopmentH5 from './DevelopmentH5';
import DesignH5 from './DesignH5';
import { withTranslation } from 'react-i18next';
import hoistStatics from 'hoist-non-react-statics';
import Zoom from 'react-reveal/Zoom';
 
class WorkSection extends Component {
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
        const { t } = this.props;
        return (
            <div  className="WorkSection container  mt-5"> 
            <Zoom>
                <h1>{t('Home.SectionH5title')}</h1>
                <div clasname="workUL">
                    <button className="butone" name='butoni1' onClick={this.handleClick.bind(this, 'Software')}>{t('Home.SectionH5Soft')}</button>
                    <button className="butone" name='butoni1' onClick={this.handleClick.bind(this, 'Development')}>{t('Home.SectionH5Deve')}</button>
                    <button className="butone" name='butoni1' onClick={this.handleClick.bind(this, 'Design')}>{t('Home.SectionH5Design')}</button>
                </div>
                {this._renderSubComp()}
                <div className="seeall">{t('Home.SectionH5SeeAll')}</div>
                </Zoom>
            </div>
            
        )
    }
}

export default hoistStatics(withTranslation()(WorkSection), WorkSection);
