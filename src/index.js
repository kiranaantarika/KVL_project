import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import your custom CSS

function App() {
  return (
    <div className="main-container">
      <div className="overlay">
        <div className="title-box">
          <h1>Maintenance Mode Is On</h1>
          <p>Site will be available soon. Thankyou for your patience</p>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
