import React, { useState } from "react";
import { X, User } from "lucide-react";
import Userdata from "../data/Userdata";
import { useAuth } from "../context/userContext";

function Connexion({
  showLoginModal,
  setShowLoginModal,
  setShowReservationModal,
}) {
  const [isRegistering, setIsRegistering] = useState(false);
  const { login } = useAuth();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [registerForm, setRegisterForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const user = login(loginForm.email, loginForm.password);
    if (user.success) {
      setShowLoginModal(false);
      setShowReservationModal(true);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (registerForm.password !== registerForm.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    const emailExists = Userdata.some(
      (u) => u.email === registerForm.email.toLowerCase()
    );

    if (emailExists) {
      alert("Cet email existe déjà");
      return;
    }

    const newUser = {
      id: Userdata.length + 1,
      nom: registerForm.nom,
      prenom: registerForm.prenom,
      email: registerForm.email.toLowerCase(),
      telephone: registerForm.telephone,
      password: registerForm.password,
    };

    Userdata.push(newUser); // simulation frontend

    console.log("NOUVEL UTILISATEUR :", newUser);

    alert("Compte créé avec succès");

    setIsRegistering(false);
  };

  if (!showLoginModal) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-md w-full border border-gray-700 relative">
        <button
          onClick={() => {
            setShowLoginModal(false);
            setIsRegistering(false);
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {isRegistering ? "Créer un compte" : "Connexion"}
            </h2>
            <p className="text-gray-400 text-sm">
              {isRegistering
                ? "Rejoignez Mitel Motor"
                : "Accédez à votre compte"}
            </p>
          </div>

          {!isRegistering ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white"
                placeholder="Email"
                required
              />

              <input
                type="password"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white"
                placeholder="Mot de passe"
                required
              />

              <button className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-semibold">
                Se connecter
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsRegistering(true)}
                  className="text-red-500 text-sm"
                >
                  Pas encore de compte ? Inscrivez-vous
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Nom"
                  value={registerForm.nom}
                  onChange={(e) =>
                    setRegisterForm({ ...registerForm, nom: e.target.value })
                  }
                  className="input"
                  required
                />
                <input
                  placeholder="Prénom"
                  value={registerForm.prenom}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      prenom: e.target.value,
                    })
                  }
                  className="input"
                  required
                />
              </div>

              <input
                placeholder="Email"
                value={registerForm.email}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, email: e.target.value })
                }
                className="input"
                required
              />

              <input
                placeholder="Téléphone"
                value={registerForm.telephone}
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    telephone: e.target.value,
                  })
                }
                className="input"
                required
              />

              <input
                type="password"
                placeholder="Mot de passe"
                value={registerForm.password}
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    password: e.target.value,
                  })
                }
                className="input"
                required
              />

              <input
                type="password"
                placeholder="Confirmer mot de passe"
                value={registerForm.confirmPassword}
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    confirmPassword: e.target.value,
                  })
                }
                className="input"
                required
              />

              <button className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-semibold">
                S'inscrire
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsRegistering(false)}
                  className="text-red-500 text-sm"
                >
                  Déjà un compte ? Connectez-vous
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Connexion;
