"use client";

import { useState } from "react";
import Image from "next/image";
import { Radio, Calendar, Sparkles, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-sm border-b border-white/10 px-6 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-magenta rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur-sm"></div>
              <Image
                src="/diegonelson_logo.png"
                alt="Diego Nelson Logo"
                width={80}
                height={80}
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-black p-2 shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#about" className="flex items-center gap-2 hover:text-neon-cyan transition-colors">
              <Radio className="w-5 h-5" />
              Sobre el Evento
            </a>
            <a href="#sessions" className="flex items-center gap-2 hover:text-neon-pink transition-colors">
              <Calendar className="w-5 h-5" />
              Sesiones
            </a>
            <a href="#sponsors" className="flex items-center gap-2 hover:text-neon-magenta transition-colors">
              <Sparkles className="w-5 h-5" />
              Auspiciantes
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.youtube.com/@djdiegonelson" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-pink transition-colors transform hover:scale-110">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/djdiegonelson" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-cyan transition-colors transform hover:scale-110">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073 1.689.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden text-white hover:text-neon-cyan transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-4 py-4 px-6">
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-white/80 hover:text-neon-cyan transition-all duration-300 py-2 hover:translate-x-2"
            >
              <Radio className="w-5 h-5" />
              Sobre el Evento
            </a>
            <a 
              href="#sessions" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-white/80 hover:text-neon-pink transition-all duration-300 py-2 hover:translate-x-2"
            >
              <Calendar className="w-5 h-5" />
              Sesiones
            </a>
            <a 
              href="#sponsors" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-white/80 hover:text-neon-magenta transition-all duration-300 py-2 hover:translate-x-2"
            >
              <Sparkles className="w-5 h-5" />
              Auspiciantes
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 