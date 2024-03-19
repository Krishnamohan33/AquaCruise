import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const Navbar = React.lazy(() => import('./Navbar'));
const Footer = React.lazy(() => import('./Footer'));
const Homepage = React.lazy(() => import('./Homepage'));
const Dashboard = React.lazy(() => import('./Dashboard'));
const About = React.lazy(() => import('./About'));
const Login = React.lazy(() => import('./Login'));
const Register = React.lazy(() => import('./Register'));
const ForgotPassword = React.lazy(() => import('./ForgotPassword'));
const AdminLogin = React.lazy(() => import('./Admin/adminlogin')); 
const AdminDashboard = React.lazy(() => import('./Admin/admindashboard')); 

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forget" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
