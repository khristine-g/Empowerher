import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ViewAllProjects from './Components/ViewAllProjects';
import ProjectDetail from './Components/ProjectDetail';
import ContributionForm from './Components/ContributionForm';
import Signup from './Components/Signup';
import Login from './Components/Login';
import LearnMore from './Components/LearnMore';
import SubmitProject from './Components/SubmitProject'; // Updated import path
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/projects" element={<ViewAllProjects />} /> {/* Updated route */}
        <Route path="/projects/:id/contribute" element={<ContributionForm />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/submit-project" element={<SubmitProject />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
