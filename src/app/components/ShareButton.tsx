'use client';

import { FC } from 'react';

interface ShareButtonProps {
  title: string;
  date: string;
  time: string;
  location: string;
}

const ShareButton: FC<ShareButtonProps> = ({ title, date, time, location }) => {
  const handleShare = () => {
    const shareData = {
      title: title,
      text: `${title} - ${date} ${time}\n${location}`,
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData)
        .catch((error) => console.log('Error sharing:', error));
    } else {
      navigator.clipboard.writeText(
        `${shareData.title}\n${shareData.text}\n${shareData.url}`
      ).then(() => {
        alert('¡Enlace copiado al portapapeles!');
      }).catch(() => {
        alert('No se pudo copiar el enlace');
      });
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      title="Compartir evento"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    </button>
  );
};

export default ShareButton;