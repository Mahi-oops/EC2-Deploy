import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/loginpage.jpg";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary only.
    // We will replace this with backend authentication.
    navigate("/mode");
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* BACKGROUND IMAGE */}
      <img
        src={bgImage}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        alt="Travel Background"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">

        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-center">
          Devops Traveller
        </h1>

        {/* GITA QUOTE */}
        <p className="mt-4 text-gray-300 text-center max-w-xl italic text-sm md:text-base">
          “You have a right to perform your prescribed duties, but you are not
          entitled to the fruits of your actions.”
          <br />
          <span className="text-lime-400">
            - Bhagavad Gita
          </span>
        </p>

        {/* AUTH CARD */}
        <div className="mt-10 w-full max-w-md p-8 rounded-[2rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">

          {/* LOGIN / SIGNUP TABS */}
          <div className="flex mb-8 rounded-2xl bg-white/10 p-1">

            <button
              type="button"
              onClick={() => setIsSignup(false)}
              className={`w-1/2 py-3 rounded-xl font-semibold transition ${
                !isSignup
                  ? "bg-lime-400 text-black"
                  : "text-gray-300"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setIsSignup(true)}
              className={`w-1/2 py-3 rounded-xl font-semibold transition ${
                isSignup
                  ? "bg-lime-400 text-black"
                  : "text-gray-300"
              }`}
            >
              Sign Up
            </button>

          </div>

          <form onSubmit={handleSubmit}>

            {/* USERNAME */}
            <input
              type="text"
              className="w-full mb-4 p-4 rounded-2xl bg-white/10 outline-none
              focus:ring-2 focus:ring-lime-400 transition"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            {/* EMAIL - SIGNUP ONLY */}
            {isSignup && (
              <input
                type="email"
                className="w-full mb-4 p-4 rounded-2xl bg-white/10 outline-none
                focus:ring-2 focus:ring-lime-400 transition"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            )}

            {/* DOB - SIGNUP ONLY */}
            {isSignup && (
              <input
                type="date"
                className="w-full mb-4 p-4 rounded-2xl bg-white/10 outline-none
                focus:ring-2 focus:ring-lime-400 transition"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            )}

            {/* PASSWORD */}
            <input
              type="password"
              className="w-full mb-6 p-4 rounded-2xl bg-white/10 outline-none
              focus:ring-2 focus:ring-lime-400 transition"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-lime-400 text-black font-semibold
              hover:scale-105 hover:shadow-[0_0_20px_rgba(163,230,53,0.8)] transition"
            >
              {isSignup ? "Create Account 🚀" : "Start Journey 🚀"}
            </button>

          </form>

          {/* SWITCH MESSAGE */}
          <p className="mt-6 text-center text-gray-400 text-sm">

            {isSignup ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignup(false)}
                  className="text-lime-400 hover:underline"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignup(true)}
                  className="text-lime-400 hover:underline"
                >
                  Sign Up
                </button>
              </>
            )}

          </p>

        </div>

        {/* FOOTER */}
        <p className="mt-8 text-gray-400 text-sm">
          Where journeys meet pipelines ☁️
        </p>

      </div>
    </div>
  );
}