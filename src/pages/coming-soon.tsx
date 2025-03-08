import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function ComingSoonPage() {
  const targetDate = new Date('2025-02-26T22:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-white relative px-6">
      <Head>
        <title>Coming Soon</title>
      </Head>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat backdrop-blur-md" 
        style={{ backgroundImage: "url('/img/Medsel3.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">{timeLeft.days}</h1>
        <p className="text-xl md:text-2xl">Days</p>
      </div>
      
      <div className="flex gap-6 mt-4 text-center relative z-10">
        {(['hours', 'minutes', 'seconds'] as Array<keyof typeof timeLeft>).map((unit, idx) => (
          <div key={idx} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">{timeLeft[unit]}</h2>
            <p className="text-sm md:text-base">{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
          </div>
        ))}
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold mt-10 relative z-10">COMING SOON</h2>
      <p className="text-sm md:text-lg mt-2 relative z-10">Our website is under construction. Stay tuned!</p>
      
      <div className="relative z-10 mt-6">
        <button className="px-6 py-2 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg transition">Notify Me</button>
      </div>
    </div>
  );
}
