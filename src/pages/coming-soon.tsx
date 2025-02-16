import Head from 'next/head';
import Image from 'next/image';
import medsel from '../../public/img/Logo.svg';

export default function ComingSoonPage() {
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

      {/* Progress Bar */}
      <div className="flex flex-col items-center mt-10">
        <span className="text-white">62%</span>
        <div className="w-full max-w-md bg-gray-700 rounded-full h-2.5 relative mt-2">
          <div className="bg-gradient-to-r from-blue-500 to-pink-500 h-full rounded-full" style={{ width: "62%" }} />
        </div>
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