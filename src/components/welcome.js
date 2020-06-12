import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Welcome extends Component {
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto', minHeight: '85vh'}}>
            <a id="welcome"/>
                <Grid className="landing-grid">
                   <Cell col={12}>
                        <div className="banner-text">
                            <h1>Hi, I'm Matt.</h1>
                            <hr/>
                            <h2>Welcome to my Software Developer Portfolio</h2>
                            <h2 className="resume-button">View Resume</h2>
                            <br/>
                            <div className="social-links">
                                {/*LinkedIn*/}
                                
                                <a href="https://www.linkedin.com/in/mattkuda/" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/*GitHub*/}
                                <a href="https://github.com/mattkuda" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                            </div>

                        </div>
                   </Cell> 
                </Grid>
            </div>
            
        ) 
    }
}

export default Welcome;