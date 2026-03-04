import React, { useState } from "react";
import {
  Instagram,
  ShoppingBag,
  ArrowRight,
  Share2,
  CheckCircle2,
  Sparkles,
  Heart,
  BookOpen,
} from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V15c0 2.22-1.03 4.41-2.91 5.63-1.88 1.22-4.39 1.43-6.44.53-2.05-.9-3.53-3.03-3.61-5.28-.08-2.25 1.18-4.48 3.2-5.49 1.4-.7 3.01-.83 4.51-.4v4.04c-1.12-.34-2.34-.14-3.26.6-.92.74-1.35 1.95-1.15 3.09.2 1.14 1.12 2.11 2.22 2.45 1.1.34 2.37.07 3.22-.73.85-.8 1.13-2.04 1.13-3.18V.02h-.48z" />
  </svg>
);

const App = () => {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      title: "Shopee Official Store",
      description: "Belanja koleksi lengkap & nikmati promo gratis ongkir",
      icon: <ShoppingBag className="w-5 h-5" />,
      url: "https://shopee.co.id/stance.id", // Pastikan URL lengkap agar bisa diklik
      tag: "Shop Now",
      isPrimary: true,
    },
    {
      title: "TikTok Shop & Live",
      description: "Belanja langsung dari konten & sesi Live eksklusif",
      icon: <TikTokIcon />,
      url: "https://www.tiktok.com/@stance.id",
      tag: "Live Shopping",
      isPrimary: true,
    },
    {
      title: "Instagram Gallery",
      description: "Lihat katalog lengkap, lookbook & update harian",
      icon: <BookOpen className="w-5 h-5" />,
      url: "https://www.instagram.com/stance.idn/",
      tag: "Katalog",
      isPrimary: false,
    },
  ];

  // Data Foto Katalog Baru
  const catalogPhotos = [
    {
      name: "Luna Stripe",
      url: "https://i.pinimg.com/1200x/e2/fc/8e/e2fc8e17972c200e8edba889ae2deb6a.jpg", // Contoh visual kemeja stripe
    },
    {
      name: "Etta Pants",
      url: "https://i.pinimg.com/1200x/5c/a8/ff/5ca8ff9ef07d79e51bc27e1f6e11c4c3.jpg", // Contoh visual celana kain
    },
    {
      name: "Minimalist Shirt",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjv7_6JEwKGRxjDC5VaA3CWZw6UDHKp63ag&s", // Contoh visual kemeja minimalis
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-zinc-900 flex flex-col items-center p-6 font-serif selection:bg-[#E7C36D]/20 overflow-x-hidden">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-[radial-gradient(circle_at_50%_15%,#fff9eb_0%,transparent_60%)] pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-md flex flex-col items-center mt-12 mb-12 z-10 text-center">
        <div className="relative mb-8 group">
          <div className="absolute -inset-6 bg-[#E7C36D]/10 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-1000"></div>

          {/* Logo Container (Fixed Struktur) */}
          <div className="relative w-28 h-28 rounded-full border-[0.5px] border-[#E7C36D]/40 flex items-center justify-center bg-white shadow-sm overflow-hidden">
            <img
              src="/Stance - Logo.png"
              alt="Stance Logo"
              className="w-full h-full object-cover p-2" // p-2 untuk sedikit ruang jika logo berbentuk kotak
            />
          </div>

          <button
            onClick={copyToClipboard}
            className="absolute bottom-0 right-0 p-2.5 bg-white border border-[#E7C36D]/20 rounded-full hover:bg-zinc-50 transition-all shadow-lg text-[#A8883B] z-20"
          >
            {copied ? (
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            ) : (
              <Share2 className="w-4 h-4" />
            )}
          </button>
        </div>

        <h1 className="text-3xl font-light tracking-[0.35em] uppercase text-zinc-900 mb-2">
          Stance<span className="text-[#A8883B]">.id</span>
        </h1>

        <div className="text-zinc-400 text-[10px] uppercase tracking-[0.25em] mb-4 font-sans font-medium flex flex-col space-y-1">
          <span>Dress with Stance.</span>
          <span>Define Your Future.</span>
        </div>

        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#E7C36D]/50 to-transparent mx-auto mb-6"></div>
      </header>

      {/* Links Grid */}
      <main className="w-full max-w-md space-y-5 z-10 font-sans">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full no-underline"
          >
            {link.isPrimary && (
              <div className="absolute -inset-[0.5px] bg-[#E7C36D]/0 group-hover:bg-[#E7C36D]/10 rounded-lg blur-sm transition-all duration-500" />
            )}
            <div
              className={`relative bg-white/80 backdrop-blur-md border ${link.isPrimary ? "border-[#E7C36D]/20 group-hover:border-[#E7C36D]/60" : "border-zinc-200"} p-5 rounded-lg flex items-center transition-all duration-500 shadow-sm group-hover:shadow-md`}
            >
              <div
                className={`${link.isPrimary ? "text-[#A8883B]" : "text-zinc-400"} transition-all duration-300 mr-5 group-hover:scale-110`}
              >
                {link.icon}
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-0.5">
                  <h3
                    className={`font-semibold text-sm tracking-wide ${link.isPrimary ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-800"} transition-colors`}
                  >
                    {link.title}
                  </h3>
                  {link.tag && (
                    <span
                      className={`text-[7px] ${link.isPrimary ? "bg-[#FDF6E3] text-[#A8883B] border-[#E7C36D]/30" : "bg-zinc-100 text-zinc-500 border-zinc-200"} px-2 py-0.5 rounded-full uppercase tracking-widest border font-bold`}
                    >
                      {link.tag}
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-zinc-500 group-hover:text-zinc-600 transition-colors leading-relaxed">
                  {link.description}
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 ml-2">
                <ArrowRight className="w-4 h-4 text-[#A8883B]" />
              </div>
            </div>
          </a>
        ))}

        {/* Catalog Mood Section (Updated) */}
        <div className="mt-12 pt-8 border-t border-zinc-100 relative overflow-hidden">
          <div className="flex items-center justify-center space-x-2 mb-4 opacity-60 group cursor-default">
            <Sparkles className="w-3 h-3 text-[#A8883B]" />
            <span className="text-[9px] uppercase tracking-[0.5em] text-zinc-500 font-bold">
              The Catalog Mood
            </span>
            <Sparkles className="w-3 h-3 text-[#A8883B]" />
          </div>

          <div className="grid grid-cols-3 gap-2 px-2">
            {catalogPhotos.map((photo, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="aspect-[3/4] w-full bg-zinc-50 border border-zinc-100 rounded-lg overflow-hidden relative group">
                  <img
                    src={photo.url}
                    alt={photo.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Nama produk opsional di bawah foto */}
                <span className="text-[7px] uppercase tracking-tighter mt-2 text-zinc-400 font-sans">
                  {photo.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] text-zinc-400 mt-6 italic font-serif">
            "Style is a way to say who you are without having to speak."
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 mb-12 text-center z-10 font-sans">
        <div className="flex justify-center space-x-12 mb-10">
          <a
            href="https://www.instagram.com/stance.idn/"
            className="text-zinc-300 hover:text-[#A8883B] transition-all transform hover:-translate-y-1"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@stance.id"
            className="text-zinc-300 hover:text-[#A8883B] transition-all transform hover:-translate-y-1"
          >
            <TikTokIcon />
          </a>
          <a
            href="#"
            className="text-zinc-300 hover:text-[#A8883B] transition-all transform hover:-translate-y-1 group/heart"
          >
            <Heart className="w-5 h-5 transition-colors duration-300 group-hover/heart:fill-[#A8883B]" />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-[8px] text-zinc-400 uppercase tracking-[0.6em] font-bold">
            Stance.id Exclusive &copy; {currentYear}
          </p>
          <div className="w-4 h-[1px] bg-[#E7C36D]/40"></div>
        </div>
      </footer>
    </div>
  );
};

export default App;
