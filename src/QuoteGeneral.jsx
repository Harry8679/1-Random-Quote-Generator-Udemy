import React, { useState } from "react";

const quotes = [
  "Le seul vrai échec est l'abandon.",
  "Fais de ta vie un rêve, et d'un rêve, une réalité.",
  "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.",
  "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.",
  "N'attends pas l'occasion, crée-la."
];

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <p className="text-xl font-semibold text-gray-800">"{quote}"</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={generateQuote}
        >
          Nouvelle citation
        </button>
      </div>
    </div>
  );
}