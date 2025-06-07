import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routers from './routers';
const App = () => {
  return (
    <Router>
      {/* <Home /> */}
      <Routes>
        {routers.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={<item.element />}
          />
        ))}
      </Routes>

    </Router>
  )
}

export default App
