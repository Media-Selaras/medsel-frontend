import React, { useState } from 'react';
import NextImage from '@/components/NextImage';

type CommunityCardProps = {
  logoSrc: string;
  communityName: string;
};

const CommunityCard: React.FC<CommunityCardProps> = ({ logoSrc, communityName }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative w-32 h-32 perspective`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute backface-hidden w-full h-full">
          <NextImage src={logoSrc} alt={communityName} layout="fill" objectFit="contain" />
        </div>
        <div className={`absolute backface-hidden w-full h-full bg-white flex items-center justify-center rotate-y-180`}>
          <h3 className="text-center font-bold">{communityName}</h3>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;