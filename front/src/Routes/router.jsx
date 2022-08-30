import React from "react";
import Index from '../Pages/Index/index'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function AppRoutes(){
    return(
    <Router>
      <Routes>      
        <Route path="/" element={<Index />}/>
      </Routes>
    </Router>
    )
}

export default AppRoutes