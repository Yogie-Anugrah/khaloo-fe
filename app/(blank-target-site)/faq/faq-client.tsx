"use client"
import Accordion from "@/components/accordion";
import { SearchInput } from "@/components/search-input";
import { useMemo, useState } from "react";

const data = [
  {
    key: '1',
    label: 'Apakah produk Khaloo aman digunakan untuk semua jenis kulit?',
    children: 'Ya, produk kami dirancang untuk digunakan oleh berbagai jenis kulit, termasuk kulit sensitif dan berminyak. Kami menggunakan bahan-bahan yang telah diuji secara klinis untuk memastikan keamanan dan kelayakan produk.',
  },
  {
    key: '2',
    label: 'Apakah produk Khaloo aman digunakan selama kehamilan atau menyusui?',
    children: 'Produk Khaloo dirancang dengan bahan-bahan yang aman digunakan oleh ibu hamil dan menyusui.',
  },
  {
    key: '3',
    label: 'Bagaimana saya bisa membeli produk Khaloo?',
    children: 'Kamu dapat membeli produk Khaloo melalui E-commerce akun kami, reseller, dan mitra toko kami di daerahmu.',
  },
  {
    key: '4',
    label: 'Apakah Khaloo menawarkan pengiriman internasional?',
    children: 'Ya, kami menawarkan pengiriman internasional untuk memenuhi kebutuhan pelanggan kami di seluruh dunia.',
  },
  {
    key: '5',
    label: 'Apakah ada program loyalitas atau diskon untuk pelanggan setia?',
    children: 'Ya, kami menawarkan program loyalitas dan diskon khusus untuk pelanggan setia. Informasi lebih lanjut dapat ditemukan di situs web kami.',
  },
  {
    key: '6',
    label: 'Saya lupa kata sandi saya. Bagaimana cara mendapatkannya kembali?',
    children: 'Anda dapat menggunakan opsi "Lupa Kata Sandi" pada halaman login untuk mengatur ulang kata sandi Anda. Anda akan menerima instruksi melalui email untuk membuat kata sandi baru.',
  },
  {
    key: '7',
    label: 'Bagaimana cara memperbarui informasi akun saya, seperti alamat pengiriman?',
    children: 'Anda dapat mengakses dan memperbarui informasi akun Anda setelah login ke situs web Khaloo. Di sana, Anda akan menemukan opsi untuk mengedit profil dan mengubah detail akun, termasuk alamat pengiriman.',
  },
  {
    key: '8',
    label: 'Apakah ada batasan pada jumlah perangkat yang dapat menggunakan akun Khaloo secara bersamaan?',
    children: 'Saat ini, tidak ada batasan jumlah perangkat yang dapat menggunakan akun Khaloo secara bersamaan.',
  },
  {
    key: '9',
    label: 'Apakah informasi akun Khaloo saya aman?',
    children: 'Kami sangat memperhatikan keamanan informasi pelanggan kami. Kami menggunakan langkah-langkah keamanan yang kuat untuk melindungi informasi akun Anda dari akses yang tidak sah.',
  },
  {
    key: '10',
    label: 'Saya mengalami masalah saat login ke akun Khaloo saya. Apa yang harus saya lakukan?',
    children: 'Jika Anda mengalami masalah saat login, pastikan Anda memasukkan alamat email dan kata sandi dengan benar. Jika masalah terus berlanjut, silakan hubungi tim Layanan Pelanggan kami untuk bantuan lebih lanjut.',
  },
  {
    key: '11',
    label: 'Apakah saya bisa mengembalikan produk yang tidak saya sukai atau tidak cocok dengan saya?',
    children: 'Ya, kami menerima pengembalian produk yang tidak digunakan atau tidak dibuka dalam 1x24 jam setelah barang diterima.',
  },
  {
    key: '12',
    label: 'Apakah ada biaya pengembalian yang harus saya bayarkan?',
    children: 'Biaya pengembalian biasanya ditanggung oleh pelanggan. Namun, jika produk diterima dalam kondisi rusak atau cacat, biaya pengembalian akan ditanggung oleh Khaloo.',
  },
  {
    key: '13',
    label: 'Apakah produk yang sudah dibuka atau digunakan masih bisa diretur?',
    children: 'Produk yang sudah dibuka atau digunakan tidak dapat diretur kecuali dalam kondisi yang rusak atau cacat. Kami hanya menerima pengembalian untuk produk yang belum digunakan dan masih dalam kondisi baik.',
  },
  {
    key: '14',
    label: 'Apakah saya akan menerima pengembalian uang atau kredit toko untuk produk yang diretur?',
    children: 'Pengembalian uang biasanya dilakukan sesuai dengan metode pembayaran asli yang digunakan saat pembelian.',
  },
  {
    key: '15',
    label: 'Bagaimana cara melakukan pengembalian produk?',
    children: 'Untuk melakukan pengembalian produk, hubungi tim Layanan Pelanggan kami untuk mendapatkan instruksi lebih lanjut. Pastikan untuk mengikuti prosedur pengembalian yang ditetapkan.',
  },
];


export default function FAQClient() {
  const [search, setSearch] = useState('');

  const filteredData = useMemo(() => {
    return data.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <div className="flex flex-col mt-12 lg:mt-16 gap-8 lg:gap-9 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
      <SearchInput
        placeholder="Cari pertanyaanmu disini"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {Boolean(filteredData.length) ? (
        <Accordion data={filteredData} />
      ) : (
        <p className="text-center font-bold">Not Found</p>
      )}
    </div>
  );
}
