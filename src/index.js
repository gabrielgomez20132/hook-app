import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { FormWithCustomHooks } from './components/02-useEffect/FormWithCustomHooks';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import {HookApp} from './HookApp'


ReactDOM.render(
    <FormWithCustomHooks />,
  document.getElementById('root')
);

