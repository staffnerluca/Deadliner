import React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Task } from "./Task";
import { Deadliner } from "./Deadliner";
import { Test } from "./Test";

function App() {
  const AppRoutes = [
    {
      path: "/test",
      element: <Test />
    },
    {
      path: "/",
      element: <Deadliner />
    },
    {
      path: "/task",
      element: <Task />
    }
  ]

  return (
    <Routes>
      {AppRoutes.map((route, index) => {
        const { element, ...rest } = route;
        return <Route key={index} {...rest} element={element} />;
      })}
    </Routes>
  )
}

export default App;
