import React from "react";

class Navbar extends React.Component {

  render() {
    return (
      <div id="navbar">
        <div className="nav-item">ROSTER</div>
        <div className="nav-item">FREE AGENTS</div>
        <div className="nav-item">SCHEDULE</div>
        <div className="nav-item">TRADE</div>
        <div className="nav-item">STATS</div>
        <div className="nav-item">DRAFT</div>
        <div className="nav-item">STAFF</div>
        <div className="nav-item">LEAGUE</div>
        <div className="nav-item">TRAINING</div>
      </div>
    )
  }
 }
export default Navbar
