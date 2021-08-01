import React from 'react';
import { Text, LanguageContext } from '../context/Language';
import Header from './Header';


export default class Loader extends React.Component{
    render() {
        return <div>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    }
}