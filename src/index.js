import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import {HookApp} from './HookApp'


ReactDOM.render(
    <CounterWithCustomHook />,
  document.getElementById('root')
);

