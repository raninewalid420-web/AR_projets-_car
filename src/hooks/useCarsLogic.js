import { useState } from "react";

export function useCarsLogic() {
  // Filters
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Auth
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Reservation
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  // Forms
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [isRegistering, setIsRegistering] = useState(false);

  const [registerForm, setRegisterForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: "",
  });

  const [reservationForm, setReservationForm] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    dateDebut: "",
    dateFin: "",
    message: "",
  });

  // Utils
  const calculateTotalPrice = () => {
    if (!reservationForm.dateDebut || !reservationForm.dateFin || !selectedCar) return 0;
    const start = new Date(reservationForm.dateDebut);
    const end = new Date(reservationForm.dateFin);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return days > 0 ? days * selectedCar.pricePerDay : 0;
  };

  return {
    // filters
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    priceRange,
    setPriceRange,
    showFilters,
    setShowFilters,

    // auth
    isLoggedIn,
    setIsLoggedIn,
    currentUser,
    setCurrentUser,
    showLoginModal,
    setShowLoginModal,

    // reservation
    showReservationModal,
    setShowReservationModal,
    selectedCar,
    setSelectedCar,
    reservationForm,
    setReservationForm,

    // forms
    loginForm,
    setLoginForm,
    registerForm,
    setRegisterForm,
    isRegistering,
    setIsRegistering,

    // utils
    calculateTotalPrice,
  };
}
