import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "8px",
        border: "1px solid #ccc",
        backgroundColor: "#f0f0f0",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
