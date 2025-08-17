import React from "react";

const MenuPage = () => {
  const menuItems = [
    { id: 1, name: "Margherita Pizza", price: "$10" },
    { id: 2, name: "Pasta Alfredo", price: "$12" },
    { id: 3, name: "Caesar Salad", price: "$8" },
    { id: 4, name: "Tiramisu", price: "$6" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        🍽️ Our Menu
      </h1>
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {menuItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <span style={{ fontSize: "1rem" }}>{item.name}</span>
            <span style={{ fontWeight: "bold" }}>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
