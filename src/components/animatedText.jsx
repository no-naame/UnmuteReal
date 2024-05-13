import React from "react";
import "../../src/style.css";
const AnimatedText = () => {
  return (
    <div className="global">
      {" "}
      {/* Global Styles */}
      <body>
        {" "}
        {/* Fix for body element in React */}
        <div className="center">
          {" "}
          {/* Centered Positioning */}
          <div className="table">
            {" "}
            {/* Table Container */}
            <div className="monitor-wrapper">
              {" "}
              {/* Monitor Wrapper */}
              <div className="monitor">
                {" "}
                {/* Monitor Screen */}
                <p>
                  Why UnMute? Why UnMute? Why UnMute? Why UnMute? Why UnMute?
                  Why UnMute? Why UnMute? Why UnMute? Why UnMute? Why UnMute?
                  Why UnMute? Why UnMute?
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default AnimatedText;
