// src/pages/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header text-center">
        <button onClick={toggleSidebar} className="btn btn-dark">
          <MenuOutlinedIcon />
        </button>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <HomeOutlinedIcon />
            {!collapsed && " Home"}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/surat">
            <ImportContactsOutlinedIcon />
            {!collapsed && " Al-Qur'an"}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/asma">
            <SubtitlesOutlinedIcon />
            {!collapsed && " Asmaul Husna"}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tahlil">
            <ReceiptOutlinedIcon />
            {!collapsed && " Tahlil"}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/faq">
            <HelpOutlineOutlinedIcon />
            {!collapsed && " FAQ"}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/calendar">
            <CalendarTodayOutlinedIcon />
            {!collapsed && " Calendar"}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
