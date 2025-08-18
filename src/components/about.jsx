export default function About() {
  const images = [
    { src: "./assets/img/about-img1.png", label: "Si", alt: "programming" },
    { src: "./assets/img/about-img2.jpg", label: "Por", alt: "web development" },
    { src: "./assets/img/about-img3.jpg", label: "to", alt: "design" },
  ];

  return (
    <div
      id="about"
      className="min-h-[80vh] flex flex-col lg:flex-row items-center px-6 sm:px-10 lg:px-20 py-16 lg:py-0 relative"
    >
      {/* Text section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:ml-12 mb-8 lg:mb-0">
        <h1 className="text-2xl sm:text-3xl font-medium mb-4">About Us</h1>
        <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-md">
          SiPorto adalah layanan portofolio digital yang lahir dari kreativitas siswa 
          dari jurusan Rekayasa Perangkat Lunak. Dengan semangat anak muda 
          yang selalu ingin berkembang, kami merancang SiPorto agar siapa pun bisa punya 
          portofolio yang menarik, modern, dan pastinya profesional.
          <br /><br />
          Melalui SiPorto, kamu bisa membangun citra diri secara digital dengan cepat, 
          mudah, dan sesuai gaya kamu sendiri. Tidak hanya sekadar pamer karya, tapi benar-benar 
          menunjukkan kemampuan dan potensi yang kamu miliki.
        </p>
      </div>

      {/* Image section */}
      <div className="w-full lg:flex-1 flex justify-center gap-4 sm:gap-6 items-center overflow-x-auto lg:overflow-hidden relative py-4 lg:py-0">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="
                object-cover 
                w-[100px] h-[260px] 
                md:w-[200px] md:h-[380px] 
                lg:w-[240px] lg:h-[460px] 
                transition duration-500 
                group-hover:filter-none filter blur-sm
              "
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl sm:text-2xl md:text-3xl transition duration-500 opacity-100 group-hover:opacity-0">
              {img.label}
            </span>
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