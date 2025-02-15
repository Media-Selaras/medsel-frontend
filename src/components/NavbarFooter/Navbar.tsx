import { useEffect, useState, useRef, useCallback } from 'react';
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
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = useCallback(() => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50 && touchStartX.current > window.innerWidth - 100) setIsOpen(true);
    else if (swipeDistance < -50 && isOpen) setIsOpen(false);
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart as unknown as EventListener);
    window.addEventListener('touchmove', handleTouchMove as unknown as EventListener);
    window.addEventListener('touchend', handleTouchEnd as unknown as EventListener);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
      window.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
      window.removeEventListener('touchend', handleTouchEnd as unknown as EventListener);
    };
  }, [handleTouchEnd]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-1 flex justify-between items-center h-16">
          <div className="w-16">
            <Image src={logo} alt="Logo" />
          </div>
          <div className="lg:hidden">
            <button
              className="absolute top-4 right-4 z-50 p-2 text-gray-900 hover:bg-gray-500 rounded-md"
              onClick={toggleMenu}
            >
              <GiHamburgerMenu className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex space-x-4 items-center">
            <Link href="/" className="px-3 py-2 hover:text-black">Beranda</Link>
            <Link href="/artikel" className="px-3 py-2 hover:text-black">Artikel</Link>
            <Informasi />
            <TentangKami />
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="bg-[#FAE5DB] py-3 px-8 rounded-3xl font-semibold text-[#E77E49] text-sm cursor-pointer">Donasi</div>
            <div className="bg-gray-200 py-3 px-6 rounded-3xl font-semibold text-gray-700 text-sm">{time}</div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-56 bg-white shadow-md transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="px-4 py-6">
          <Link href="/" className="block px-3 py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Beranda</Link>
          <Link href="/artikel" className="block px-3 py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Artikel</Link>
          <Informasi />
          <TentangKami />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-black/50 z-30" onClick={() => setIsOpen(false)}></div>
      )}

      <div className="pt-16"></div>
    </>
  );
}