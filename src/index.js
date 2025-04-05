import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import your custom CSS

function App() {
  return (
    <div className="main-container">
      {/* Top Center Link */}
      <div className="top-link">
        <a href="#" target="_blank" rel="noopener noreferrer">
          klg.co.in
        </a>
      </div>

      <div className="overlay">
        <div className="title-box">
          <h1>Maintenance mode is on</h1>
          <p>Site will be available soon.Thankyou for your patience!</p>
        </div>
      </div>

      {/* Bottom Center Link */}
      <div className="bottom-link">
        <a href="#" >klg.co.in 2025</a>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
