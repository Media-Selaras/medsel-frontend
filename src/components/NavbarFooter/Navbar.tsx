import { useEffect, useState, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import logo from '~/logo.svg';
import TentangKami from './TentangKamiDropdown';
import Informasi from './InformasiDropdown';
import Link from 'next/link';

export default function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fungsi untuk menangani swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (swipeDistance > 50 && touchStartX.current > window.innerWidth - 100) {
      // Swipe kanan ke kiri dari tepi kanan layar -> Buka menu
      setIsOpen(true);
      e.preventDefault();
    } else if (swipeDistance < -50 && isOpen) {
      // Swipe kiri ke kanan saat menu terbuka -> Tutup menu
      setIsOpen(false);
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'}`}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-1">
          <div className="relative flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="w-16">
              <Image src={logo} alt="Logo" />
            </div>

            {/* Hamburger Button */}
            <div className="lg:hidden">
              <button
                className="absolute top-4 right-4 z-50 inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:bg-gray-500 hover:bg-gray-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex space-x-4 items-center">
                <Link href="/">
                  <p className="relative text-slate-500 cursor-pointer hover:text-black px-3 py-2 rounded-md text-base after:content-[''] after:block after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                    Beranda
                  </p>
                </Link>
                <Link href="/artikel">
                  <p className="relative text-slate-500 cursor-pointer hover:text-black px-3 py-2 rounded-md text-base after:content-[''] after:block after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                    Artikel
                  </p>
                </Link>
                <Informasi />
                <TentangKami />
              </div>
            </div>

            {/* Waktu dan Donasi */}
            <div className="hidden lg:flex lg:justify-end w-[30%] items-center">
              <div className="bg-[#FAE5DB] py-3 px-8 rounded-3xl font-semibold text-[#E77E49] text-sm mr-4 cursor-pointer">Donasi</div>
              <div className="flex items-center bg-gray-200 py-3 px-6 rounded-3xl font-semibold text-gray-700 text-sm cursor-pointer">
                {time}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="px-4 py-6">
          <Link href="/" className="block px-3 py-2 text-gray-900 hover:bg-gray-200 rounded-md">Beranda</Link>
          <Link href="/artikel" className="block px-3 py-2 text-gray-900 hover:bg-gray-200 rounded-md">Artikel</Link>
          <Informasi />
          <TentangKami />
        </div>
      </div>

      {/* Overlay untuk menutup menu saat diklik di luar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Padding untuk menghindari konten tertutup navbar */}
      <div className="pt-16"></div>
    </>
  );
}
