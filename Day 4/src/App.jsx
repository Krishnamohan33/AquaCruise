import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LazyLoading from './assets/lazyloading';

const Navbar = React.lazy(() => import('./Navbar'));
const Footer = React.lazy(() => import('./Footer'));
const Homepage = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./Homepage")), 4000)
    )
);

const Dashboard = React.lazy(() => import('./Dashboard'));
const About = React.lazy(() => import('./About'));
const Login = React.lazy(() => import('./Login'));
const Register = React.lazy(() => import('./Register'));
const Services = React.lazy(() => import('./Service'));
const Pricing = React.lazy(() => import('./Pricing'));
const Contact = React.lazy(() => import('./Contactus'));
const ForgotPassword = React.lazy(() => import('./ForgotPassword'));
const AdminLogin = React.lazy(() => import('./Admin/adminlogin')); 
const AdminDashboard = React.lazy(() => import('./Admin/admindashboard')); 
const Reservation = React.lazy(() => import('./Boathousebooking')); 
const Bill = React.lazy(() => import('./Bill')); 
const Payment = React.lazy(() => import('./PaymentPage')); 
const Privacy = React.lazy(() => import('./PrivacyPolicyPage')); 
const License = React.lazy(() => import('./LicensingPage')); 

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div><LazyLoading /></div>}>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forget" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/service" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-reservation" element={<Reservation />} />
          <Route path="/payment" element={<Bill />} />
          <Route path="/razorpay" element={<Payment />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/license" element={<License />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
