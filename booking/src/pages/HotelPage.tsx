import { useState } from "react";

import hotelHero from "../assets/hotel-hero.jpg";
import tajImg from "../assets/taj.jpg";
import goaImg from "../assets/goa.jpg";
import urbanImg from "../assets/urban.jpg";
import fernImg from "../assets/fern.jpg";

type Hotel = {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  price: number;
  amenities: string[];
};

type Room = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export default function HotelPage() {
  const [destination, setDestination] = useState("Mumbai");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults • 1 Room");

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const filters = [
    "All",
    "5★",
    "4★",
    "Beach",
    "Breakfast",
    "Pool",
  ];

  const hotels: Hotel[] = [
    {
      id: 1,
      name: "Taj Mahal Palace",
      location: "Mumbai, India",
      image: tajImg,
      rating: 4.8,
      price: 6499,
      amenities: ["Wi-Fi", "Breakfast", "Pool", "Spa"],
    },

    {
      id: 2,
      name: "Goa Beach Resort",
      location: "Goa, India",
      image: goaImg,
      rating: 4.6,
      price: 8299,
      amenities: ["Pool", "Breakfast", "Beach", "Parking"],
    },

    {
      id: 3,
      name: "Urban Nest",
      location: "Mumbai, India",
      image: urbanImg,
      rating: 4.5,
      price: 6199,
      amenities: ["Wi-Fi", "Gym", "Breakfast", "Parking"],
    },

    {
      id: 4,
      name: "The Fern Escape",
      location: "Lonavala, India",
      image: fernImg,
      rating: 4.7,
      price: 7899,
      amenities: ["Pool", "Spa", "Breakfast", "Parking"],
    },
  ];

  const rooms: Room[] = [
    {
      id: 1,
      name: "Deluxe Room",
      description: "King bed • 2 Guests • Free Wi-Fi • Breakfast",
      price: 6499,
    },

    {
      id: 2,
      name: "Premium Room",
      description: "King bed • 2 Guests • City View • Breakfast",
      price: 8299,
    },

    {
      id: 3,
      name: "Executive Suite",
      description: "King bed • 3 Guests • Living Room • Breakfast",
      price: 10499,
    },
  ];

  const filteredHotels =
    selectedFilter === "All"
      ? hotels
      : hotels.filter((hotel) => {
          if (selectedFilter === "5★") {
            return hotel.rating >= 4.8;
          }

          if (selectedFilter === "4★") {
            return hotel.rating >= 4.5;
          }

          return hotel.amenities.includes(selectedFilter);
        });

  const openHotel = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setSelectedRoom(null);
  };

  const closeHotel = () => {
    setSelectedHotel(null);
    setSelectedRoom(null);
  };

  const confirmBooking = () => {
    if (!selectedHotel || !selectedRoom) {
      alert("Please select a room first.");
      return;
    }

    alert(
      `Booking Confirmed!\n\n${selectedHotel.name}\n${selectedRoom.name}\n₹${selectedRoom.price.toLocaleString()}`
    );

    closeHotel();
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* ======================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative min-h-[680px] overflow-hidden">

        {/* HERO IMAGE */}

        <img
          src={hotelHero}
          alt="Hotel"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-neutral-950" />

        {/* ==================================================
            NAVBAR
        ================================================== */}

        <nav className="relative z-20 mx-auto flex max-w-[1450px] items-center justify-between px-8 py-6">

          {/* LOGO */}

          <div className="text-2xl font-bold tracking-wide md:text-3xl">
            Devops Traveller
          </div>

          {/* NAVIGATION */}

          <div className="hidden items-center gap-8 md:flex">

            <a
              href="/flight"
              className="flex items-center gap-2 text-gray-200 transition hover:text-white"
            >
              ✈️
              <span>Flights</span>
            </a>

            <a
              href="/bus"
              className="flex items-center gap-2 text-gray-200 transition hover:text-white"
            >
              🚌
              <span>Bus</span>
            </a>

            <a
              href="/train"
              className="flex items-center gap-2 text-gray-200 transition hover:text-white"
            >
              🚆
              <span>Train</span>
            </a>

            <a
              href="/hotel"
              className="relative flex items-center gap-2 text-white"
            >
              🏨
              <span>Hotels</span>

              {/* ACTIVE LINE */}

              <span className="absolute -bottom-4 left-0 h-[3px] w-full rounded-full bg-lime-400" />
            </a>

          </div>

          {/* USER */}

          <button
            className="flex h-11 w-11 items-center justify-center
            rounded-full border border-white/30 bg-black/40
            text-xl backdrop-blur-md transition
            hover:bg-white/20"
          >
            👤
          </button>

        </nav>

        {/* ==================================================
            HERO CONTENT
        ================================================== */}

        <div className="relative z-10 mx-auto flex max-w-[1450px] flex-col px-8 pt-16">

          <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Devops Traveller
          </h1>

          <p className="mt-4 text-lg text-gray-200 md:text-xl">
            Find a place worth staying
          </p>

          {/* =================================================
              SEARCH BOX
          ================================================= */}

          <div
            className="mt-12 rounded-[2rem]
            border border-white/20
            bg-black/45 p-5
            shadow-2xl backdrop-blur-xl"
          >

            <div className="grid gap-3 lg:grid-cols-5">

              {/* DESTINATION */}

              <div
                className="rounded-2xl bg-white/10
                px-5 py-4 transition
                hover:bg-white/15"
              >

                <p className="mb-1 text-xs text-gray-400">
                  Destination
                </p>

                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Where are you going?"
                  className="w-full bg-transparent text-lg
                  font-medium text-white outline-none
                  placeholder:text-gray-400"
                />

              </div>

              {/* CHECK IN */}

              <div
                className="rounded-2xl bg-white/10
                px-5 py-4 transition
                hover:bg-white/15"
              >

                <p className="mb-1 text-xs text-gray-400">
                  Check-in
                </p>

                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-white
                  outline-none"
                />

              </div>

              {/* CHECK OUT */}

              <div
                className="rounded-2xl bg-white/10
                px-5 py-4 transition
                hover:bg-white/15"
              >

                <p className="mb-1 text-xs text-gray-400">
                  Check-out
                </p>

                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-white
                  outline-none"
                />

              </div>

              {/* GUESTS */}

              <div
                className="rounded-2xl bg-white/10
                px-5 py-4 transition
                hover:bg-white/15"
              >

                <p className="mb-1 text-xs text-gray-400">
                  Guests / Rooms
                </p>

                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent
                  text-white outline-none"
                >

                  <option className="bg-neutral-900">
                    1 Adult • 1 Room
                  </option>

                  <option className="bg-neutral-900">
                    2 Adults • 1 Room
                  </option>

                  <option className="bg-neutral-900">
                    2 Adults • 2 Rooms
                  </option>

                  <option className="bg-neutral-900">
                    3 Adults • 1 Room
                  </option>

                  <option className="bg-neutral-900">
                    4 Adults • 2 Rooms
                  </option>

                </select>

              </div>

              {/* SEARCH */}

              <button
                onClick={() => {
                  document
                    .getElementById("popular-stays")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="rounded-2xl bg-lime-400
                px-6 py-4 text-lg font-bold
                text-black transition
                hover:scale-[1.02]
                hover:bg-lime-300"
              >
                🔍 Search Hotels
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          POPULAR STAYS
      ====================================================== */}

      <section
        id="popular-stays"
        className="mx-auto max-w-[1450px] px-8 py-16"
      >

        {/* SECTION HEADER */}

        <div className="mb-8 flex items-center justify-between">

          <h2 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
            <span className="text-lime-400">🏨</span>
            Popular Stays
          </h2>

          <button className="text-sm text-gray-300 transition hover:text-white">
            View All →
          </button>

        </div>

        {/* ==================================================
            FILTERS
        ================================================== */}

        <div className="mb-8 flex flex-wrap gap-3">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm
              font-medium transition ${
                selectedFilter === filter
                  ? "bg-lime-400 text-black"
                  : "border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* ==================================================
            HOTEL CARDS
        ================================================== */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {filteredHotels.map((hotel) => (

            <div
              key={hotel.id}
              className="group overflow-hidden
              rounded-[1.7rem]
              border border-white/10
              bg-white/[0.04]
              transition duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.07]"
            >

              {/* IMAGE */}

              <div className="relative h-64 overflow-hidden">

                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-full w-full object-cover
                  transition duration-500
                  group-hover:scale-110"
                />

                {/* RATING */}

                <div
                  className="absolute right-3 top-3
                  rounded-full bg-black/70
                  px-3 py-1.5 text-sm font-semibold
                  backdrop-blur-md"
                >
                  ⭐ {hotel.rating}
                </div>

              </div>

              {/* CARD CONTENT */}

              <div className="p-5">

                <h3 className="text-xl font-bold">
                  {hotel.name}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  📍 {hotel.location}
                </p>

                {/* AMENITIES */}

                <div className="mt-4 flex flex-wrap gap-2">

                  {hotel.amenities.map((amenity) => (

                    <span
                      key={amenity}
                      className="rounded-full
                      bg-white/10 px-3 py-1
                      text-xs text-gray-300"
                    >
                      {amenity}
                    </span>

                  ))}

                </div>

                {/* PRICE */}

                <div className="mt-6 flex items-center justify-between">

                  <div>

                    <span className="text-xl font-bold">
                      ₹{hotel.price.toLocaleString()}
                    </span>

                    <span className="ml-1 text-xs text-gray-500">
                      / night
                    </span>

                  </div>

                  <button
                    onClick={() => openHotel(hotel)}
                    className="rounded-full
                    border border-lime-400
                    px-4 py-2 text-sm
                    font-semibold text-lime-400
                    transition hover:bg-lime-400
                    hover:text-black"
                  >
                    View Rooms →
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ======================================================
          TRENDING HOTELS
      ====================================================== */}

      <section className="mx-auto max-w-[1450px] px-8 pb-20">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
            <span>🔥</span>
            Trending Hotels
          </h2>

          <button className="text-sm text-gray-300 hover:text-white">
            View All →
          </button>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* TREND CARD 1 */}

          <div className="group relative h-80 overflow-hidden rounded-[2rem]">

            <img
              src={goaImg}
              alt="Goa"
              className="h-full w-full object-cover
              transition duration-700
              group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">

              <p className="text-sm text-lime-300">
                BEACH ESCAPE
              </p>

              <h3 className="mt-1 text-2xl font-bold">
                Goa Resorts
              </h3>

              <p className="mt-1 text-sm text-gray-300">
                Ocean views • Pool • Breakfast
              </p>

            </div>

          </div>

          {/* TREND CARD 2 */}

          <div className="group relative h-80 overflow-hidden rounded-[2rem]">

            <img
              src={urbanImg}
              alt="Mumbai"
              className="h-full w-full object-cover
              transition duration-700
              group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">

              <p className="text-sm text-lime-300">
                CITY BREAK
              </p>

              <h3 className="mt-1 text-2xl font-bold">
                Mumbai Hotels
              </h3>

              <p className="mt-1 text-sm text-gray-300">
                Luxury • Business • City View
              </p>

            </div>

          </div>

          {/* TREND CARD 3 */}

          <div className="group relative h-80 overflow-hidden rounded-[2rem]">

            <img
              src={fernImg}
              alt="Lonavala"
              className="h-full w-full object-cover
              transition duration-700
              group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">

              <p className="text-sm text-lime-300">
                WEEKEND GETAWAY
              </p>

              <h3 className="mt-1 text-2xl font-bold">
                Lonavala Escapes
              </h3>

              <p className="mt-1 text-sm text-gray-300">
                Hills • Resorts • Nature
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          ROOM MODAL
      ====================================================== */}

      {selectedHotel && (

        <div
          className="fixed inset-0 z-50 flex
          items-center justify-center
          bg-black/80 p-5 backdrop-blur-md"
        >

          <div
            className="max-h-[90vh] w-full max-w-3xl
            overflow-y-auto rounded-[2rem]
            border border-white/10
            bg-neutral-900 shadow-2xl"
          >

            {/* MODAL IMAGE */}

            <div className="relative h-64">

              <img
                src={selectedHotel.image}
                alt={selectedHotel.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />

              <button
                onClick={closeHotel}
                className="absolute right-5 top-5
                flex h-10 w-10 items-center
                justify-center rounded-full
                bg-black/60 text-white
                backdrop-blur-md
                hover:bg-black"
              >
                ✕
              </button>

              <div className="absolute bottom-5 left-6">

                <h2 className="text-3xl font-bold">
                  {selectedHotel.name}
                </h2>

                <p className="mt-1 text-gray-300">
                  📍 {selectedHotel.location}
                </p>

              </div>

            </div>

            {/* ROOM CONTENT */}

            <div className="p-6">

              <h3 className="mb-5 text-2xl font-bold">
                Select your room
              </h3>

              <div className="space-y-3">

                {rooms.map((room) => {

                  const selected =
                    selectedRoom?.id === room.id;

                  return (

                    <button
                      key={room.id}
                      onClick={() => setSelectedRoom(room)}
                      className={`w-full rounded-2xl
                      border p-5 text-left transition ${
                        selected
                          ? "border-lime-400 bg-lime-400/10"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                    >

                      <div className="flex items-center justify-between gap-5">

                        <div>

                          <h4 className="text-lg font-bold">
                            {room.name}
                          </h4>

                          <p className="mt-2 text-sm text-gray-400">
                            {room.description}
                          </p>

                        </div>

                        <div className="whitespace-nowrap text-right">

                          <p className="text-lg font-bold">
                            ₹{room.price.toLocaleString()}
                          </p>

                          <p className="text-xs text-gray-500">
                            / night
                          </p>

                        </div>

                      </div>

                    </button>

                  );
                })}

              </div>

              {/* BOOKING SUMMARY */}

              {selectedRoom && (

                <div
                  className="mt-6 rounded-2xl
                  border border-white/10
                  bg-white/5 p-5"
                >

                  <div className="flex justify-between">

                    <span className="text-gray-400">
                      Selected Room
                    </span>

                    <span className="font-semibold">
                      {selectedRoom.name}
                    </span>

                  </div>

                  <div className="mt-3 flex justify-between">

                    <span className="text-gray-400">
                      Guests
                    </span>

                    <span>
                      {guests}
                    </span>

                  </div>

                  <div className="mt-3 flex justify-between">

                    <span className="text-gray-400">
                      Check-in
                    </span>

                    <span>
                      {checkIn || "Not selected"}
                    </span>

                  </div>

                  <div className="mt-3 flex justify-between">

                    <span className="text-gray-400">
                      Check-out
                    </span>

                    <span>
                      {checkOut || "Not selected"}
                    </span>

                  </div>

                  <div className="mt-5 border-t border-white/10 pt-5">

                    <div className="flex items-center justify-between">

                      <span className="text-lg font-semibold">
                        Total
                      </span>

                      <span className="text-2xl font-bold text-lime-400">
                        ₹{selectedRoom.price.toLocaleString()}
                      </span>

                    </div>

                  </div>

                </div>

              )}

              {/* CONFIRM */}

              <button
                onClick={confirmBooking}
                className="mt-5 w-full rounded-2xl
                bg-lime-400 py-4
                text-lg font-bold text-black
                transition hover:bg-lime-300
                hover:scale-[1.01]"
              >
                Confirm Booking →
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}