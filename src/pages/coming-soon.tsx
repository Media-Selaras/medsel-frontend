import Head from 'next/head';
import Image from 'next/image';
import medsel from '../../public/img/Logo.svg';
import { useEffect, useState } from 'react';

export default function ComingSoonPage() {
  // Set your target date for the countdown
  const targetDate = new Date('2024-02-23T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state with remaining time
      setTimeLeft({ days, hours, minutes, seconds });

      // Clear interval when countdown is over
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
      <Head>
        <title>Media Selaras - Coming Soon</title>
        <meta name="description" content="Media Selaras akan segera hadir dengan berbagai konten edukatif dan sosial." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background Stars */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/stars-bg.jpg')" }} />

      {/* Logo */}
      <Image src={medsel} width={150} height={150} alt="Media Selaras Logo" className="animate-fadeIn" />
      
      {/* Coming Soon Text */}
      <h1 className="text-5xl md:text-8xl font-bold text-white mt-6 animate-bounce">COMING SOON</h1>
      <p className="text-lg text-gray-300 mt-2">Kami sedang mempersiapkan sesuatu yang luar biasa untuk Anda.</p>

      {/* Countdown Timer */}
      <div className="flex flex-col items-center mt-10 text-white">
        <span className="text-2xl">{timeLeft.days} Days</span>
        <span className="text-2xl">{timeLeft.hours} Hours</span>
        <span className="text-2xl">{timeLeft.minutes} Minutes</span>
        <span className="text-2xl">{timeLeft.seconds} Seconds</span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out;
        }
      `}</style>
    </div>
  );
}