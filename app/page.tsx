"use client";

import Image from "next/image";
import { IconType } from "react-icons";
import { FaTiktok, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import ShopeeIcon from "@/components/ShopeeIcon";
import { motion } from "framer-motion";

type LinkItem = {
  id: string;
  label: string;
  url: string;
  desc: string;
  icon: IconType;
  color?: string;
};

const LINKS: LinkItem[] = [
  {
    id: "whatsapp",
    label: "Konsultasi via WhatsApp",
    url: "https://wa.me/6285640047958",
    desc: "Tanya layanan, harga, dan konsultasi cepat",
    icon: FaWhatsapp,
    color: "#25D366",
  },
  {
    id: "maps",
    label: "Lokasi Praktik",
    url: "https://maps.app.goo.gl/M86deQbg4CATgbNF9",
    desc: "Lihat lokasi Budi Orthoprosthesa",
    icon: FaMapMarkerAlt,
    color: "#DB4437",
  },
  {
    id: "tiktok",
    label: "TikTok",
    url: "https://www.tiktok.com/@budiorthoprosthesa?_r=1&_t=ZS-929JgLmPELi",
    desc: "Konten edukasi ortopedi & prostetik",
    icon: FaTiktok,
    color: "#000000",
  },
  {
    id: "shopee",
    label: "Shopee",
    url: "http://shopee.co.id/budiorthoprosthesa",
    desc: "Produk ortopedi & perlengkapan",
    icon: ShopeeIcon as any,
    color: "#EE4D2D",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/yo_budiprasetyo?igsh=Y2dtZTkzZmh6bnd4",
    desc: "Galeri & testimoni pasien",
    icon: FaInstagram,
    color: "#E1306C",
  },
  {
    id: "catalog",
    label: "Katalog Kaki Palsu",
    url: "https://drive.google.com/drive/folders/17NmEGqPXUnsO3azB-fwujIwrNQr0fM27?usp=sharing",
    desc: "Lihat daftar produk & layanan",
    icon: HiOutlineDocumentText,
    color: "#1D4ED8",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6285640047958"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-6 sm:p-8 border border-blue-100"
      >

        {/* Profile */}
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-blue-200 shadow-md"
          >
            <Image
              src="/budi.jpg"
              alt="Avatar"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 text-center leading-tight">
            BUDI ORTHOPROSTHESA
          </h1>

          <p className="text-xs sm:text-sm text-gray-600 tracking-wide text-center">
            PRAKTEK MANDIRI ORTOTIS PROSTETIS
          </p>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-5 p-4 bg-blue-50 border border-blue-100 rounded-xl text-center"
        >
          <p className="text-blue-700 font-semibold text-sm sm:text-base">
            Solusi Kaki Palsu & Alat Ortopedi Profesional
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Pelayanan ramah, aman, dan berbasis keilmuan ortopedi modern.
          </p>
        </motion.div>

        {/* LINK BUTTONS */}
        <div className="mt-8 grid gap-3 sm:gap-4">
          {LINKS.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="p-4 flex items-center gap-4 border rounded-xl hover:shadow-md hover:bg-blue-50 transition"
            >
              <div className="text-3xl" style={{ color: link.color }}>
                <link.icon />
              </div>

              <div className="flex flex-col">
                <div className="font-semibold text-blue-700 text-sm sm:text-base">
                  {link.label}
                </div>
                <div className="text-xs text-gray-500">{link.desc}</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 text-left"
        >
          <h2 className="text-lg font-bold text-blue-700 mb-3">Layanan Kami</h2>
          <ul className="text-sm text-gray-700 space-y-1.5">
            <li>• Pembuatan Kaki Palsu (Prosthesis)</li>
            <li>• Alat Ortopedi (Orthosis)</li>
            <li>• Perbaikan & Penyesuaian Alat</li>
            <li>• Konsultasi Ortotik Prostetik</li>
          </ul>
        </motion.div>

        <div className="mt-10 text-xs text-gray-400 text-center">
          © 2025 Budi Orthoprosthesa — All Rights Reserved
        </div>
      </motion.div>
    </main>
  );
}
