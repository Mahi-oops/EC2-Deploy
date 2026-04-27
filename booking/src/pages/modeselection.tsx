import { useNavigate } from "react-router-dom";
import modeimg from "../assets/mode.jpg"; // 👈 your image

export default function ModeSelection() {
  const navigate = useNavigate();

  const modes = [
    { name: "Bus", icon: "🚌", path: "/bus" },
    { name: "Train", icon: "🚆", path: "/train" },
    { name: "Flight", icon: "✈️", path: "/flight" },
    { name: "Hotel", icon: "🏨", path: "/hotel" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white overflow-hidden relative">
      
      {/* 🌄 BACKGROUND IMAGE */}
            <img
              src={modeimg}
              className="absolute inset-0 w-full h-full object-cover scale-105"
              alt="Travel Background"
            />

      {/* 🔥 SAME glow style as login */}
      <div className="absolute w-[400px] h-[400px] bg-lime-400/20 blur-[120px] rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full bottom-10 right-10 animate-pulse"></div>

      {/* 🔥 Container */}
      <div className="relative z-10 text-center">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-2 tracking-wide">
          Devops Traveller
        </h1>

        <p className="text-gray-400 mb-10">
          Choose your deployment route 🚀
        </p>

        {/* 🔥 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {modes.map((mode) => (
            <button
              key={mode.name}
              onClick={() => navigate(mode.path)}
              className="
                p-8 rounded-[2rem]
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-2xl
                hover:bg-white/10
                hover:border-lime-400/40
                hover:scale-105
                transition duration-300
              "
            >
              <div className="text-4xl mb-3">{mode.icon}</div>

              <h2 className="text-lg font-semibold">
                {mode.name}
              </h2>

              {/* subtle glow line */}
              <div className="mt-3 h-[2px] bg-lime-400 opacity-0 hover:opacity-100 transition"></div>
            </button>
          ))}

        </div>

        {/* ✨ Footer */}
        <p className="mt-12 text-sm text-gray-500 italic">
          Deploy. Travel. Repeat.
        </p>

      </div>
    </div>
  );
}