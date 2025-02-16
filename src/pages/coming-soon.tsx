import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function ComingSoonPage() {
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

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white relative">
      <Head>
        <title>Coming Soon</title>
      </Head>
      <div className="text-center">
        <h1 className="text-8xl font-bold">{timeLeft.days}</h1>
        <p className="text-2xl">Days</p>
      </div>
      <div className="flex gap-6 mt-4 text-center">
        <div>
          <h2 className="text-4xl font-bold">{timeLeft.hours}</h2>
          <p>Hrs</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">{timeLeft.minutes}</h2>
          <p>Min</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">{timeLeft.seconds}</h2>
          <p>Sec</p>
        </div>
      </div>
      <h2 className="text-5xl font-bold mt-10">COMING SOON</h2>
      <p className="text-lg mt-2">Our website is under construction. Stay tuned!</p>
      <div className="mt-6 flex items-center">
        <input type="email" placeholder="Subscribe Newsletter" className="p-2 rounded-md text-black" />
        <button className="ml-2 bg-green-500 p-2 rounded-md">✔</button>
      </div>
    </div>
  );
}
