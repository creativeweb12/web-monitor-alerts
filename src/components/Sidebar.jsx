import React from "react";
import { FaServer, FaExclamationTriangle, FaTools, FaUsers, FaPlug } from "react-icons/fa";

const menuItems = [
  "Monitoring",
  "Incidents",
  "Status Pages",
  "Maintenance",
  "Team Members",
  "Integrations API"
];

const Sidebar = ({ active, setActive }) => {
  return (
    <div className="sidebar">
      <h2 className="logo">⚡Real-Live Time</h2>
      {menuItems.map(item => (
        <div
          key={item}
          className={`menu-item ${active === item ? "active" : ""}`}
          onClick={() => setActive(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
