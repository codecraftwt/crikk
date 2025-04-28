import './App.css';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import {Routes, Route} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import HelpCenter from './pages/HelpCenter/HelpCenter.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/subscriptions" element={<Subscriptions />} /> */}
        <Route path="/helpcenter" element={<HelpCenter />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </div>
  );
}

export default App;
