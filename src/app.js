
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import './styles/styles.scss';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Whoweare from './components/Whoweare';
import Careers from './components/Careers';
import English from './components/English';
import Mandarin from './components/Mandarin';

import Faq from './components/Faq';
import Tos from './components/Tos';

import ApplicationForm from './components/Applicationform';



console.log('app.js is running');

const VybeIndex = () => (
    <div>
            <Hero />
            <Header />
            <Container />
            <Footer />
            
    </div>

);

const EnglishCourse = () => (
    <div>
            <Header />
            <English />
            <Footer />
    </div>

);

const MandarinCourse = () => (
    <div>
            <Header />
            <Mandarin />
            <Footer />
    </div>

);

const AboutUs = () => (
    <div>
            <Header />
            <Whoweare />
            <Footer />
    </div>

);

const CareersPage = () => (
    <div>
            <Header />
            <Careers />
            <Footer />
    </div>

);

const FaQ = () => (
    <div>
            <Header />
            <Faq />
            <Footer />
    </div>

);

const Applicationform = () => (
    <div>
            <Header />
            <ApplicationForm />
            <Footer />
    </div>

);

const ToS = () => (
    <div>
            <Header />
            <Tos />
            <Footer />
    </div>

);

const routes = (
    <BrowserRouter>  
    <div>
        <Route path="/" component={VybeIndex} exact={true} />  
        <Route path="/english" component={EnglishCourse} exact={true} /> 
        <Route path="/mandarin" component={MandarinCourse} exact={true} /> 

        <Route path="/apply" component={Applicationform} exact={true} />  
        <Route path="/about-us" component={AboutUs} exact={true} /> 
        <Route path="/careers" component={CareersPage} exact={true} /> 
        <Route path="/faq" component={FaQ} exact={true} />  
        <Route path="/tos" component={ToS} exact={true} />  


    </div>
    </BrowserRouter>
)

const appRoot = document.getElementById('app');
ReactDOM.render(routes, appRoot);