"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const footerObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const footer = document.querySelector("footer");
    if (footer && buttonRef.current) {
      footerObserverRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsSticky(entry.isIntersecting);
        },
        {
          rootMargin: `${buttonRef.current.offsetHeight + 64}px 0px 0px 0px`,
          threshold: 0,
        }
      );

      footerObserverRef.current.observe(footer);
    }

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (footerObserverRef.current && footer) {
        footerObserverRef.current.unobserve(footer);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (buttonRef.current) {
      const footer = document.querySelector('footer');
      if (footer && isSticky) {
        const footerTop = window.scrollY + footer.getBoundingClientRect().top;
        buttonRef.current.style.position = 'absolute';
        buttonRef.current.style.top = `${footerTop - 24}px`;
        buttonRef.current.style.bottom = 'auto';
        buttonRef.current.style.transform = 'none';
      } else {
        buttonRef.current.style.position = 'fixed';
        buttonRef.current.style.top = 'auto';
        buttonRef.current.style.bottom = '64px';
        buttonRef.current.style.transform = 'none';
      }
    }
  }, [isSticky]);

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      style={{
        right: '32px',
        padding: '12px',
        position: 'fixed',
        bottom: '64px',
      }}
      className={`
        rounded-full bg-black/50 backdrop-blur-sm border border-white/10 
        text-white transition-all duration-300 hover:scale-110 hover:bg-black/70 
        hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] z-[9999]
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
