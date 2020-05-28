import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    toggleCategories(){

        //WEATHER APP
        if(this.state.activeTab === 0){
            return(
                <div>
                    <Grid className="project-grid">
                    {/*Left Half*/}
                    <Cell col={6}>
                        <img src="../../assets/Weather-App-Gif.gif" alt="Matt_Kuda_picture"
                        style={{width:'95%', marginTop: '2em', textAlign: 'center'}}
                        />
                    </Cell>
                    {/*Right Half*/}
                    <Cell col={6}>
                        <div style={{width: "90%"}}>
                        <h2>Weather App</h2>
                        <hr/>
                        <p style={{ textAlign: "justify"}}> Makes api calls to the Open Weather Map to return the current weather data of any specified location. Approiate weather icons are displayed according the conditions, the background becomes warm and cool with the temperature, and special animations are included for rain and snow. It uses the Modern Javascript Fetch AP along with React hooks and conditonals.</p>
                        <div className="project-buttons-box">
                            <a href="https://weather-application-c8605.web.app" class="project-button" target="_blank">Live Demo <i className="fa fa-external-link" aria-hidden="true"/></a>
                            <a href="https://github.com/mattkuda/Weather-Application" class="project-button" target="_blank">View Source   <i className="fa fa-github-square" aria-hidden="true"/></a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
                </div>
            )
        }


        if(this.state.activeTab === 1){
            return(
                <div>
                    <Grid className="project-grid">
                    {/*Left Half*/}
                    <Cell col={6}>
                        <img src="../../assets/Portfolio_Gif.gif" alt="Matt_Kuda_picture"
                        style={{width:'95%', marginTop: '2em', textAlign: 'center'}}
                        />
                    </Cell>
                    {/*Right Half*/}
                    <Cell col={6}>
                        <div style={{width: "90%"}}>
                        <h2>My Portfolio</h2>
                        <hr/>
                        <p style={{ textAlign: "justify"}}>This page! Responsive website built with ReactJS and Material Design. Its clean design includes a side navigation drawer, tab options for this project section, and congruent CSS styling across its various components. The contact form below validates user inputs before it is sent to Google Firebase, which was a tremendous learning experience for my knowledge on back-end development.</p>
                        <div className="project-buttons-box">
                            <a href="https:mattkuda.com" class="project-button" target="_blank">Live Demo <i className="fa fa-external-link" aria-hidden="true"/></a>
                            <a href="https://github.com/mattkuda/My-Portfolio" class="project-button" target="_blank">View Source   <i className="fa fa-github-square" aria-hidden="true"/></a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
                </div>
            )
        }

        
        if(this.state.activeTab === 2){
            return(
                <div>
                    <Grid className="project-grid">
                    {/*Left Half*/}
                    <Cell col={6}>
                        <img src="../../assets/Todo-Gif.gif" alt="Matt_Kuda_picture"
                        style={{width:'95%', marginTop: '2em', textAlign: 'center'}}
                        />
                    </Cell>
                    {/*Right Half*/}
                    <Cell col={6}>
                        <div style={{width: "90%"}}>
                        <h2>To-Do List</h2>
                        <hr/>
                        <p style={{ textAlign: "justify"}}>A simple To-Do List application that allows the user to enter and delte tasks, as well as mark them as complete. This project tested my implementation of the React fundamentals such as components, state, props, JSX, events.</p>
                        <div className="project-buttons-box">
                            <a href="https://todo-list-1f30e.web.app" class="project-button" target="_blank">Live Demo <i className="fa fa-external-link" aria-hidden="true" /></a>
                            <a href="https://github.com/mattkuda/To-Do-List" class="project-button" target="_blank">View Source   <i className="fa fa-github-square" aria-hidden="true"/></a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
                </div>
            )
        }
    }

    
    
    render(){
        return(
            <div className="tile-body">
            <a className="anchor" id="projects"/>
            <h1>Projects</h1>
                <div className="catergory-tabs">
                    <Tabs activeTab={this.state.activeTab} style={{overflow:'auto'}} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                        <Tab>Weather App</Tab>
                        <Tab>My Portfolio</Tab>
                        <Tab>To-do List</Tab>
                    </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="conent">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                
                </div>
            </div>
        ) 
    }
}

export default Projects;