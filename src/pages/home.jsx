import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import {
  Search,
  Car,
  Shield,
  Clock,
  Star,
  ChevronRight,
  MapPin,
  Calendar,
  Menu,
  Phone,
  Mail,
  Zap,
  Award,
  Users,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("new");

  const featuredCars = [
    {
      id: 1,
      name: "Porsche 911 Turbo S",
      category: "Sports Car",
      price: 185000,
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
      specs: { power: "640 HP", speed: "330 km/h", time: "2.7s" },
    },
    {
      id: 2,
      name: "Mercedes-AMG GT",
      category: "Luxury",
      price: 142000,
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      specs: { power: "523 HP", speed: "310 km/h", time: "3.6s" },
    },
    {
      id: 3,
      name: "BMW M8 Competition",
      category: "Performance",
      price: 138000,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
      specs: { power: "625 HP", speed: "305 km/h", time: "3.2s" },
    },
    {
      id: 4,
      name: "Audi RS e-tron GT",
      category: "Electric",
      price: 148000,
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
      specs: { power: "646 HP", speed: "250 km/h", time: "3.3s" },
    },
  ];

  const stats = [
    // { number: '2500+', label: 'Véhicules Vendus', icon: <Car className="w-6 h-6" /> },
    {
      number: "98%",
      label: "Clients Satisfaits",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: "Ans d'Expérience",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      number: "50+",
      label: "Marques Premium",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <div className="text-xl font-bold">DriveUp</div>
                <div className="text-xs text-gray-400">Premium Dealership</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-10">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/cars"
                className="text-gray-300 hover:text-white transition"
              >
                New Cars
              </Link>

              <Link
                to="/used-cars"
                className="text-gray-300 hover:text-white transition"
              >
                Used Cars
              </Link>

              <Link
                to="/services"
                className="text-gray-300 hover:text-white transition"
              >
                Services
              </Link>

              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-white transition"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-2 text-gray-300 hover:text-white">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </button>
              <button className="lg:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-orange-600/10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
                <span className="text-red-400 text-sm font-medium">
                  🔥 New Collection 2024
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Drive Your
                <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Dream Car
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Découvrez notre collection exclusive de véhicules premium. Des
                performances exceptionnelles, un luxe incomparable.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition">
                  Voir la Collection
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition">
                  Prendre RDV
                </button>
              </div>
            </div>

            {/* Hero Car Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-20 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800"
                alt="Hero Car"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-1">
                <label className="text-sm text-gray-400 mb-2 block">Type</label>
                <select className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500">
                  <option>All Types</option>
                  <option>SUV</option>
                  <option>Sedan</option>
                  <option>Sports</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label className="text-sm text-gray-400 mb-2 block">
                  Marque
                </label>
                <select className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500">
                  <option>All Brands</option>
                  <option>BMW</option>
                  <option>Mercedes</option>
                  <option>Audi</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label className="text-sm text-gray-400 mb-2 block">
                  Prix Max
                </label>
                <input
                  type="text"
                  placeholder="€ 100,000"
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm text-gray-400 mb-2 block">
                  Année
                </label>
                <select className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500">
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 rounded-lg px-6 py-3 font-semibold hover:shadow-lg hover:shadow-red-500/50 transition flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition"
              >
                <div className="text-red-500 mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Collection Premium</h2>
              <p className="text-gray-400">
                Découvrez nos véhicules d'exception
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("new")}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeTab === "new"
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                Nouveaux
              </button>
              <button
                onClick={() => setActiveTab("used")}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeTab === "used"
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                Occasion
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map((car) => (
              <div key={car.id} className="group relative">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-600 transition">
                        <Star className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs text-red-500 font-semibold mb-2">
                      {car.category}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{car.name}</h3>

                    <div className="grid grid-cols-3 gap-2 mb-6 text-xs">
                      <div className="bg-black/50 rounded-lg p-2 text-center">
                        <div className="text-gray-400">Power</div>
                        <div className="font-semibold">{car.specs.power}</div>
                      </div>
                      <div className="bg-black/50 rounded-lg p-2 text-center">
                        <div className="text-gray-400">Speed</div>
                        <div className="font-semibold">{car.specs.speed}</div>
                      </div>
                      <div className="bg-black/50 rounded-lg p-2 text-center">
                        <div className="text-gray-400">0-100</div>
                        <div className="font-semibold">{car.specs.time}</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-2xl font-bold">
                          {car.price.toLocaleString()} FDJ
                        </div>
                      </div>
                      <button 
                      className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-red-500/50 transition">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition inline-flex items-center">
              Voir Tous les Véhicules
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Services Premium</h2>
            <p className="text-gray-400 text-lg">
              Une expérience client d'exception
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Garantie Totale</h3>
              <p className="text-gray-400 leading-relaxed">
                Tous nos véhicules sont certifiés et bénéficient d'une garantie
                complète jusqu'à 5 ans.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Financement Rapide</h3>
              <p className="text-gray-400 leading-relaxed">
                Solutions de financement flexibles avec réponse en moins de 24
                heures.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Service VIP</h3>
              <p className="text-gray-400 leading-relaxed">
                Accompagnement personnalisé par nos experts automobile dédiés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDI0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-4">
                Prêt à Conduire Votre Rêve ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contactez-nous dès maintenant et obtenez un devis personnalisé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-red-600 rounded-full font-bold hover:bg-gray-100 transition">
                  Prendre Rendez-vous
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white rounded-full font-bold hover:bg-white/30 transition">
                  Nous Contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <div className="text-lg font-bold">MITEL MOTOR</div>
                  <div className="text-xs text-gray-400">
                    Premium Dealership
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Votre destination premium pour l'achat de véhicules d'exception.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Nouveaux
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Occasion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    À propos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Financement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Assurance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Reprise
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Maintenance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+253 25313664</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@mitelmotor.fr</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Avenue des Champs-Élysées, Paris</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Mitel Motor. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
