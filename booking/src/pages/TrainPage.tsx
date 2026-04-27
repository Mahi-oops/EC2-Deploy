import { useState } from "react";

import trainImg from "../assets/vande-bharat.jpg";
import vandeBharatImg from "../assets/vande-bharat.jpg";
import AlcoImg from "../assets/Alco.jpg";
import RajdhaniImg from "../assets/Rajdhani.jpg";
type Train = {
  id: number;
  name: string;
  image: string;
  source: string;
  destination: string;
  time: string;
  price: number;
};

export default function TrainPage() {
  const [source, setSource] = useState("Source");
  const [destination, setDestination] = useState("Destination");

  const [selectedTrain, setSelectedTrain] = useState<Train | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const trains: Train[] = [
    {
      id: 1,
      name: "Vande Bharat Express",
      image: vandeBharatImg, // 🔥 your image
      source: "Mumbai",
      destination: "Ahmedabad",
      time: "06:00 AM",
      price: 1499,
    },
    {
      id: 2,
      name: "Rajdhani Express",
      image: RajdhaniImg,
      source: "Mumbai",
      destination: "Delhi",
      time: "04:00 PM",
      price: 1999,
    },
    {
      id: 3,
      name: "Shatabdi Express",
      image: AlcoImg, // 🔥 your image
      source: "Mumbai",
      destination: "Delhi",
      time: "02:00 PM",
      price: 1799,
    }
  ];

  const toggleSeat = (seat: number) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  return (
  <div className="min-h-screen bg-black text-white overflow-hidden">

    {/* 🌌 HERO */}
    <section className="relative h-[75vh] flex items-center">

      <img
        src={trainImg}
        className="absolute inset-0 w-full h-full object-cover scale-105 blur-[2px] opacity-70"
        alt="Train"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-bold tracking-tight">
          Train Traveller
        </h1>

        <p className="mt-4 text-gray-300 text-lg">
          Precision of IRCTC. Elegance of Apple.
        </p>

        {/* 🔍 GLASS SEARCH */}
        <div className="mt-10 grid md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-xl">
          <input
            className="rounded-xl bg-white/10 p-4 outline-none focus:ring-2 focus:ring-lime-400"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="Source"
          />
          <input
            className="rounded-xl bg-white/10 p-4 outline-none focus:ring-2 focus:ring-lime-400"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Destination"
          />
          <input
            type="date"
            className="rounded-xl bg-white/10 p-4 outline-none"
          />
          <button className="rounded-xl bg-lime-400 text-black font-semibold hover:scale-105 transition">
            Search
          </button>
        </div>
      </div>
    </section>

    {/* 🚆 TRAIN LIST */}
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-10 tracking-tight">
        Available Trains
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {trains.map((train) => (
          <div
            key={train.id}
            className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:scale-[1.02] transition duration-300"
          >
            <div className="relative h-72">
              <img
                src={train.image}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold">{train.name}</h3>
                <p className="text-gray-300">
                  {train.source} → {train.destination}
                </p>
              </div>
            </div>

            <div className="p-6 flex justify-between items-center">
              <div>
                <p className="text-gray-300">{train.time}</p>
                <p className="text-xl font-semibold">₹{train.price}</p>
              </div>

              <button
                onClick={() => {
                  setSelectedTrain(train);
                  setSelectedSeats([]);
                }}
                className="bg-lime-400 text-black px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* 💺 MODAL */}
    {selectedTrain && (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-6">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-3xl w-full shadow-2xl">

          <h3 className="text-2xl font-semibold mb-6">
            Select Your Seats
          </h3>

          <div className="grid grid-cols-5 gap-4">
            {[...Array(24)].map((_, i) => {
              const seatNo = i + 1;
              const aisle = i % 5 === 2;

              if (aisle) return <div key={i} />;

              const selected = selectedSeats.includes(seatNo);

              return (
                <button
                  key={seatNo}
                  onClick={() => toggleSeat(seatNo)}
                  className={`h-12 rounded-xl transition-all duration-200 ${
                    selected
                      ? "bg-white text-black scale-110"
                      : "bg-white/10 border border-white/20 hover:bg-lime-400 hover:text-black hover:scale-105"
                  }`}
                >
                  {seatNo}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setSelectedTrain(null)}
            className="mt-8 w-full bg-lime-400 text-black py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Confirm {selectedSeats.length} Seat(s)
          </button>
        </div>
      </div>
    )}
  </div>
);
}