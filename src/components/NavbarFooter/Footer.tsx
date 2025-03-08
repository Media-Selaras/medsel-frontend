import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import TentangKami from './TentangKamiDropdown';
import Informasi from './InformasiDropdown';
import logo from '~/logo.svg';

export default function Footer() {
    return (
        <footer className="w-full bg-white px-6 py-8 lg:px-14 lg:py-12 border-t border-gray-200">
            <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
                {/* Logo dan Social Media */}
                <div className="flex flex-col items-center lg:items-start">
                    <Image src={logo} alt="Logo" width={120} height={40} />
                    <div className="flex gap-4 mt-4">
                        <BsInstagram size={24} className="text-gray-500 hover:text-black cursor-pointer" />
                        <BsTwitter size={24} className="text-gray-500 hover:text-black cursor-pointer" />
                        <BsLinkedin size={24} className="text-gray-500 hover:text-black cursor-pointer" />
                    </div>
                </div>

                {/* Navigasi */}
                <div className="grid grid-cols-2 gap-6 text-center lg:text-left">
                    <div>
                        <h3 className="text-black font-semibold">Navigasi</h3>
                        <Link href="/"><p className="text-gray-500 hover:text-black cursor-pointer mt-2">Beranda</p></Link>
                        <Informasi />
                        <TentangKami />
                        <p className="text-gray-500 hover:text-black cursor-pointer mt-2">Kontak</p>
                    </div>
                    <div>
                        <h3 className="text-black font-semibold">Informasi</h3>
                        <p className="text-gray-500 hover:text-black cursor-pointer mt-2">Medcast</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Koperasi Selaras</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Info Magang</p>
                        <p className="text-gray-500 hover:text-black cursor-pointer">Info Beasiswa</p>
                    </div>
                </div>

                {/* Kebijakan */}
                <div className="flex flex-col items-center lg:items-end">
                    <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Media Selaras. All rights reserved.</p>
                    <div className="flex gap-4 mt-4">
                        <p className="text-sm underline text-gray-500 hover:text-black cursor-pointer">Privacy Policy</p>
                        <p className="text-sm underline text-gray-500 hover:text-black cursor-pointer">Terms of Service</p>
                        <p className="text-sm underline text-gray-500 hover:text-black cursor-pointer">Cookies Settings</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
