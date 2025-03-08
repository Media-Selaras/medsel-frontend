import { useState } from "react";
import Navbar from "@/components/NavbarFooter/Navbar";
import Footer from "@/components/NavbarFooter/Footer";
import Layout from "@/components/Layout/Layout";

interface Artikel {
    kategori: string;
    judul: string;
    deskripsi: string;
    penulis: string;
    tanggal: string;
}

const daftarArtikel: Artikel[] = [
    { kategori: "INTERNAL", judul: "RIUH WISUDA TERPUSAT", deskripsi: "Merupakan Kegiatan Rutin...", penulis: "Muhammad Rizky Saputra", tanggal: "9 October 2024, 00:00" },
    { kategori: "INTERNAL", judul: "AKSATA ANUCARA", deskripsi: "Merupakan Kegiatan ITERA...", penulis: "Menuk Rani Shinta Ramaito", tanggal: "30 August 2024, 00:00" },
    { kategori: "INTERNAL", judul: "MODERASI AGAMA", deskripsi: "Merupakan Wadah Diskusi...", penulis: "Yumna Najwa Ikhsan", tanggal: "14 September 2024, 13:00" },
    { kategori: "EKSTERNAL", judul: "ITERA MENGAJAR", deskripsi: "Berfokus untuk Memberikan...", penulis: "Ghias Fabian Malik", tanggal: "20 September 2024, 00:00" },
];

export default function DaftarArtikel() {
    return (
        <Layout>
            <main className="bg-white">
                <Navbar />
                <div className="container mx-auto p-8">
                    <h1 className="text-3xl font-bold text-center mb-6">Daftar Artikel</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {daftarArtikel.map((artikel, index) => (
                            <div key={index} className="border p-4 rounded shadow-md">
                                <span className="text-sm text-gray-500">{artikel.kategori}</span>
                                <h2 className="text-xl font-semibold">{artikel.judul}</h2>
                                <p className="text-gray-700 mt-2">{artikel.deskripsi}</p>
                                <div className="text-sm text-gray-600 mt-4">
                                    <p>🖊️ {artikel.penulis}</p>
                                    <p>📅 {artikel.tanggal}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </main>
        </Layout>
    );
}
