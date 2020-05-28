import React, {Component} from 'react';
import {Footer, FooterSection, FooterLinkList} from 'react-mdl';


class MyFooter extends Component {
    render(){
        return(
            <div>
            <div className="footer">
                
                    {/*LinkedIn*/}

                        <a href="https://www.linkedin.com/in/matthewkuda/" rel="noopener noreferrer"  target="_blank" style={{fontSize: '20px'}}>
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </a>
                        {/*GitHub*/}
                        <a href="https://github.com/mattkuda" rel="noopener noreferrer"  target="_blank" style={{fontSize: '20px'}}>
                            <i className="fa fa-github-square" aria-hidden="true"/>
                        </a>

                        <p>Built with ReactJS by Matt Kuda © 2020</p>
                        
                 
            </div>
            {/*
            <Footer size="mini"  >
                <FooterSection  type="left" style={{fontSize: '20px'}} logo="© Matt Kuda's Portfolio. All rights reserved.">
                    <FooterLinkList >
                        
                        {/*LinkedIn
                        <a href="https://www.linkedin.com/in/matthewkuda/" rel="noopener noreferrer"  target="_blank" style={{fontSize: '20px'}}>
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </a>
                        {/*GitHub
                        <a href="https://github.com/mattkuda" rel="noopener noreferrer"  target="_blank" style={{fontSize: '20px'}}>
                            <i className="fa fa-github-square" aria-hidden="true"/>
                        </a>
                        
                    </FooterLinkList>
                </FooterSection>
            </Footer>
            */}
            </div>
        )
    }
}

export default MyFooter;