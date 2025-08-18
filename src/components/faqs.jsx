import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const faqData = [
  {
    question: "Apakah portofolio bisa disesuaikan dengan kebutuhan saya?",
    answer:
      "Ya, portofolio dapat disesuaikan dengan kebutuhanmu. Kamu bisa memilih desain, konten, hingga struktur yang sesuai dengan tujuanmu.",
  },
  {
    question: "Bagaimana cara memesan layanan di Siporto?",
    answer:
      "Kamu bisa memesan langsung melalui website Siporto atau menghubungi kami melalui email atau kontak yang tersedia di website. ",
  },
  {
    question: "Berapa lama proses pembuatan portofolio dengan design custom?",
    answer:
      "Proses pembuatan biasanya memakan waktu 3-5 hari kerja dan dapat lebih cepat.",
  },
  {
    question: "Apakah saya bisa melakukan revisi setelah portofolio jadi?",
    answer:
      "Ya, setiap layanan sudah termasuk beberapa kali revisi gratis. Jika revisi tambahan diperlukan, akan ada biaya tambahan sesuai ketentuan.",
  },
  {
    question: "Apakah ada layanan konsultasi sebelum memesan?",
    answer:
      "Tentu! Kami menyediakan sesi konsultasi gratis agar kamu bisa menjelaskan kebutuhanmu sebelum portofolio dibuat.",
  },
  {
    question: "Lainnya",
    answer:
      "Jika ada pertanyaan lain, silakan hubungi tim support kami melalui email atau kontak yang tersedia di website.",
  },
];

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="faqs relative h-auto bg-white">
      {/* Text section */}
      <div className="w-full p-4 sm:p-16 pt-16 sm:mt-12">
        <h2 className="text-center sm:text-left text-2xl sm:text-5xl font-medium mb-4">
          FAQs
        </h2>
        <p className="text-base sm:text-xl font-light mb-6 text-center sm:text-left">
          Masih ada hal yang ingin kamu ketahui tentang Siporto? Di sini kami
          telah merangkum beberapa pertanyaan yang paling sering ditanyakan
          beserta jawabannya. Temukan informasi seputar layanan, proses
          pembuatan, hingga cara pemesanan portofolio dengan mudah dan cepat.
        </p>
      </div>

      {/* FAQs section */}
      <div className="px-4 sm:px-16 space-y-4 pb-24">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-b-2 border-gray-300 pb-2 cursor-pointer"
          >
            {/* Question */}
            <div
              className="flex justify-between items-center py-3"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-base sm:text-lg font-medium">
                {faq.question}
              </h3>
              <span className="text-xl">
                {openIndex === index ? <SlArrowUp /> : <SlArrowDown />}
              </span>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="text-gray-600 text-sm sm:text-base mt-2">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-4 left-4 sm:bottom-12 sm:left-12">
          <div className="relative w-8 h-8 bg-orange-500 opacity-70">
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 rounded-full bg-orange-200"></div>
          </div>
        </div>
        <div className="absolute top-2 right-4 sm:top-4 sm:right-12">
          <div className="relative w-8 h-8 bg-orange-500 opacity-70">
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 rounded-full bg-orange-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}