import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        color: "white",
        "textAlign": "center"
      }}
    >
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            <a
              href="https://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
