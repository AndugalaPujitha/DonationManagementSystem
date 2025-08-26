import React from "react";
import { Link } from "react-router-dom";
import "./VolunteerPanel.css";
import "./Navbar.jsx";
import Card from "./Card.jsx";
import "./Dashboard.jsx";
import Dashboard from "./Dashboard.jsx";

const Sidebar = () => {
  return (
    <div>
      <Card/>
      <Dashboard/>
    <div className="sidebar bg-purple text-white">
      
      <h3 className="p-3">Volunteer Panel</h3>
      <ul className="list-unstyled">
        <li><Link to="/" className="text-white">Dashboard</Link></li>
        <li><Link to="/collection-request" className="text-white">Collection Request</Link></li>
        <li><Link to="/history" className="text-white">Collection History</Link></li>
        <li><Link to="/profile" className="text-white">Profile</Link></li>
        <li><Link to="/change-password" className="text-white">Change Password</Link></li>
        <li><Link to="/logout" className="text-white">Logout</Link></li>
      </ul>
     
    </div>
    </div>
  );
};

export default Sidebar;