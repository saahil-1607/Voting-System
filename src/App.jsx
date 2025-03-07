import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import VoteAnalytics from "./pages/VoteAnalytics";
import VoterSignup from "./pages/VoterSignup";
import ElectionControl from "./pages/ElectionControl";
import Voting from "./pages/Voting";

function App() {
  return (
      <Router>
        <div>
          <Routes>
            {/* <Route path="/" element={<AdminLogin />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<VoteAnalytics />} />
            <Route path="/" element={<ElectionControl />} />
            <Route path="/authentication" element={<VoterSignup />} />
            <Route path="/vote" element={<Voting />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
