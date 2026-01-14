import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6 mt-20">
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
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Nos Voitures
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
                  <span>contact@mitelmotor.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Djibouti City, Djibouti</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Mitel Motor. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer