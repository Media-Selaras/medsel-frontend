import Head from 'next/head';
import Image from 'next/image';
import medsel from '../../public/img/Logo.svg';

export default function ComingSoonPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-200 to-orange-400 relative overflow-hidden">
      <Head>
        <title>Media Selaras - Coming Soon</title>
        <meta name="description" content="Media Selaras akan segera hadir dengan berbagai konten edukatif dan sosial." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background Blobs */}
      <div className="absolute w-[400px] h-[400px] bg-orange-300 opacity-30 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse" />
      <div className="absolute w-[600px] h-[600px] bg-orange-500 opacity-30 rounded-full blur-3xl bottom-[-200px] right-[-200px] animate-pulse" />
      
      {/* Logo */}
      <Image src={medsel} width={150} height={150} alt="Media Selaras Logo" className="animate-fadeIn" />
      
      {/* Coming Soon Text */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 animate-bounce">Coming Soon</h1>
      <p className="text-lg text-white mt-2">Kami sedang mempersiapkan sesuatu yang luar biasa untuk Anda.</p>
      
      {/* Marquee Effect */}
      <div className="absolute bottom-10 w-full overflow-hidden whitespace-nowrap">
        <div className="inline-block text-xl text-white font-bold animate-marquee">
          COMING SOON &bull; COMING SOON &bull; COMING SOON &bull; COMING SOON &bull; COMING SOON
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
