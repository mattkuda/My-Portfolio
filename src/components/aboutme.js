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
                        
                        <p style={{textIndent: '50px'}}>I am a software developer from Boston, MA, currently working at Cape Air. Through my Boston College education, depth of work experience, and pursuit of my own side projects, I possess the technical abilities to undertake any challenge. Continuing to learn new languages and development techniques is part of my passion for developing beautiful, reliable software.</p>

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
                                    <li>C++</li>
                                </ul>
                               
                            </Cell>
                            <Cell col={6}>
                            <p style={{textAlign:'left', fontWeight: 'bold'}}>Dev Tools:</p>
                                <ul style={{textAlign: 'left'}}>
                                    <li>Google Firebase</li>
                                    <li>GraphQL</li>
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