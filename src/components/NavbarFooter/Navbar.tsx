import { Fragment, useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Disclosure as="nav" className="bg-white relative">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-1">
            <div className="w-full relative flex h-16 items-center justify-between">
              <div className='w-[20%]'>
                <div className='w-16'>
                  <Image src={logo} alt ="Logo" />
                </div>
              </div>
              <div>
                <div className="absolute inset-y-0 w-full left-0 p-6 flex justify-end items-center lg:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:bg-gray-500 hover:bg-gray-500">
                    <span className="sr-only">Open main menu</span>
                    <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify">
                  <div className="hidden lg:block sm:ml-6">
                    <div className="flex space-x-4 items-center">
                      <Link href="/">
                        <p className='text-slate-500 cursor-pointer hover:text-black px-3 py-2 rounded-md text-base'>Beranda</p>
                      </Link>
                      <Link href="/artikel">
                        <p className='text-slate-500 cursor-pointer hover:text-black px-3 py-2 rounded-md text-base'>Artikel</p>
                      </Link>
                      <Informasi />
                      <TentangKami />
                    </div>
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
        </>
      )}
    </Disclosure>
  );
}
