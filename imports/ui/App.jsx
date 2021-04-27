import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Task } from './Task.jsx';


export const App = () => (
  <div>
    <h1>Bem Vindo ao Meteor!</h1>
    <Hello/>
    <Info/>
    <Task/>
  </div>
);
