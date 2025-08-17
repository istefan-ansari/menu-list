import React from "react";
import { QRCodeSVG } from "qrcode.react"; // ✅ named import

const QRCodePage = () => {
  const menuUrl = "http://localhost:5173/menu";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Scan to View Our Menu
      </h1>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <QRCodeSVG value={menuUrl} size={200} />
      </div>
      <p style={{ marginTop: "1rem", color: "#555" }}>
        Point your phone camera here 📱
      </p>
    </div>
  );
};

export default QRCodePage;
