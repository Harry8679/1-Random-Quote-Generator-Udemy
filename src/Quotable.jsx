import React, { useState, useEffect } from "react";

export default function Quotable() {
  const [quote, setQuote] = useState("Chargement...");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }

      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      setError(false); // Réinitialiser l'erreur en cas de succès
    } catch (err) {
      setError(true);
      console.error("Erreur :", err);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        {error ? (
          <p className="text-red-500">⚠️ Impossible de récupérer une citation</p>
        ) : (
          <>
            <p className="text-xl font-semibold text-gray-800">"{quote}"</p>
            {author && <p className="mt-2 text-gray-600">- {author}</p>}
          </>
        )}
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
