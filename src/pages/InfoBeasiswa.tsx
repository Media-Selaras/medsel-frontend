import { useState } from "react";
import Navbar from "@/components/NavbarFooter/Navbar";
import Footer from "@/components/NavbarFooter/Footer";
import Layout from "@/components/Layout/Layout";

interface Beasiswa {
    nomor: number;
    nama: string;
    tanggalDibuka: string;
    tanggalBerakhir: string;
    persyaratan: string;
    status: string;
    tautan: string;
}

const daftarBeasiswa = [
    { nomor: 1, nama: "Beasiswa Unggulan Kemendikbud", tanggalDibuka: "2025-01-01", tanggalBerakhir: "2025-03-31", status: "Berlangsung", tautan: "https://beasiswa.kemdikbud.go.id", persyaratan: "IPK minimal 3.5, surat rekomendasi, essay" },
    { nomor: 2, nama: "LPDP Reguler", tanggalDibuka: "2025-02-15", tanggalBerakhir: "2025-04-30", status: "Segera", tautan: "https://lpdp.kemenkeu.go.id", persyaratan: "IPK minimal 3.0, pengalaman organisasi, TOEFL/IELTS" },
    { nomor: 3, nama: "Beasiswa Bank Indonesia", tanggalDibuka: "2025-03-01", tanggalBerakhir: "2025-06-30", status: "Ditutup", tautan: "https://www.bi.go.id", persyaratan: "Mahasiswa aktif S1, IPK minimal 3.25, surat rekomendasi" },
    { nomor: 4, nama: "Beasiswa Djarum Plus", tanggalDibuka: "2025-04-01", tanggalBerakhir: "2025-06-30", status: "Segera", tautan: "https://djarumbeasiswaplus.org", persyaratan: "IPK minimal 3.0, aktif organisasi, seleksi wawancara" },
    { nomor: 5, nama: "Beasiswa Sampoerna Foundation", tanggalDibuka: "2025-05-01", tanggalBerakhir: "2025-07-31", status: "Segera", tautan: "https://www.sampoernafoundation.org", persyaratan: "IPK minimal 3.25, leadership experience, TOEFL/IELTS" },
    { nomor: 6, nama: "Beasiswa Astra", tanggalDibuka: "2025-06-15", tanggalBerakhir: "2025-08-15", status: "Segera", tautan: "https://www.astra.co.id", persyaratan: "IPK minimal 3.2, mahasiswa semester 5 ke atas, essay motivasi" },
    { nomor: 7, nama: "Beasiswa Pertamina Sobat Bumi", tanggalDibuka: "2025-07-01", tanggalBerakhir: "2025-09-30", status: "Segera", tautan: "https://www.pertaminafoundation.org", persyaratan: "Mahasiswa S1/D4, IPK minimal 3.0, aktif kegiatan sosial" },
    { nomor: 8, nama: "Beasiswa BCA Finance", tanggalDibuka: "2025-08-01", tanggalBerakhir: "2025-10-31", status: "Segera", tautan: "https://www.bcafinance.co.id", persyaratan: "IPK minimal 3.25, tidak sedang menerima beasiswa lain, seleksi wawancara" },
    { nomor: 9, nama: "Beasiswa Indonesia Maju", tanggalDibuka: "2025-09-15", tanggalBerakhir: "2025-11-30", status: "Segera", tautan: "https://beasiswa.kemdikbud.go.id/indonesiamaju", persyaratan: "Prestasi akademik/non-akademik, TOEFL/IELTS, proposal riset" },
    { nomor: 10, nama: "Beasiswa Telkom Indonesia", tanggalDibuka: "2025-10-01", tanggalBerakhir: "2025-12-31", status: "Segera", tautan: "https://www.telkom.co.id", persyaratan: "Mahasiswa S1/D4, IPK minimal 3.25, esai motivasi, seleksi wawancara" },
    
    // Beasiswa Luar Negeri
    { nomor: 11, nama: "Chevening Scholarship (UK)", tanggalDibuka: "2025-08-01", tanggalBerakhir: "2025-11-01", status: "Segera", tautan: "https://www.chevening.org", persyaratan: "IPK minimal 3.0, pengalaman kerja 2 tahun, IELTS" },
    { nomor: 12, nama: "Erasmus Mundus Scholarship (EU)", tanggalDibuka: "2025-09-01", tanggalBerakhir: "2025-12-15", status: "Segera", tautan: "https://www.eacea.ec.europa.eu", persyaratan: "IPK minimal 3.0, TOEFL/IELTS, proposal penelitian" },
    { nomor: 13, nama: "DAAD Scholarship (Jerman)", tanggalDibuka: "2025-07-01", tanggalBerakhir: "2025-10-31", status: "Segera", tautan: "https://www.daad.de", persyaratan: "IPK minimal 3.0, pengalaman kerja, TOEFL/IELTS" },
    { nomor: 14, nama: "Fulbright Scholarship (USA)", tanggalDibuka: "2025-04-15", tanggalBerakhir: "2025-06-30", status: "Segera", tautan: "https://foreign.fulbrightonline.org", persyaratan: "IPK minimal 3.0, surat rekomendasi, TOEFL/IELTS" },
    { nomor: 15, nama: "MEXT Scholarship (Jepang)", tanggalDibuka: "2025-05-01", tanggalBerakhir: "2025-07-31", status: "Segera", tautan: "https://www.studyinjapan.go.jp", persyaratan: "IPK minimal 3.2, tes akademik, wawancara" },
    { nomor: 16, nama: "Australia Awards Scholarship", tanggalDibuka: "2025-02-01", tanggalBerakhir: "2025-04-30", status: "Segera", tautan: "https://www.dfat.gov.au", persyaratan: "IPK minimal 3.0, TOEFL/IELTS, proposal riset" },
    { nomor: 17, nama: "Swiss Government Excellence Scholarship", tanggalDibuka: "2025-09-01", tanggalBerakhir: "2025-12-31", status: "Segera", tautan: "https://www.sbfi.admin.ch", persyaratan: "IPK minimal 3.5, proposal riset, surat rekomendasi" }
];

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(2);
    return `${day}/${month}/${year}`;
}

export default function DaftarBeasiswa() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [entries, setEntries] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredBeasiswa = daftarBeasiswa.filter((beasiswa) => {
        const matchesSearch = search === "" || beasiswa.nama.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === "" || beasiswa.status === statusFilter;
        const matchesDateStart = dateStart === "" || new Date(beasiswa.tanggalDibuka) >= new Date(dateStart);
        const matchesDateEnd = dateEnd === "" || new Date(beasiswa.tanggalBerakhir) <= new Date(dateEnd);
        return matchesSearch && matchesStatus && matchesDateStart && matchesDateEnd;
    });

    const totalEntries = filteredBeasiswa.length;
    const totalPages = Math.ceil(totalEntries / entries);
    const displayedBeasiswa = filteredBeasiswa.slice((currentPage - 1) * entries, currentPage * entries);

    return (
        <Layout>
            <main className="bg-white">
                <Navbar />
                <div className="container mx-auto p-8">
                    <h1 className="text-3xl font-bold text-center mb-6">Daftar Beasiswa</h1>
                    
                    <div className="flex justify-between items-center mb-4">
                        <select
                            value={entries}
                            onChange={(e) => setEntries(Number(e.target.value))}
                            className="border p-2 rounded"
                        >
                            <option value={5}>5 entries</option>
                            <option value={10}>10 entries</option>
                            <option value={20}>20 entries</option>
                        </select>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                placeholder="Cari Beasiswa..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="border p-2 rounded"
                            />
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="border p-2 rounded"
                            >
                                <option value="">All Status</option>
                                <option value="Berlangsung">Berlangsung</option>
                                <option value="Segera">Segera</option>
                                <option value="Ditutup">Ditutup</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-[#e3e6f0]">
                            <thead>
                                <tr className="border border-[#e3e6f0] text-gray-700">
                                    <th className="border border-[#e3e6f0] px-4 py-2 text-left">Nomor</th>
                                    <th className="border border-[#e3e6f0] px-4 py-2 text-left">Nama Beasiswa</th>
                                    <th className="border border-[#e3e6f0] px-4 py-2 text-left">Tanggal Dibuka</th>
                                    <th className="border border-[#e3e6f0] px-4 py-2 text-left">Tanggal Berakhir</th>
                                    <th className="border border-[#e3e6f0] px-4 py-2 text-left">Persyaratan</th>
                                    <th className="border border-[#e3e6f0] px-4 py-2 text-left">Status</th>
                                    <th className="border border-[#e3e6f0] px-4 py-2 text-left">Tautan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayedBeasiswa.length > 0 ? (
                                    displayedBeasiswa.map((beasiswa) => (
                                        <tr key={beasiswa.nomor} className="border border-[#e3e6f0] text-left">
                                            <td className="border border-[#e3e6f0] px-4 py-2">{beasiswa.nomor}</td>
                                            <td className="border border-[#e3e6f0] px-4 py-2">{beasiswa.nama}</td>
                                            <td className="border border-[#e3e6f0] px-4 py-2">{formatDate(beasiswa.tanggalDibuka)}</td>
                                            <td className="border border-[#e3e6f0] px-4 py-2">{formatDate(beasiswa.tanggalBerakhir)}</td>
                                            <td className="border border-[#e3e6f0] px-4 py-2">{beasiswa.persyaratan}</td>
                                            <td className="border border-[#e3e6f0] px-4 py-2">{beasiswa.status}</td>
                                            <td className="border border-[#e3e6f0] px-4 py-2">
                                                <a href={beasiswa.tautan} className="bg-[#ff8b10] text-white px-3 py-1 rounded" target="_blank" rel="noopener noreferrer">
                                                    Link
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="text-center py-4 text-gray-500">Tidak ada data</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span>Showing {(currentPage - 1) * entries + 1} to {Math.min(currentPage * entries, totalEntries)} of {totalEntries} entries</span>
                        <div>
                            <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2">
                                Previous
                            </button>
                            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="bg-[#ff8b10] text-white px-4 py-2 rounded">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </Layout>
    );
}
