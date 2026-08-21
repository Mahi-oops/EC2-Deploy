import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/loginpage.jpg";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      let url = "";
      let requestBody = {};

      // SIGNUP
      if (isSignup) {
        url = "/api/auth/signup";

        requestBody = {
          username: username,
          email: email,
          dob: dob,
          password: password,
        };
      } else {
        // LOGIN
        url = "/api/auth/login";

        requestBody = {
          username: username,
          password: password,
        };
      }

      const response = await fetch(url, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      // ERROR FROM BACKEND
      if (!response.ok) {
        setError(data.message || "Authentication failed");
        return;
      }

      // SIGNUP SUCCESS
      if (isSignup) {
        setSuccess("Account created successfully. Please login.");

        // Clear fields
        setUsername("");
        setEmail("");
        setDob("");
        setPassword("");

        // Switch to login page
        setIsSignup(false);

        return;
      }

      // LOGIN SUCCESS
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      navigate("/mode");

    } catch (err) {
      console.error("Authentication error:", err);

      setError("Unable to connect to backend server");

    } finally {
      setLoading(false);
    }
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
        
        {/* CREATOR SUBTITLE */}
         <div className="mt-5 text-center">
          <p className="text-gray-200 text-sm md:text-base tracking-wide">
           ✨ Crafted by <span className="text-lime-400 font-semibold">Mahesh Avula</span>
          </p>

          <p className="mt-2 text-gray-400 text-xs md:text-sm tracking-wider">
            🌍 A traveler by soul&nbsp;&nbsp;•&nbsp;&nbsp;
            🍜 foodie by heart&nbsp;&nbsp;•&nbsp;&nbsp;
            ☁️ DevOps enthusiast by profession
          </p>
        </div>

        {/* AUTH CARD */}
       <div className="mt-10 w-full max-w-md p-8 rounded-[2rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">

          {/* LOGIN / SIGNUP TABS */}
          <div className="flex mb-8 rounded-2xl bg-white/10 p-1">

            <button
              type="button"
              onClick={() => {
                setIsSignup(false);
                setError("");
                setSuccess("");
              }}
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
              onClick={() => {
                setIsSignup(true);
                setError("");
                setSuccess("");
              }}
              className={`w-1/2 py-3 rounded-xl font-semibold transition ${
                isSignup
                  ? "bg-lime-400 text-black"
                  : "text-gray-300"
              }`}
            >
              Sign Up
            </button>

          </div>

          {/* AUTH FORM */}
          <form onSubmit={handleSubmit}>

            {/* USERNAME */}
            <input
              type="text"
              className="w-full mb-4 p-4 rounded-2xl bg-white/10 outline-none focus:ring-2 focus:ring-lime-400 transition"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            {/* EMAIL - SIGNUP ONLY */}
            {isSignup && (
              <input
                type="email"
                className="w-full mb-4 p-4 rounded-2xl bg-white/10 outline-none focus:ring-2 focus:ring-lime-400 transition"
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
                className="w-full mb-4 p-4 rounded-2xl bg-white/10 outline-none focus:ring-2 focus:ring-lime-400 transition"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            )}

            {/* PASSWORD */}
            <input
              type="password"
              className="w-full mb-4 p-4 rounded-2xl bg-white/10 outline-none focus:ring-2 focus:ring-lime-400 transition"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* ERROR MESSAGE */}
            {error && (
              <p className="mb-4 text-center text-red-400 text-sm">
                {error}
              </p>
            )}

            {/* SUCCESS MESSAGE */}
            {success && (
              <p className="mb-4 text-center text-lime-400 text-sm">
                {success}
              </p>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-lime-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(163,230,53,0.8)] transition disabled:opacity-50"
            >
              {loading
                ? "Please wait..."
                : isSignup
                ? "Create Account 🚀"
                : "Start Journey 🚀"}
            </button>

          </form>

          {/* SWITCH MESSAGE */}
          <p className="mt-6 text-center text-gray-400 text-sm">

            {isSignup ? (
              <>
                Already have an account?{" "}

                <button
                  type="button"
                  onClick={() => {
                    setIsSignup(false);
                    setError("");
                    setSuccess("");
                  }}
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
                  onClick={() => {
                    setIsSignup(true);
                    setError("");
                    setSuccess("");
                  }}
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

