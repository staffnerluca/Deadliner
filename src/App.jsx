import { useEffect, useState, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Task} from "./Task"


function App(){
    return(
        <div>
            <h1>Deadliner</h1>
            <Task id={1}/>
        </div>

    )
}

export default App