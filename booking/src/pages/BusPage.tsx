import { useState } from "react";

type Bus = {
  id: number;
  name: string;
  image: string;
  source: string;
  destination: string;
  time: string;
  price: number;
};

export default function App() {
  const [source, setSource] = useState("Mumbai");
  const [destination, setDestination] = useState("Pune");
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const buses: Bus[] = [
    {
      id: 1,
      name: "Luxury Express",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
      source: "Mumbai",
      destination: "Pune",
      time: "07:00 AM",
      price: 799,
    },
    {
      id: 2,
      name: "Night Comfort",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop",
      source: "Mumbai",
      destination: "Goa",
      time: "10:30 PM",
      price: 1499,
    },
  ];

  const toggleSeat = (seat: number) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      
      {/* HERO */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=1400&auto=format&fit=crop"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          alt="Travel"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-6xl font-bold">Devops Traveller</h1>
          <p className="text-lg text-gray-300 mt-4">
            Feel the journey capture the moments
          </p>

          <div className="mt-10 grid md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-xl p-5 rounded-3xl border border-white/20">
            <input
              className="rounded-2xl bg-white/10 p-4 outline-none"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Source"
            />
            <input
              className="rounded-2xl bg-white/10 p-4 outline-none"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Destination"
            />
            <input
              type="date"
              className="rounded-2xl bg-white/10 p-4 outline-none"
            />
            <button className="rounded-2xl bg-lime-400 text-black font-semibold px-6 py-4">
              Search Route
            </button>
          </div>
        </div>
      </section>

      {/* BUS LIST */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">🔥 Trending Routes</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {buses.map((bus) => (
            <div
              key={bus.id}
              className="group overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={bus.image}
                  className="h-full w-full object-cover"
                  alt={bus.name}
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold">{bus.name}</h3>
                  <p>
                    {bus.source} → {bus.destination}
                  </p>
                </div>
              </div>

              <div className="p-6 flex justify-between items-center">
                <div>
                  <p>{bus.time}</p>
                  <p>₹{bus.price}</p>
                </div>

                <button
                  onClick={() => {
                    setSelectedBus(bus);
                    setSelectedSeats([]);
                  }}
                  className="rounded-2xl bg-lime-400 text-black px-5 py-3 font-semibold"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEAT MODAL */}
      {selectedBus && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6">
          <div className="bg-neutral-900 rounded-[2rem] max-w-2xl w-full p-6">
            <h3 className="text-2xl font-bold mb-6">
              Modern Live Seat Selection
            </h3>

            <div className="grid grid-cols-5 gap-3">
              {[...Array(20)].map((_, i) => {
                const seatNo = i + 1;
                const isAisle = i % 5 === 2;

                if (isAisle) return <div key={i} />;

                const selected = selectedSeats.includes(seatNo);

                return (
                  <button
                    key={seatNo}
                    onClick={() => toggleSeat(seatNo)}
                    className={`h-12 rounded-xl font-semibold ${
                      selected
                        ? "bg-white text-black"
                        : "border border-white/20 hover:bg-lime-400 hover:text-black"
                    }`}
                  >
                    {seatNo}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setSelectedBus(null)}
              className="mt-6 w-full rounded-2xl bg-white text-black py-3 font-semibold"
            >
              Confirm {selectedSeats.length} Seat(s)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}