import { useState, useEffect } from "react";

export default function Feature() {
  const images = [
    { 
      url: "./assets/img/feature-img4.jpg", 
      description: "Bebas Kustom Sesukamu. Atur warna, teks, dan layout sesuai gaya unikmu." 
    },
    { 
      url: "./assets/img/feature-img3.jpg", 
      description: "Pilih Tema Sesuai Gayamu. Tinggal pilih template keren yang cocok buat persona kamu." 
    },
    { 
      url: "./assets/img/feature-img2.jpg", 
      description: "Edit Cepat, Satu Klik. Ubah konten portofolio kamu seketika tanpa ribet." 
    },
    { 
      url: "./assets/img/feature-img1.jpg", 
      description: "Portofolio Siap Online. Langsung tampil di website publik dan bisa diakses siapa saja." 
    }
  ];

  const [angle, setAngle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 640;
  const center = isSmallScreen ? 300 : 560;
  const radius = isSmallScreen ? 220 : 500;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        const targetAngle = angle + (360 / images.length);

        const animationInterval = setInterval(() => {
          setAngle((prevAngle) => {
            const diff = targetAngle - prevAngle;
            if (Math.abs(diff) < 1) {
              clearInterval(animationInterval);
              setIsAnimating(false);
              return targetAngle;
            }
            return prevAngle + diff * 0.1;
          });
        }, 16);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [angle, isAnimating, images.length]);

  return (
    <div 
    id="features" 
    className="feature h-auto sm:h-[80vh] bg-white relative overflow-hidden w-full max-w-[100vw]"
    >
      {/* Text section */}
      <div className="w-full px-4 sm:px-16 mt-12 sm:mt-24">
        <h2 className="text-center sm:text-left text-2xl sm:text-5xl font-medium mb-4">
          Features
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-light mb-6 text-center sm:text-left w-full mx-auto sm:mx-0">
          Bikin portofolio digital sekarang tidak perlu ribet lagi. Dengan Siporto, kamu bisa 
          nunjukkin karya dan kemampuanmu lewat tampilan yang modern, responsif, dan pastinya 
          mudah banget diatur. Semua dirancang supaya kamu bisa fokus nunjukkin
          <em> value</em> terbaikmu, sementara urusan teknis biar Siporto yang urus.  
          <br /><br />
          Tidak peduli kamu mahasiswa, freelancer, atau profesional yang lagi bangun personal branding, 
          SiPorto kasih cara paling simpel tapi tetap powerful buat tampil lebih standout. 
          Prosesnya cepat, desainnya fleksibel, hasilnya profesional, dan semua ada di satu platform.
        </p>
      </div>

      {/* Image Scroller */}
      <div className="relative w-full">
        <div className="relative w-full h-[500px] sm:h-[800px] flex items-center justify-center">
          {/* background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1000px] h-[40vh] max-h-[500px] bg-orange-500 opacity-70 rounded-t-full z-10"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75vw] max-w-[800px] h-[35vh] max-h-[400px] bg-white rounded-t-full z-20"></div>

          <div className="absolute bottom-0 left-0 w-full h-[120px] sm:h-[225px] bg-white z-40 overflow-hidden"></div>
        </div>

        {/* images */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[100vw] sm:max-w-[1200px] h-[400px] sm:h-[600px] flex items-center justify-center z-40">
          {images.map((img, i) => {
            const theta = ((360 / images.length) * i + angle) * (Math.PI / 180);
            const x = center + radius * Math.cos(theta) - 80;
            const y = center + radius * Math.sin(theta) - 120;

            return (
              <div
                key={i}
                className="absolute rounded-lg overflow-hidden group transition-transform"
                style={{
                  top: `${y}px`,
                  left: `${x}px`,
                  width: isSmallScreen ? "140px" : "240px",
                  height: isSmallScreen ? "180px" : "300px",
                }}
              >
                <img
                  src={img.url}
                  alt={img.description}
                  className="w-full h-full object-cover"
                />

                <div
                  className="absolute bottom-0 left-0 w-full h-20 sm:h-40 flex items-end justify-center p-2
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500 to-orange-500/0 opacity-60"></div>
                  <span className="relative text-white text-xs sm:text-md font-light text-center">
                    {img.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorations */}
      <div className="decoration">
        <div className="block absolute bottom-4 left-4 sm:bottom-12 sm:left-12">
          <div className="relative w-8 h-8 bg-orange-500 opacity-70">
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 rounded-full bg-orange-200"></div>
          </div>
        </div>
        <div className="absolute top-4 right-4 sm:top-0 sm:right-12">
          <div className="relative w-8 h-8 bg-orange-500 opacity-70">
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 rounded-full bg-orange-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}