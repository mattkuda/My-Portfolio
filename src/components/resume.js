import React, {Component} from 'react';
import {Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" style={{height: '200px'}}/>

                        </div>
                        <h2 style={{paddingTop: '2em'}}>Matt Kuda</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Include LinkedIn and GitHib here?</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2 st>Education</h2>
                        <Education 
                            startYear={2015}
                            endYear={2020}
                            schoolName={"Boston College"}
                            schoolDescription={"The best universtiy in Boston."}
                        />
                        <Education 
                            startYear={2012}
                            endYear={2015}
                            schoolName={"Boston College"}
                            schoolDescription={"The best universtiy in Boston."}
                        />
                        
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience
                            startYear={2017}
                            endYear={2019}
                            jobName="Personal Trainer"
                            jobDescription="I helped people get swol."
                        />
                    </Cell>
                </Grid>
            </div>
        ) 
    }
}

export default Resume;
