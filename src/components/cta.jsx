import { useState } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const text =
      `Halo SiPorto,\n\n` +
      `Saya *${formData.name}*.\n` +
      `Saya tertarik untuk tahu lebih lanjut tentang layanan SiPorto.\n\n` +
      `Berikut pesan saya:\n${formData.message}\n\n` +
      `Terima kasih.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <footer
      id="cta"
      className="relative bg-orange-400 text-white px-6 sm:px-12 lg:px-16 py-12 flex flex-col lg:flex-row items-start justify-between overflow-hidden gap-12"
    >
      {/* Decorations */}
      <div className="absolute right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-[30px] sm:border-[40px] lg:border-[60px] border-white opacity-40 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      <div className="absolute top-3 right-30 sm:right-60 w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] lg:w-[400px] lg:h-[400px] rounded-full border-[30px] sm:border-[40px] lg:border-[60px] border-white opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 right-80 sm:right-160 w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] lg:w-[360px] lg:h-[360px] rounded-full border-[30px] sm:border-[40px] lg:border-[60px] border-white opacity-40 -translate-y-1/3 pointer-events-none"></div>

      {/* Logo & Contact Info */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col lg:flex-row items-center gap-8">
        <div>
          <img
            src="./assets/logo/SiPorto.png"
            alt="Logo Siporto"
            className="w-80 filter brightness-0 invert mx-auto lg:mx-24"
          />
        </div>

        <ul className="space-y-4 sm:space-y-6 text-center lg:text-left text-lg lg:text-2xl">
          <li className="flex items-center justify-center lg:justify-start gap-3 sm:gap-5">
            <a href={`https://wa.me/6282113387838`} target="_blank" rel="noreferrer">
              <PhoneIcon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
            </a>
            <a href={`https://wa.me/6282113387838`} target="_blank" rel="noreferrer">+62 821 1338 7838</a>
          </li>
          <li className="flex items-center justify-center lg:justify-start gap-3 sm:gap-5">
            <a href="https://www.instagram.com/sipor.to/" target="_blank" rel="noreferrer">
              <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </a>
            <a href="https://www.instagram.com/sipor.to/" target="_blank" rel="noreferrer">@sipor.to</a>
          </li>
          <li className="flex items-center justify-center lg:justify-start gap-3 sm:gap-5">
            <EnvelopeIcon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
            <span>siporto@gmail.com</span>
          </li>
        </ul>
      </div>

      {/* Form */}
      <div className="relative z-10 w-full lg:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto lg:ml-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Nama"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-white/50 bg-white/10 text-white placeholder-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          {/* <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-white/50 bg-white/10 text-white placeholder-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white"
            required
          /> */}
          <textarea
            name="message"
            placeholder="Pesanmu..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-white/50 bg-white/10 text-white placeholder-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-white text-orange-500 font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Kirim via WhatsApp
          </button>
        </form>
      </div>
    </footer>
  );
}