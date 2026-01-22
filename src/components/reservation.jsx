import React, { useState, useEffect } from "react";
import { X, CalendarDays } from "lucide-react";
import { useAuth } from "../context/userContext";

function Reservation({
  showReservationModal,
  setShowReservationModal,
  selectedCar,
  setShowPaymentModal,
  setReservationData,
  setTotalPrice,
}) {
  const { isAuthenticated, user } = useAuth();

  const [reservationForm, setReservationForm] = useState({
    nom: user?.nom || "",
    prenom: user?.prenom || "",
    telephone: user?.telephone || "", 
    dateDebut: "",
    dateFin: "",
    message: "",
  });

  const calculateTotalPrice = () => {
    if (!reservationForm.dateDebut || !reservationForm.dateFin) return 0;

    const start = new Date(reservationForm.dateDebut);
    const end = new Date(reservationForm.dateFin);

    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (days <= 0) return 0;

    return days * selectedCar.pricePerDay;
  };

  //  Fonction pour gérer la soumission du formulaire
  const handleReservationSubmit = (e) => {
    e.preventDefault();

    // Calculer le nombre de jours et le prix total
    const start = new Date(reservationForm.dateDebut);
    const end = new Date(reservationForm.dateFin);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    const total = days * selectedCar.pricePerDay;

    // Préparer les données de réservation
    const reservationInfo = {
      car: selectedCar,
      user: user,
      nom: reservationForm.nom,
      prenom: reservationForm.prenom,
      telephone: reservationForm.telephone,
      dateDebut: reservationForm.dateDebut,
      dateFin: reservationForm.dateFin,
      message: reservationForm.message,
      days: days,
    };

    setReservationData(reservationInfo);
    setTotalPrice(total);

    //paiement
    setShowReservationModal(false);
    setShowPaymentModal(true);
  };

  if (!showReservationModal || !selectedCar) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-2xl w-full border border-gray-700 relative my-8">
        <button
          onClick={() => setShowReservationModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarDays className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Réserver votre véhicule</h2>
            <p className="text-gray-400 text-sm">
              Remplissez le formulaire pour confirmer votre réservation
            </p>
          </div>

          {/* Selected Car Info */}
          <div className="bg-black/50 rounded-xl p-4 mb-6 flex items-center space-x-4">
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg">{selectedCar.name}</h3>
              <p className="text-sm text-gray-400">
                {selectedCar.brand} • {selectedCar.year}
              </p>
              <p className="text-orange-500 font-semibold mt-1">
                FDJ {selectedCar.pricePerDay}/jour
              </p>
            </div>
          </div>

          <form onSubmit={handleReservationSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Nom</label>
                <input
                  type="text"
                  value={reservationForm.nom}
                  onChange={(e) =>
                    setReservationForm({
                      ...reservationForm,
                      nom: e.target.value,
                    })
                  }
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Prénom
                </label>
                <input
                  type="text"
                  value={reservationForm.prenom}
                  onChange={(e) =>
                    setReservationForm({
                      ...reservationForm,
                      prenom: e.target.value,
                    })
                  }
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                value={reservationForm.telephone}
                onChange={(e) =>
                  setReservationForm({
                    ...reservationForm,
                    telephone: e.target.value,
                  })
                }
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Date de début
                </label>
                <input
                  type="date"
                  value={reservationForm.dateDebut}
                  onChange={(e) =>
                    setReservationForm({
                      ...reservationForm,
                      dateDebut: e.target.value,
                    })
                  }
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Date de fin
                </label>
                <input
                  type="date"
                  value={reservationForm.dateFin}
                  onChange={(e) =>
                    setReservationForm({
                      ...reservationForm,
                      dateFin: e.target.value,
                    })
                  }
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  min={
                    reservationForm.dateDebut ||
                    new Date().toISOString().split("T")[0]
                  }
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Message (optionnel)
              </label>
              <textarea
                value={reservationForm.message}
                onChange={(e) =>
                  setReservationForm({
                    ...reservationForm,
                    message: e.target.value,
                  })
                }
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 h-24 resize-none"
                placeholder="Informations supplémentaires..."
              ></textarea>
            </div>

            {/* Price Summary */}
            {reservationForm.dateDebut && reservationForm.dateFin && (
              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-600/30 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Durée de location</span>
                  <span className="font-semibold">
                    {Math.ceil(
                      (new Date(reservationForm.dateFin) -
                        new Date(reservationForm.dateDebut)) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                    jours
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Prix par jour</span>
                  <span className="font-semibold">
                    {selectedCar.pricePerDay} FDJ
                  </span>
                </div>
                <div className="border-t border-gray-700 pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Prix Total</span>
                    <span className="text-2xl font-bold text-red-500">
                      {calculateTotalPrice().toLocaleString()} FDJ
                    </span>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-red-500/50 transition"
              disabled={!reservationForm.dateDebut || !reservationForm.dateFin}
            >
              Confirmer la réservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reservation;