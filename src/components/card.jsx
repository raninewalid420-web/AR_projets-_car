import { Check, Star } from 'lucide-react'
import React from 'react'

function Card({filteredCars,handleReserveClick}) {
  return (
    <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-400">
              {filteredCars.length} véhicule{filteredCars.length > 1 ? "s" : ""}{" "}
              trouvé{filteredCars.length > 1 ? "s" : ""}
            </p>
            <select className="bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-500">
              <option>Plus récent</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Kilométrage</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <div key={car.id} className="group relative">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute top-4 left-4">
                      {car.available ? (
                        <span className="px-3 py-1 bg-green-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center">
                          <Check className="w-3 h-3 mr-1" />
                          Disponible
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-red-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                          Vendu
                        </span>
                      )}
                    </div>

                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600 transition">
                        <Star className="w-5 h-5" />
                      </button>
                    </div>

                    {car.km === 0 && (
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-orange-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                          Neuf
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-red-500 font-semibold">
                        {car.category}
                      </span>
                      <span className="text-xs text-gray-400">{car.brand}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-red-500 transition">
                      {car.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-black/50 rounded-lg p-3">
                        <div className="text-gray-400 text-xs mb-1">
                          Puissance
                        </div>
                        <div className="font-semibold text-sm">
                          {car.specs.power}
                        </div>
                      </div>
                      <div className="bg-black/50 rounded-lg p-3">
                        <div className="text-gray-400 text-xs mb-1">
                          Vitesse Max
                        </div>
                        <div className="font-semibold text-sm">
                          {car.specs.speed}
                        </div>
                      </div>
                      <div className="bg-black/50 rounded-lg p-3">
                        <div className="text-gray-400 text-xs mb-1">
                          0-100 km/h
                        </div>
                        <div className="font-semibold text-sm">
                          {car.specs.time}
                        </div>
                      </div>
                      <div className="bg-black/50 rounded-lg p-3">
                        <div className="text-gray-400 text-xs mb-1">
                          Carburant
                        </div>
                        <div className="font-semibold text-sm">
                          {car.specs.fuel}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4 pb-4 border-b border-gray-700">
                      <span>{car.year}</span>
                      <span>•</span>
                      <span>{car.km.toLocaleString()} km</span>
                      <span>•</span>
                      <span>{car.transmission}</span>
                    </div>

                    <div className="mb-3">
                      <div className="text-xs text-gray-400">Location</div>
                      <div className="text-sm font-semibold text-orange-500">
                        €{car.pricePerDay}/jour
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">
                          Prix d'achat
                        </div>
                        <div className="text-2xl font-bold text-red-500">
                          €{car.price.toLocaleString()}
                        </div>
                      </div>
                      {car.available ? (
                        <button
                          onClick={() => handleReserveClick(car)}
                          className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-red-500/50 transition"
                        >
                          Réserver
                        </button>
                      ) : (
                        <button className="px-6 py-3 bg-gray-700 rounded-full text-sm font-semibold cursor-not-allowed opacity-50">
                          Indisponible
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-2 mt-12">
            <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition">
              Précédent
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-semibold">
              1
            </button>
            <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition">
              2
            </button>
            <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition">
              3
            </button>
            <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition">
              Suivant
            </button>
          </div>
        </div>
      </section>
  )
}

export default Card