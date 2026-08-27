import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: "40px", 
          textAlign: "center", 
          color: "white", 
          fontFamily: "monospace",
          backgroundColor: "#000",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <h2>[ SYSTEM_CRITICAL_FAILURE ]</h2>
          <p>The digital ecosystem has encountered an unrecoverable error.</p>
          <button 
            className="btn" 
            onClick={() => window.location.reload()}
            style={{ marginTop: "20px" }}
          >
            [ REBOOT_SYSTEM ]
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
