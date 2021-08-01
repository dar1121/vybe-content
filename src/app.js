
import React  from 'react';
import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import './styles/styles.scss';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import Languages from './components/Languages';
import Loader from './components/Loader';

import Hero from './components/Hero';
import Whoweare from './components/Whoweare';
import Careers from './components/Careers';
import English from './components/English';
import Mandarin from './components/Mandarin';

import { LanguageProvider } from './context/Language';

import Faq from './components/Faq';
import Tos from './components/Tos';

import ApplicationForm from './components/Applicationform';

 

console.log('app.js is running');

const VybeIndex = () =>    {

 const [loading, setLoading] = useState(true);
useEffect(() => {
  const loadData = async () => {
    await new Promise((r) => setTimeout(r, 2000));
    setLoading((loading) => !loading);
  };       
  loadData();
}, [])
if (loading) {
    return <div><Loader /></div>
}
  
else {
    return <div>
            <Hero />
            <Container />
            <Footer />
            
    </div>

};
}




const EnglishCourse = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading) => !loading);
      };       
      loadData();
    }, [])
    if (loading) {
        return <div><Loader /></div>
    }
      
    else {
        return <div>
            <English />
            <Footer />
    </div>

};

}

const MandarinCourse  = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading) => !loading);
      };       
      loadData();
    }, [])
    if (loading) {
        return <div><Loader /></div>
    }
      
    else {
    return <div>
            <Mandarin />
            <Footer />
    </div>

    };
}

const AboutUs = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading) => !loading);
      };       
      loadData();
    }, [])
    if (loading) {
        return <div><Loader /></div>
    }
      
    else {
    return <div>
            <Whoweare />
            <Footer />
    </div>

    };
}

const CareersPage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading) => !loading);
      };       
      loadData();
    }, [])
    if (loading) {
        return <div><Loader /></div>
    }
      
    else {
    return <div>
            <Careers />
            <Footer />
    </div>

    };
}

const FaQ = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading) => !loading);
      };       
      loadData();
    }, [])
    if (loading) {
        return <div><Loader /></div>
    }
      
    else {
    return <div>
            <Faq />
            <Footer />
    </div>

    };
}




const ToS = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading) => !loading);
      };       
      loadData();
    }, [])
    if (loading) {
        return <div><Loader /></div>
    }
      
    else {
    return <div>
            <Tos />
            <Footer />
    </div>

    };}

const routes = (
    <LanguageProvider>

    <Router>  
    <div>
        <Route path="/" component={VybeIndex} exact={true} />  
        <Route path="/english" component={EnglishCourse} exact={true} /> 
        <Route path="/mandarin" component={MandarinCourse} exact={true} /> 
        <Route path="/about-us" component={AboutUs} exact={true} /> 
        <Route path="/careers" component={CareersPage} exact={true} /> 
        <Route path="/faq" component={FaQ} exact={true} />  
        <Route path="/tos" component={ToS} exact={true} />  


    </div>
    </Router>
    </LanguageProvider>
)

const appRoot = document.getElementById('app');
ReactDOM.render(routes, appRoot);