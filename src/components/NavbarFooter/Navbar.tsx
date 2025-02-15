import { Fragment, useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { GiHamburgerMenu, GiHole, GiNewspaper, GiInfo } from 'react-icons/gi';
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
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-1">
            <div className="w-full relative flex h-16 items-center justify-between">
              <div className='w-[20%]'>
                <div className='w-16'>
                  <Image src={logo} alt="Logo" />
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify">
                <div className="hidden lg:block sm:ml-6">
                  <div className="flex space-x-4 items-center">
                    <Link href="/">
                      <p className='relative text-slate-500 cursor-pointer hover:text-black px-3 py-2 rounded-md text-base after:content-[" "] after:block after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'>Beranda</p>
                    </Link>
                    <Link href="/artikel">
                      <p className='relative text-slate-500 cursor-pointer hover:text-black px-3 py-2 rounded-md text-base after:content-[" "] after:block after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'>Artikel</p>
                    </Link>
                    <Informasi />
                    <TentangKami />
                  </div>
                </div>
              </div>
              <div className='hidden lg:flex lg:justify-end w-[30%] items-center'>
                <div className='bg-[#FAE5DB] py-3 px-8 rounded-3xl font-semibold text-[#E77E49] text-sm mr-4 cursor-pointer'>Donasi</div>
                <div className='flex items-center bg-gray-200 py-3 px-6 rounded-3xl font-semibold text-gray-700 text-sm cursor-pointer'>
                  {time}
                </div>
              </div>
            </div>
          </div>
        )}
      </Disclosure>
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg py-3 flex justify-around items-center lg:hidden">
        <Link href="/">
          <div className="flex flex-col items-center text-gray-700 hover:text-black">
            <GiHole className="text-2xl" />
            <span className="text-xs">Beranda</span>
          </div>
        </Link>
        <Link href="/artikel">
          <div className="flex flex-col items-center text-gray-700 hover:text-black">
            <GiNewspaper className="text-2xl" />
            <span className="text-xs">Artikel</span>
          </div>
        </Link>
        <Disclosure.Button>
          <div className="flex flex-col items-center text-gray-700 hover:text-black">
            <GiHamburgerMenu className="text-2xl" />
            <span className="text-xs">Menu</span>
          </div>
        </Disclosure.Button>
        <Informasi />
        <TentangKami />
      </div>
    </>
  );
}
