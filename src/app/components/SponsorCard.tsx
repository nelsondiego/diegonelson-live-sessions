'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Sponsor } from '../types';

interface SponsorCardProps {
  sponsor: Sponsor;
}

const SponsorCard: FC<SponsorCardProps> = ({ sponsor }) => {
  const baseStyles = 'rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg';

  const tierStyles = {
    platinum: `${baseStyles} border-2 border-white/20 hover:border-white/40 hover:shadow-white/20 p-6`,
    gold: `${baseStyles} border border-yellow-500/20 hover:border-yellow-500/40 hover:shadow-yellow-500/20 p-5`,
    silver: `${baseStyles} border border-gray-400/20 hover:border-gray-400/40 hover:shadow-gray-400/20 p-4`,
    bronze: `${baseStyles} border border-amber-600/20 hover:border-amber-600/40 hover:shadow-amber-600/20 p-3`,
  };

  const logoSizes = {
    platinum: 'w-48 h-48',
    gold: 'w-40 h-40',
    silver: 'w-32 h-32',
    bronze: 'w-24 h-24',
  };

  const getTierStyles = (tier: Sponsor['tier']) => tierStyles[tier] || baseStyles;
  const getLogoSize = (tier: Sponsor['tier']) => logoSizes[tier] || 'w-32 h-32';

  return (
    <div className={getTierStyles(sponsor.tier)}>
      <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="relative aspect-square">
          <Image
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className={`${getLogoSize(sponsor.tier)} object-contain transition-transform duration-300 group-hover:scale-105`}
            width={200}
            height={200}
          />
        </div>
        {sponsor.description && (
          <p className="mt-4 text-sm text-white/70 group-hover:text-white/90 transition-colors">
            {sponsor.description}
          </p>
        )}
      </a>
    </div>
  );
};

export default SponsorCard;