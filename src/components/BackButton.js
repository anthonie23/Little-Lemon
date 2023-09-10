import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="w-12-h-12 rounded-full bg-yellow-400 px-3 py-1 hover:bg-yellow-500 transition-all duration-200 font-medium"
    >
      back
    </button>
  );
};

export default BackButton;
