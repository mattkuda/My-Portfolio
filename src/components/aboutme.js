import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class AboutMe extends Component {
    render(){
        return(
            <div className="tile-body" >
            <a className="anchor" id="aboutme"/>
                <h1>About Me</h1>
                <hr/>
                <Grid className="aboutme-grid">
                    {/*Left Half*/}
                    <Cell col={4}>
                        <img src="../../assets/IMG_2607_2.jpg" alt="Matt_Kuda_picture"
                        style={{
                            height:'auto', 
                            borderRadius: '50%', 
                            width: "100% auto",
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto'}}
                        />
                    </Cell>
                    {/*Right Half*/}
                    <Cell col={8}>
                        
                        <p style={{textIndent: '50px'}}>I am an aspiring software developer from Boston, MA. As a Boston College 2020 graduate, my education included a variety of computer science courses including Computer Systems, Computer Organization, and Randomness & Computation. I enjoy being challenged and engaged with projects that require me to workoutside my comfort and knowledge set. Continuing to learn new languages and development techniques is part of my passion for developing beautiful, reliable software.</p>

                        <hr style={{margin: 'auto', width: '80%'}}/>
                        <br/>
                        <Grid className="aboutme-skills">
                            <Cell col={6}>
                                <p style={{textAlign:'left', fontWeight: 'bold'}}>Languages I speak:</p>
                                <ul style={{textAlign: 'left'}}>
                                    <li>React Javascript</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Java</li>
                                    <li>Python</li>
                                </ul>
                                {/* View resume */}
                                <a style={{ textAlign: "left"}} href="../../assets/Matthew_Kuda_Resume_Summer_2020.pdf" target="_blank" class="aboutme-button">View Resume (PDF)</a>
                            </Cell>
                            <Cell col={6}>
                            <p style={{textAlign:'left', fontWeight: 'bold'}}>Dev Tools:</p>
                                <ul style={{textAlign: 'left'}}>
                                    <li>Firebase</li>
                                    <li>React MDL</li>
                                    <li>Node.js</li>
                                    <li>GitHub</li>
                                    <li>Terminal</li>
                                </ul>
                            </Cell>
                        </Grid>
                        
                    </Cell>
                </Grid>
            </div>
        ) 
    }
}

export default AboutMe; 