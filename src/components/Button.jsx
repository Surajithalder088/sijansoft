import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/start-project")}
      
      className="relative z-999 group cursor-pointer inline-flex w-fit items-center justify-center overflow-hidden rounded-xl p-[2px]"
    >
      {/* Animated Border */}
      <span className="absolute inset-0 rounded-xl bg-[conic-gradient(from_0deg,transparent_0deg,white_60deg,transparent_120deg)] animate-spin-slow"></span>

      {/* Main Button */}
      <div className="relative z-10 rounded-xl bg-black px-6 py-3 transition-all duration-300 group-hover:bg-zinc-900">
        <p className="text-white text-[10px] md:text-base font-medium tracking-wide">
          Start Project
        </p>
      </div>
    </div>
  );
};

export default Button;