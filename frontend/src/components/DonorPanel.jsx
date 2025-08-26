import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHome, FaDonate, FaList, FaUser, FaLock, FaSignOutAlt } from "react-icons/fa";
import Card from "./Card.jsx";
import './DonarPanel.css';
import "./Navbar.jsx";

const DonorPanel = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Unauthorized access. Redirecting to login.");
            navigate("/");
            return;
        }

        // Verify token with the backend
        const verifyToken = async () => {
            try {
                const response = await axios.get("http://localhost:5000/verify", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log("Verified user:", response.data);
            } catch (error) {
                console.error("Verification failed:", error);
                alert("Unauthorized access. Redirecting to login.");
                navigate("/");
            }
        };

        verifyToken();
    }, [navigate]);

    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Donor Panel</h2>
            <ul>
                <li>
                    <FaHome className="icon" /> Dashboard
                </li>
                <li>
                    <FaDonate className="icon" /> Donate Now
                </li>
                <li>
                    <FaDonate className="icon" /> Donate Fund
                </li>
                <li>
                    <FaList className="icon" /> My All Donations
                </li>
                <li>
                    <FaList className="icon" /> Manage Donation
                </li>
                <li>
                    <FaUser className="icon" /> Profile
                </li>
                <li>
                    <FaLock className="icon" /> Change Password
                </li>
                <li>
                    <FaSignOutAlt className="icon" /> Logout
                </li>
            </ul>
        </div>
    );
};

export default DonorPanel;
