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

      {/* Logo */}
      <Image src={medsel} width={150} height={150} alt="Media Selaras Logo" className="animate-fadeIn mb-6" />
      
      {/* Coming Soon Text */}
      <h1 className="text-6xl font-bold text-white animate-bounce">COMING SOON</h1>
      <p className="text-lg text-gray-300 mt-2">Website kami sedang dalam pembangunan. Bersiaplah untuk konten luar biasa!</p>

      {/* Countdown Timer */}
      <div className="flex flex-col items-center mt-10 text-white">
        <span className="text-4xl font-bold">{timeLeft.days} <span className="text-sm">Days</span></span>
        <span className="text-4xl font-bold">{timeLeft.hours} <span className="text-sm">Hours</span></span>
        <span className="text-4xl font-bold">{timeLeft.minutes} <span className="text-sm">Minutes</span></span>
        <span className="text-4xl font-bold">{timeLeft.seconds} <span className="text-sm">Seconds</span></span>
      </div>

      {/* Subscribe Section */}
      <div className="flex flex-col items-center mt-10">
        <input
          type="email"
          placeholder="Subscribe to our newsletter"
          className="p-2 rounded-md text-black"
        />
        <button className="mt-2 bg-green-500 text-white p-2 rounded-md">Subscribe</button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-30px); }
          60% { transform: translateY(-15px); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}