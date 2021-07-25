
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import './styles/styles.scss';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import Languages from './components/Languages';

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
            <Header>
                <ul>
                    <li class="languages"><a href="/#our-languages">Languages</a></li>
                    <li class=""><a href="/#about-us">Who We Are</a></li>
                    <li class="selected"><a href="/">What We Do</a></li>  
                </ul>
                
            </Header>
            <Container />
            <Footer />
            
    </div>

);




const EnglishCourse = () => (
    <div>
            <Header>
                <ul>
                    <li class="selected languages"><a href="/#our-languages">Languages</a></li>
                    <li class=""><a href="/#about-us">Who We Are</a></li>
                    <li class=""><a href="/">What We Do</a></li>  
                </ul>
            </Header>
            <English />
            <Footer />
    </div>

);

const MandarinCourse = () => (
    <div>
            <Header>
                <ul>
                    <li class="selected languages"><a href="/#our-languages">Languages</a></li>
                    <li class=""><a href="/#about-us">Who We Are</a></li>
                    <li class=""><a href="/">What We Do</a></li>  
                </ul>
            </Header>
            <Mandarin />
            <Footer />
    </div>

);

const AboutUs = () => (
    <div>
            <Header>
                <ul>
                    <li class="languages"><a href="/#our-languages">Languages</a></li>
                    <li class="selected"><a href="/#about-us">Who We Are</a></li>
                    <li class=""><a href="/">What We Do</a></li>  
                </ul>
            </Header>
            <Whoweare />
            <Footer />
    </div>

);

const CareersPage = () => (
    <div>
            <Header>
                <ul>
                    <li class="languages"><a href="/#our-languages">Languages</a></li>
                    <li class=""><a href="/#about-us">Who We Are</a></li>
                    <li class=""><a href="/">What We Do</a></li>  
                </ul>
            </Header>
            <Careers />
            <Footer />
    </div>

);

const FaQ = () => (
    <div>
            <Header>
                <ul>
                    <li class="languages"><a href="/#our-languages">Languages</a></li>
                    <li class=""><a href="/#about-us">Who We Are</a></li>
                    <li class=""><a href="/">What We Do</a></li>  
                </ul>
            </Header>
            <Faq />
            <Footer />
    </div>

);

const OurLanguages = () => (
    <div>
            <Header>
                <ul>
                    <li class="languages"><a href="/#our-languages">Languages</a></li>
                    <li class=""><a href="/#about-us">Who We Are</a></li>
                    <li class=""><a href="/">What We Do</a></li>  
                </ul>
            </Header>
                <Languages />
            <Footer />
    </div>

);

const Applicationform = () => (
    <div>
            <Header>
                <ul>
                    <li class="languages"><a href="/#our-languages">Languages</a></li>
                    <li class=""><a href="/#about-us">Who We Are</a></li>
                    <li class=""><a href="/">What We Do</a></li>  
                </ul>
            </Header>
            <ApplicationForm />
            <Footer />
    </div>

);

const ToS = () => (
    <div>
            <Header>
                <ul>
                    <li class="languages"><a href="/#our-languages">Languages</a></li>
                    <li class=""><a href="/#about-us">Who We Are</a></li>
                    <li class=""><a href="/">What We Do</a></li>  
                </ul>
            </Header>
            <Tos />
            <Footer />
    </div>

);

const routes = (
    <HashRouter>  
    <div>
        <Route path="/" component={VybeIndex} exact={true} />  
        <Route path="/our-languages" component={OurLanguages} exact={true} />
        <Route path="/english" component={EnglishCourse} exact={true} /> 
        <Route path="/mandarin" component={MandarinCourse} exact={true} /> 

        <Route path="/apply" component={Applicationform} exact={true} />  
        <Route path="/about-us" component={AboutUs} exact={true} /> 
        <Route path="/careers" component={CareersPage} exact={true} /> 
        <Route path="/faq" component={FaQ} exact={true} />  
        <Route path="/tos" component={ToS} exact={true} />  


    </div>
    </HashRouter>
)

const appRoot = document.getElementById('app');
ReactDOM.render(routes, appRoot);