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
import DeleteAccountModal from "./components/DeleteAccountModal/DeleteAccountModal.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/" element={<DeleteAccountModal />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subscriptions" element={<Subscription />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </div>
  );
}

export default App;
