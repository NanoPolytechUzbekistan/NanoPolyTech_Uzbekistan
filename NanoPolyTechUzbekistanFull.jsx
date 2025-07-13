import React, { useState } from "react";
import { motion } from "framer-motion";

const LanguageSwitcher = ({ language, setLanguage }) => (
  <div className="flex justify-center mb-4 space-x-4">
    <button onClick={() => setLanguage("uz")} className={`px-3 py-1 rounded ${language === "uz" ? "bg-blue-700 text-white" : "bg-gray-200"}`}>🇺🇿 UZ</button>
    <button onClick={() => setLanguage("en")} className={`px-3 py-1 rounded ${language === "en" ? "bg-blue-700 text-white" : "bg-gray-200"}`}>🇬🇧 EN</button>
    <button onClick={() => setLanguage("ru")} className={`px-3 py-1 rounded ${language === "ru" ? "bg-blue-700 text-white" : "bg-gray-200"}`}>🇷🇺 RU</button>
  </div>
);

const Header = () => (
  <div className="text-center">
    <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">NanoPolyTech_Uzbekistan</h1>
    <h2 className="text-xl sm:text-2xl italic text-indigo-700 mb-2">“Kichik zarrachalardan buyuk kelajak sari”</h2>
    <div className="bg-yellow-100 text-lg font-semibold text-yellow-800 py-3 px-4 rounded-xl shadow-md inline-block">
      Shiori: “Biz kichik zarrachalardan buyuk kelajakga yo‘l ochamiz!”
    </div>
  </div>
);

export default function NanoPolyTechUzbekistanFull() {
  const [language, setLanguage] = useState("uz");

  return (
    <div className="bg-white text-gray-800 font-sans px-4 sm:px-6 py-6 sm:py-10 max-w-5xl mx-auto">
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
      <Header />
      <div className="mt-6 text-center text-gray-500">
        <p>📌 Bu tayyor deploy versiyasi. Endi bemalol GitHub Pages’ga chiqarish mumkin.</p>
      </div>
    </div>
  );
}