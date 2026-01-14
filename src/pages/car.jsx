import { useState } from "react";
import { cars } from "../data/carsdata";
import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Filterbar from "../components/filterbar";
import Card from "../components/card";
import Connexion from "../components/login";
import Reservation from "../components/reservation";
import Paiement from "../components/paiement";
import { useAuth } from "../context/userContext";

export default function Cars() {
  //auth verfication 
  const { isAuthenticated,user } = useAuth();
  console.log(isAuthenticated,user)
  // Filtres
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Auth & réservation
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  
  // Paiement
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [reservationData, setReservationData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  // login

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  // Filtres voitures
  const filteredCars = cars.filter((car) => {
    if (selectedCategory !== "all" && car.category !== selectedCategory)
      return false;
    if (selectedBrand !== "all" && car.brand !== selectedBrand) return false;
    if (priceRange === "low" && car.price > 150000) return false;
    if (priceRange === "mid" && (car.price < 150000 || car.price > 200000))
      return false;
    if (priceRange === "high" && car.price < 200000) return false;
    return true;
  });

  const brands = [...new Set(cars.map((car) => car.brand))];
  const categories = [...new Set(cars.map((car) => car.category))];

  //  "Réserver"
  const handleReserveClick = (car) => {
    setSelectedCar(car);

    if (isAuthenticated) {
      setShowReservationModal(true);
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setCurrentUser={setCurrentUser}
        setShowLoginModal={setShowLoginModal}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Notre Collection <span className="text-red-500">Premium</span>
          </h1>
          <p className="text-gray-400">
            {filteredCars.length} véhicules disponibles
          </p>
        </div>
      </section>

      {/* Filtres */}
      <Filterbar
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        brands={brands}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />

      {/* Liste voitures */}
      <Card
        filteredCars={filteredCars}
        handleReserveClick={handleReserveClick}
      />

      {/* Login */}
      <Connexion
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        setIsLoggedIn={setIsLoggedIn}
        setCurrentUser={setCurrentUser}
        selectedCar={selectedCar}
        setShowReservationModal={setShowReservationModal}
      />

      {/* Réservation */}
      <Reservation
        showReservationModal={showReservationModal}
        setShowReservationModal={setShowReservationModal}
        selectedCar={selectedCar}
        currentUser={currentUser}
        setShowPaymentModal={setShowPaymentModal}
      />
      {/* paiement */}
      <Paiement
        showPaymentModal={showPaymentModal}
        setShowPaymentModal={setShowPaymentModal}
        reservationData={reservationData}
        selectedCar={selectedCar}
        totalPrice={totalPrice}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
