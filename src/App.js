import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HelpCenter from "./pages/HelpCenter/HelpCenter.jsx";
import Subscription from "./pages/Subscription/Subscription.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Account from "./pages/Account/Account.jsx";
import Terms from "./pages/Terms/Terms.jsx";
import Privacy from "./pages/Privacy/Privacy.jsx";
import Password from "./pages/Password/Password.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import DashboardData from "./pages/DashboardData/DashboardData.jsx";
import NewFile from "./pages/NewFile/NewFile.jsx";
import DashboardContent from "./pages/Dashboard/Dashboard.jsx";
import Layout from "./shared/Layout.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Layout><DashboardContent /></Layout>}/>
        <Route path="/dashboarddata" element={<Layout><DashboardData /></Layout>}/>
        <Route path="/subscriptions" element={<Layout><Subscription /></Layout>}/>
        <Route path="/helpcenter" element={<Layout><HelpCenter /></Layout>}/>
        <Route path="/profile" element={<Layout><Profile /></Layout>}/>
        <Route path="/account" element={<Layout><Account /></Layout>}/>
        <Route path="/terms" element={<Layout><Terms /></Layout>}/>
        <Route path="/privacy" element={<Layout><Privacy /></Layout>}/>
        <Route path="/password" element={<Layout><Password /></Layout>}/>
        <Route path="/newfile" element={<Layout><NewFile /></Layout>}/>
        <Route path="/notfound" element={<Layout><NotFound /></Layout>}/>
      </Routes>
    </div>
  );
}

export default App;
