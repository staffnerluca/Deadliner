import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Task } from "./Task";
import { Deadliner } from "./Deadliner";
import { Test } from "./Test";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const AppRoutes = [
    {
      path: "/Test",
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
  ];

  return (
    <Router>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
