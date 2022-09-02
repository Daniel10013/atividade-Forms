import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './Pages/Index/App'
import ShowData from './Pages/ShowData/ShowData'


export function AppRoutes() {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/show-data" element={<ShowData />} />
          </Routes>
      </Router>
    );
  }