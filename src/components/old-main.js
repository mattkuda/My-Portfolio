/* eslint-disable no-unused-expressions */
import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from './landing';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
    <Switch >
        <Route exact path="/" component={Landing} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;