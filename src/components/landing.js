import React, {Component} from 'react';
import { Grid } from 'react-mdl';
import Contact from './contact';
import Projects from './projects';
import Welcome from './welcome';
import AboutMe from './aboutme';



class Landing extends Component {
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto', minHeight: '100vh'}}>
                <Grid className="landing-grid">
                   <Welcome/>
                   <AboutMe/>
                   <Projects/>
                   <Contact/>
                </Grid>
            </div>
            
        ) 
    }
}

export default Landing;