import { Fragment, useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import logo from '~/logo.svg';
import TentangKami from './TentangKamiDropdown';
import Informasi from './InformasiDropdown';
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <>
      <Disclosure as="nav" className={classNames(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'
      )}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-1">
              <div className="relative flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="w-16">
                  <Image src={logo} alt="Logo" />
                </div>

                {/* Hamburger Button */}
                <div className="lg:hidden">
                  <Disclosure.Button className="absolute top-4 right-4 z-50 inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:bg-gray-500 hover:bg-gray-500">
                    <span className="sr-only">Open main menu</span>
                    <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
                  </Disclosure.Button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-1 justify-center">
                  <div className="flex space-x-4 items-center">
                    <Link href="/">
                      <p className="relative text-slate-500 cursor-pointer hover:text-black px-3 py-2 rounded-md text-base after:content-[''] after:block after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                        Beranda
                      </p>
                    </Link>
                    <Informasi />
                    <TentangKami />
                  </div>
                </div>

                {/* Waktu dan Donasi */}
                <div className="hidden lg:flex lg:justify-end w-[30%] items-center">
                  <div className="bg-[#FAE5DB] py-3 px-8 rounded-3xl font-semibold text-[#E77E49] text-sm mr-4 cursor-pointer">
                    Donasi
                  </div>
                  <div className="flex items-center bg-gray-200 py-3 px-6 rounded-3xl font-semibold text-gray-700 text-sm cursor-pointer">
                    {time}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <Disclosure.Panel className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md">
              <div className="px-4 pt-4 pb-4 space-y-3"> {/* Tambah padding & jarak antar menu */}
                <Link href="/" className="block px-4 py-3 mx-2 text-gray-900 hover:bg-gray-200 rounded-md">
                  Beranda
                </Link>

                {/* Perbaiki posisi submenu di mobile */}
                <div className="mx-2 pl-4"> {/* Tambah padding kiri */}
                  <Informasi className="text-right" /> {/* Geser isi submenu ke kanan */}
                </div>
                <div className="mx-2 pl-4"> {/* Tambah padding kiri */}
                  <TentangKami className="text-right" /> {/* Geser isi submenu ke kanan */}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Padding untuk menghindari konten tertutup navbar */}
      <div className="pt-16"></div>
    </>
  );
}
