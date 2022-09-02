import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Pages/Index/Index'
import ShowData from './Pages/ShowData/ShowData'

// component header
import Header from './Components/Header/Header'

function AppRoutes() {
    return (
      <Router>
      <Header />        
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/show-data" element={<ShowData />} />
          </Routes>
      </Router>
    );
  }

export default AppRoutes