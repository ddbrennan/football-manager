import React from "react";

class Roster extends React.Component {

  render() {
    return (
      <div id="body-content">
        <div id="depth-chart-box">
          <div className="depth-chart-header">
            <span>OFFENSE</span>
            <span>DEFENSE</span>
          </div>
          <div id="depth-chart">
            <div className="position-depth">
              <span>QB</span>
              <div className="split-line"></div>
              <div className="depth-spot"></div>
              <div className="depth-spot"></div>
              <div className="depth-spot"></div>
            </div>
          </div>
        </div>
        <div id="roster-box">
          <div id="roster-header">
            <span>POS</span>
            <span>NAME</span>
            <span>OVR</span>
          </div>
          <div id="roster">
            <span>QB</span>
            <span>TOM BRADY</span>
            <span>79</span>
          </div>
        </div>
      </div>
    )
  }
 }
export default Roster
