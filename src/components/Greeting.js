import React from 'react';
import Clock from '../containers/Colck';
import CounterComponent from '../containers/CounterComponent';

export default function Greeting() {
    return (
    <div>
        <h1>Hello Guest</h1>
        <Clock />
        <CounterComponent />
    </div>)
};