import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/old-main';
import { Link } from 'react-router-dom';
import Landing from './components/landing';
import MyFooter from './components/footer';

function App() {
  return (
    <div className="demo-big-content">
    <Layout fixedHeader style={{background: 'url("../assets/boston.jpg") top / cover'}} >
        <Header scroll className="header-color" style={{background:'#444444'}} title={<a style={{textDecoration: 'none', color:'white'}} href="#welcome" scroll>Matt Kuda</a>}>
            <Navigation>
                <a href='#aboutme' style={{fontSize: '20px'}}>About Me</a>
                <a href='#projects' style={{fontSize: '20px'}}>Projects</a>
                <a href='#contact' style={{fontSize: '20px'}}>Contact</a>
                
                {/*Old Formatting
                <Link style={{fontSize: '20px'}} to="/projects">Projects</Link>
                <Link style={{fontSize: '20px'}} to="/contact">Contact</Link>
                */}
            </Navigation>
        </Header>

        {/* OPTIONAL DRAWER */}
        <Drawer style={{position: 'fixed'}} title={<a style={{textDecoration: 'none', color:'black'}} href="#welcome">Matt Kuda</a>}>
            <Navigation>
                <a href='#aboutme' style={{fontSize: '20px'}}>About Me</a>
                <a href='#projects' style={{fontSize: '20px'}}>Projects</a>
                <a href='#contact' style={{fontSize: '20px'}}>Contact</a>
            </Navigation>
        </Drawer>
        
        <Content style={{flex: "1 0 auto"}}>
            <div className="page-content" />
            <Landing/>
        </Content>
        <MyFooter/>
    </Layout>
    
</div>
  );
}

export default App;
