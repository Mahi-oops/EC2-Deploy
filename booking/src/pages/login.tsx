import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/loginpage.jpg"; // 👈 your image

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* 🌄 BACKGROUND IMAGE */}
      <img
        src={bgImage}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        alt="Travel Background"
      />

      {/* 🌑 DARK GRADIENT OVERLAY (IMPORTANT for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      {/* ✨ CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">

        {/* 🌟 TITLE */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-center">
          Devops Traveller
        </h1>

        {/* 🧠 GITA QUOTE */}
        <p className="mt-4 text-gray-300 text-center max-w-xl italic text-sm md:text-base">
          “You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.”
          <br />
          <span className="text-lime-400"> - Bhagavad Gita</span>
        </p>

        {/* 💎 LOGIN CARD */}
        <div className="mt-10 w-full max-w-md p-8 rounded-[2rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">

          <input
            className="w-full mb-4 p-4 rounded-2xl bg-white/10 outline-none 
            focus:ring-2 focus:ring-lime-400 transition"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full mb-6 p-4 rounded-2xl bg-white/10 outline-none 
            focus:ring-2 focus:ring-lime-400 transition"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={() => navigate("/mode")}
            className="w-full py-4 rounded-2xl bg-lime-400 text-black font-semibold 
            hover:scale-105 hover:shadow-[0_0_20px_rgba(163,230,53,0.8)] transition"
          >
            Start Journey 🚀
          </button>
        </div>

        {/* ✨ FOOTER LINE */}
        <p className="mt-8 text-gray-400 text-sm">
          Where journeys meet pipelines ☁️
        </p>
      </div>
    </div>
  );
}