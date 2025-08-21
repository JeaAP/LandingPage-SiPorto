import { useState, useEffect, useRef, useMemo } from "react";

export default function Feature() {
  const images = useMemo(
    () => [
      { url: "./assets/img/feature-img4.webp", description: "Bebas Kustom Sesukamu. Atur warna, teks, dan layout sesuai gaya unikmu." },
      { url: "./assets/img/feature-img3.webp", description: "Pilih Tema Sesuai Gayamu. Tinggal pilih template keren yang cocok buat persona kamu." },
      { url: "./assets/img/feature-img2.webp", description: "Edit Cepat, Satu Klik. Ubah konten portofolio kamu seketika tanpa ribet." },
      { url: "./assets/img/feature-img1.webp", description: "Portofolio Siap Online. Langsung tampil di website publik dan bisa diakses siapa saja." },
    ],
    []
  );

  const [angle, setAngle] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const requestRef = useRef();
  const targetAngleRef = useRef(0);

  const { center, radius, isSmallScreen } = useMemo(() => {
    const small = typeof window !== "undefined" && window.innerWidth < 640;
    return {
      isSmallScreen: small,
      center: small ? 300 : 560,
      radius: small ? 220 : 500,
    };
  }, []);

  const animate = () => {
    setAngle((prev) => {
      const diff = targetAngleRef.current - prev;
      if (Math.abs(diff) < 0.5) {
        cancelAnimationFrame(requestRef.current);
        return targetAngleRef.current;
      }
      requestRef.current = requestAnimationFrame(animate);
      return prev + diff * 0.001;
    });
  };

  useEffect(() => {
    if (isSmallScreen) return;
    const interval = setInterval(() => {
      targetAngleRef.current += 360 / images.length;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(animate);
    }, 5000);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
      clearInterval(interval);
    };
  }, [images.length, isSmallScreen]);

  useEffect(() => {
    if (!isSmallScreen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isSmallScreen]);

  const positions = useMemo(() => {
    if (isSmallScreen) return [];
    return images.map((_, i) => {
      const theta = ((360 / images.length) * i + angle) * (Math.PI / 180);
      const x = center + radius * Math.cos(theta) - 120;
      const y = center + radius * Math.sin(theta) - 120;
      return { x, y };
    });
  }, [angle, images.length, center, radius, isSmallScreen]);

  return (
    <div id="features" className="feature h-auto sm:h-[80vh] bg-white relative overflow-hidden w-full max-w-[100vw]">
      {/* Text */}
      <div className="w-full px-4 sm:px-16 mt-12 sm:mt-24">
        <h2 className="text-center sm:text-left text-2xl sm:text-5xl font-medium mb-4">Features</h2>
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
        {/* Background Shape */}
        {!isSmallScreen ? (
          <div className="relative w-full h-[500px] sm:h-[800px] flex items-center justify-center">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1000px] h-[40vh] max-h-[500px] bg-orange-500 opacity-70 rounded-t-full z-10"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75vw] max-w-[800px] h-[35vh] max-h-[400px] bg-white rounded-t-full z-20"></div>
            <div className="absolute bottom-0 left-0 w-full h-[120px] sm:h-[225px] bg-white z-40 overflow-hidden"></div>
          </div>
        ) : (
          <div className="relative w-full h-[300px] flex items-center justify-center">
            <div className="absolute bottom-0 left-0 w-full h-[40px] bg-orange-500 opacity-70 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-[20px] bg-white z-20"></div>
          </div>
        )}

        {/* Desktop Mode (circle) */}
        {!isSmallScreen && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[100vw] sm:max-w-[1200px] h-[400px] sm:h-[600px] flex items-center justify-center z-40">
            {images.map((img, i) => (
              <div
                key={i}
                className="absolute rounded-lg overflow-hidden group transition-transform"
                style={{
                  top: `${positions[i].y}px`,
                  left: `${positions[i].x}px`,
                  width: "240px",
                  height: "300px",
                }}
              >
                <img src={img.url} alt={img.description} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-40 flex items-end justify-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500 to-orange-500/0 opacity-60"></div>
                  <span className="relative text-white text-md font-light text-center">{img.description}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile Mode (slide) */}
        {isSmallScreen && (
          <div className="absolute bottom-0 left-0 w-full h-[300px] flex items-center justify-center z-40 overflow-hidden">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 100}%` }}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full flex justify-center px-4"
                  style={{ width: "100%" }}
                >
                  <div className="relative w-[140px] h-[180px] rounded-lg overflow-hidden group">
                    <img src={img.url} alt={img.description} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 w-full h-20 flex items-end justify-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500 to-orange-500/0 opacity-60"></div>
                      <span className="relative text-white text-xs font-light text-center">{img.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}