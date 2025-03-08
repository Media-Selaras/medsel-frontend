const months = [
  "",
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const formatDate = (dateString: string): string => {
  const blogDate = dateString.split("-");
  const tanggal = parseInt(blogDate[2], 10);
  const bulan = months[parseInt(blogDate[1], 10)];
  const tahun = parseInt(blogDate[0], 10);

  return `${tanggal} ${bulan} ${tahun}`;
};
