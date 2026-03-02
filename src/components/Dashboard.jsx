import React, { useEffect, useState } from "react";
import MonitorChart from "./MonitorChart";

const Dashboard = ({ section }) => {
  const [status, setStatus] = useState("Online");
  const [response, setResponse] = useState(120);
  const [uptime, setUptime] = useState("99.98");

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 300) + 50;
      setResponse(random);
      setStatus(random < 250 ? "Online" : "Offline");
      setUptime((99 + Math.random()).toFixed(2));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ================= MONITORING =================
  if (section === "Monitoring") {
    return (
      <div className="dashboard-content">
        <div className="cards">
          <div className="card">
            <h4>Website Status</h4>
            <p className={status === "Online" ? "online" : "offline"}>
              {status}
            </p>
          </div>

          <div className="card">
            <h4>Response Time</h4>
            <p>{response} ms</p>
          </div>

          <div className="card">
            <h4>Uptime</h4>
            <p>{uptime}%</p>
          </div>
        </div>

        <MonitorChart response={response} />
      </div>
    );
  }

  // ================= INCIDENTS =================
  if (section === "Incidents") {
    return (
      <div className="section-container">
        <h3>Recent Incidents</h3>

        <div className="table">
          <div className="table-row header">
            <span>Date</span>
            <span>Issue</span>
            <span>Status</span>
          </div>

          <div className="table-row">
            <span>15 Feb 2026</span>
            <span>Server Downtime</span>
            <span className="offline">Resolved</span>
          </div>

          <div className="table-row">
            <span>10 Feb 2026</span>
            <span>High Response Delay</span>
            <span className="online">Fixed</span>
          </div>

          <div className="table-row">
            <span>05 Feb 2026</span>
            <span>Database Crash</span>
            <span className="offline">Closed</span>
          </div>
        </div>
      </div>
    );
  }

  // ================= STATUS PAGES =================
  if (section === "Status Pages") {
    return (
      <div className="section-container">
        <h3>Public Status Overview</h3>

        <div className="card">
          <h4>Main Website</h4>
          <p className="online">Operational</p>
        </div>

        <div className="card">
          <h4>API Services</h4>
          <p className="online">Operational</p>
        </div>

        <div className="card">
          <h4>Payment Gateway</h4>
          <p className="online">Operational</p>
        </div>
      </div>
    );
  }

  // ================= MAINTENANCE =================
  if (section === "Maintenance") {
    return (
      <div className="section-container">
        <h3>Scheduled Maintenance</h3>

        <div className="card">
          <p>📅 20 Feb 2026 – Server Infrastructure Upgrade</p>
        </div>

        <div className="card">
          <p>📅 28 Feb 2026 – Security Patch Deployment</p>
        </div>

        <div className="card">
          <p>📅 05 Mar 2026 – Database Optimization</p>
        </div>
      </div>
    );
  }

  // ================= TEAM MEMBERS =================
  if (section === "Team Members") {
    return (
      <div className="section-container">
        <h3>Monitoring Team</h3>

        <div className="card">
          <p>👨‍💻 Raj – System Administrator</p>
        </div>

        <div className="card">
          <p>👩‍💻 Priya – DevOps Engineer</p>
        </div>

        <div className="card">
          <p>👨‍💻 Arjun – Backend Developer</p>
        </div>

        <div className="card">
          <p>👩‍💻 Sneha – Cloud Engineer</p>
        </div>
      </div>
    );
  }

  // ================= INTEGRATIONS API =================
  if (section === "Integrations API") {
    return (
      <div className="section-container">
        <h3>Connected Integrations</h3>

        <div className="card">
          🔗 Slack Notifications – Connected
        </div>

        <div className="card">
          🔗 Email Alerts – Enabled
        </div>

        <div className="card">
          🔗 Webhook Integration – Active
        </div>

        <div className="card">
          🔗 SMS Alerts – Connected
        </div>
      </div>
    );
  }

  return null;
};

export default Dashboard;
