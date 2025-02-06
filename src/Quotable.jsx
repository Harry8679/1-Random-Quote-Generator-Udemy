import React, { useState, useEffect } from "react";

export default function QuoteGenerator() {
  const [quote, setQuote] = useState("Chargement...");
  
  // Fonction pour récupérer une citation depuis l'API
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content); // Met à jour la citation
    } catch (error) {
      setQuote("Impossible de récupérer une citation. Réessayez !");
      console.error("Erreur de récupération de la citation :", error);
    }
  };

  // Charger une première citation au montage du composant
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <p className="text-xl font-semibold text-gray-800">"{quote}"</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={fetchQuote}
        >
          Nouvelle citation
        </button>
      </div>
    </div>
  );
}
