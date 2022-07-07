import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

import Header from './components/Header';
import Dashboard from "./pages/Dashboard";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/:id" element={<BlogPage />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
