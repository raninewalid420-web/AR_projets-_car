import React from "react";
import { X, Gauge, Zap, Settings, Fuel, Users, Check } from "lucide-react";

export default function CarDetailsModal({
  showModal,
  setShowModal,
  selectedCar,
  onReserve,
  
}) {
  if (!showModal || !selectedCar) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-5xl w-full border border-gray-700 relative my-8">
        {/* Bouton Fermer */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Section Gauche - Images */}
          <div>
            <div className="relative mb-4">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {selectedCar.category}
              </div>
            </div>

            {/* Galerie miniatures */}
            <div className="grid grid-cols-3 gap-3">
              <img
                src={selectedCar.image}
                alt=""
                className="w-full h-24 object-cover rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer border-2 border-transparent hover:border-red-500"
              />
              <img
                src={selectedCar.image}
                alt=""
                className="w-full h-24 object-cover rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer border-2 border-transparent hover:border-red-500"
              />
              <img
                src={selectedCar.image}
                alt=""
                className="w-full h-24 object-cover rounded-lg opacity-70 hover:opacity-100 transition cursor-pointer border-2 border-transparent hover:border-red-500"
              />
            </div>
          </div>

          {/* Section Droite - Informations */}
          <div className="flex flex-col">
            {/* En-tête */}
            <div className="mb-6">
              <h2 className="text-4xl font-bold mb-2">{selectedCar.name}</h2>
              <p className="text-gray-400 mb-4">
                {selectedCar.brand} • {selectedCar.year}
              </p>
              {selectedCar.description && (
                <p className="text-gray-400 text-sm leading-relaxed">
                  {selectedCar.description}
                </p>
              )}
            </div>

            {/* Prix */}
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-600/30 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Prix d'achat</div>
                  <div className="text-3xl font-bold text-red-500">
                    {selectedCar.price.toLocaleString()} FDJ
                  </div>
                </div>
                {selectedCar.pricePerDay && (
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">
                      Location/jour
                    </div>
                    <div className="text-2xl font-bold text-white">
                      €{selectedCar.pricePerDay}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Caractéristiques Techniques */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-red-500" />
                Caractéristiques Techniques
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {/* Puissance */}
                <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <Gauge className="w-5 h-5 text-red-500" />
                    <span className="text-xs text-gray-400 uppercase">
                      Puissance
                    </span>
                  </div>
                  <div className="font-bold text-lg">{selectedCar.specs.power}</div>
                </div>

                {/* Accélération */}
                <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-5 h-5 text-red-500" />
                    <span className="text-xs text-gray-400 uppercase">
                      0-100 km/h
                    </span>
                  </div>
                  <div className="font-bold text-lg">{selectedCar.specs.time}</div>
                </div>

                {/* Vitesse Max */}
                <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <Gauge className="w-5 h-5 text-red-500" />
                    <span className="text-xs text-gray-400 uppercase">
                      Vitesse Max
                    </span>
                  </div>
                  <div className="font-bold text-lg">{selectedCar.specs.speed}</div>
                </div>

                {/* Carburant */}
                {selectedCar.specs.fuel && (
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center space-x-2 mb-2">
                      <Fuel className="w-5 h-5 text-red-500" />
                      <span className="text-xs text-gray-400 uppercase">
                        Carburant
                      </span>
                    </div>
                    <div className="font-bold text-lg">{selectedCar.specs.fuel}</div>
                  </div>
                )}

                {/* Transmission */}
                {selectedCar.specs.transmission && (
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-700 col-span-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <Settings className="w-5 h-5 text-red-500" />
                      <span className="text-xs text-gray-400 uppercase">
                        Transmission
                      </span>
                    </div>
                    <div className="font-bold">{selectedCar.specs.transmission}</div>
                  </div>
                )}

                {/* Places */}
                {selectedCar.specs.seats && (
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-red-500" />
                      <span className="text-xs text-gray-400 uppercase">
                        Places
                      </span>
                    </div>
                    <div className="font-bold text-lg">{selectedCar.specs.seats}</div>
                  </div>
                )}

                {/* Consommation */}
                {selectedCar.specs.consumption && (
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center space-x-2 mb-2">
                      <Fuel className="w-5 h-5 text-red-500" />
                      <span className="text-xs text-gray-400 uppercase">
                        Consommation
                      </span>
                    </div>
                    <div className="font-bold text-sm">
                      {selectedCar.specs.consumption}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Équipements */}
            {selectedCar.features && selectedCar.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                  Équipements Inclus
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedCar.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2 text-sm bg-black/30 rounded-lg p-2"
                    >
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bouton Réserver */}
            <div className="mt-auto pt-6">
              <button
                onClick={onReserve}
                className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-red-500/50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>🚗</span>
                <span>Réserver ce véhicule</span>
              </button>
              <p className="text-center text-gray-400 text-xs mt-3">
                Réservation sécurisée • Annulation gratuite sous 24h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}