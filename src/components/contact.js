import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Emailform from './emailform';

class Contact extends Component {
    render(){
        return(
            <div className="tile-body">
            <a className="anchor" id="contact"/>
                <h1>Contact Me</h1>
                <hr/>
                <p>Feel free to reach out via e-mail, phone call, or by simply filling out the form below. I'll get back to you as soon as I can!</p>
                <Grid className="contact-grid">
                    {/*Left Half*/}
                    <Cell col={6}>
                        <Emailform/>
                    </Cell>
                    {/*Right Half*/}
                    <Cell col={6}>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent >
                                        <a href="mailto:mattkuda@gmail.com" rel="noopener noreferrer"  target="_blank" class="nav-link" >
                                            <i className='fa fa-envelope fa-fw'/>
                                            mattkuda@gmail.com
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent >
                                        <a href="tel:978-618-9793" rel="noopener noreferrer"  target="_blank" class="nav-link">
                                            <i className='fa fa-phone fa-fw'/>
                                    (978) 618-9793
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent >
                                        <a href="https://www.google.com/maps/place/Boston,+MA/" rel="noopener noreferrer"  target="_blank" class="nav-link">
                                            <i className='fa fa-map-marker fa-fw'/>
                                            Boston, MA
                                        </a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        ) 
    }
}

export default Contact; 