import React from 'react';
import Clock from '../containers/Colck';
import CounterComponent from '../containers/CounterComponent';
import { NewComponent } from './NewComponent';
import FormPropsTextFields from './NewInput';

export default function Greeting() {
    return (
    <div>
        {/* <h1>Hello Guest</h1> */}
        
		<FormPropsTextFields />
    </div>)
};