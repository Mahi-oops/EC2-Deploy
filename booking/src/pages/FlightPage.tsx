import { useState } from "react";
import flightImg from "../assets/flight.jpg";
import indigoImg from "../assets/indigo.jpg";
import airindiaImg from "../assets/airindia.jpg";


type Flight = {
  id: number;
  name: string;
  airline: string;
  image: string;
  source: string;
  destination: string;
  time: string;
  price: number;
};

export default function FlightPage() {
  const [source, setSource] = useState("Mumbai");
  const [destination, setDestination] = useState("Delhi");
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [selectedAirline, setSelectedAirline] = useState("All");

  const airlines = ["All", "IndiGo", "Air India", "Vistara", "Akasa"];

  const flights: Flight[] = [
    {
      id: 1,
      name: "Sky Express",
      airline: "IndiGo",
      image: indigoImg,
      source: "Mumbai",
      destination: "Delhi",
      time: "08:00 AM",
      price: 4999,
    },
    {
      id: 2,
      name: "Cloud Cruiser",
      airline: "Air India",
      image: airindiaImg,
      source: "Mumbai",
      destination: "Bangalore",
      time: "02:30 PM",
      price: 5999,
    },
  ];

  const toggleSeat = (seat: number) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const filteredFlights =
    selectedAirline === "All"
      ? flights
      : flights.filter((f) => f.airline === selectedAirline);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      
      {/* ✈️ HERO */}
      <section className="relative h-[80vh] overflow-hidden">
  <img
    src={flightImg}
    className="absolute inset-0 w-full h-full object-cover brightness-90"
  />

  <div className="absolute inset-0 bg-black/30" />

        {/* 🔥 NAVBAR */}
        <div className="absolute top-0 w-full flex justify-between px-10 py-6 z-20">
          <h1 className="text-2xl font-bold tracking-wide">SkyPlane</h1>
          <div className="flex gap-6 text-sm text-gray-300">
            <span className="cursor-pointer hover:text-white">Help</span>
            <span className="cursor-pointer hover:text-white">My Trips</span>
            <button className="border px-4 py-1 rounded-lg">Sign Up</button>
            <button className="bg-white text-black px-4 py-1 rounded-lg">
              Login
            </button>
          </div>
        </div>

        {/* 🔥 CENTER CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-6xl font-bold mb-4">
            Best deals are waiting ✈️
          </h1>
          <p className="text-gray-300">
            Your journey, optimized like a perfect deployment pipeline
          </p>

          {/* 🔍 SEARCH PANEL */}
          <div className="mt-10 w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
            
            {/* ✈️ AIRLINE SELECTOR */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              {airlines.map((a) => (
                <button
                  key={a}
                  onClick={() => setSelectedAirline(a)}
                  className={`px-4 py-2 rounded-full text-sm transition ${
                    selectedAirline === a
                      ? "bg-white text-black"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>

            {/* INPUTS */}
            <div className="grid md:grid-cols-4 gap-4">
              <input
                className="rounded-2xl bg-white/10 p-4 outline-none"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="From"
              />
              <input
                className="rounded-2xl bg-white/10 p-4 outline-none"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="To"
              />
              <input
                type="date"
                className="rounded-2xl bg-white/10 p-4 outline-none"
              />
              <button className="rounded-2xl bg-lime-400 text-black font-semibold px-6 py-4 hover:scale-105 transition">
                Search Flights →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ✈️ FLIGHT LIST */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">✈️ Available Flights</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {filteredFlights.map((flight) => (
            <div
              key={flight.id}
              className="group rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden hover:scale-[1.02] transition shadow-2xl"
            >
              <div className="relative h-72">
                <img
                  src={flight.image}
                  className="h-full w-full object-cover group-hover:scale-110 transition"
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold">{flight.name}</h3>
                  <p className="text-sm text-gray-300">
                    {flight.airline}
                  </p>
                  <p>
                    {flight.source} → {flight.destination}
                  </p>
                </div>
              </div>

              <div className="p-6 flex justify-between items-center">
                <div>
                  <p>{flight.time}</p>
                  <p className="text-lg font-bold">₹{flight.price}</p>
                </div>

                <button
                  onClick={() => {
                    setSelectedFlight(flight);
                    setSelectedSeats([]);
                  }}
                  className="rounded-2xl bg-lime-400 text-black px-5 py-3 font-semibold hover:scale-105 transition"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💺 SEAT MODAL */}
      {selectedFlight && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 backdrop-blur">
          <div className="bg-neutral-900 rounded-[2rem] max-w-2xl w-full p-6">
            <h3 className="text-2xl font-bold mb-6">
              Select Seats ✈️
            </h3>

            <div className="grid grid-cols-6 gap-3">
              {[...Array(30)].map((_, i) => {
                const seat = i + 1;
                const selected = selectedSeats.includes(seat);

                return (
                  <button
                    key={seat}
                    onClick={() => toggleSeat(seat)}
                    className={`h-10 rounded-lg text-sm ${
                      selected
                        ? "bg-white text-black"
                        : "bg-white/10 hover:bg-lime-400 hover:text-black"
                    }`}
                  >
                    {seat}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setSelectedFlight(null)}
              className="mt-6 w-full bg-white text-black py-3 rounded-2xl font-semibold"
            >
              Confirm {selectedSeats.length} Seat(s)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}