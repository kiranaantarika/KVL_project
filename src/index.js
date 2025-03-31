import React from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";

function App() {
  return (
    <div style={styles.container}>
      {/* Loading Animation Effect */}
      <motion.h1
        style={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🚀 We Are Launching Soon!
      </motion.h1>

      <motion.p
        style={styles.text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Our website is under progress. Stay tuned for something amazing!  
      </motion.p>

      {/* Loading Dots Animation */}
      <motion.div
        style={styles.loading}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Loading...
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#ffffff", // White background
    color: "#ff9800", // Light orange text
    fontFamily: "Arial, sans-serif",
    overflow: "hidden", // Prevents scrolling
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.2rem",
    maxWidth: "500px",
  },
  loading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "20px",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
