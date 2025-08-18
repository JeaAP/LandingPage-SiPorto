import { createContext, useContext, useEffect, useState } from "react";

const CRITICAL_IMAGES = [
  "/assets/img/image-bg1.jpg",
  "/assets/logo/SiPorto.png",
];
const CRITICAL_FONTS = [
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
];

const PreloadContext = createContext();

export function usePreload() {
  return useContext(PreloadContext);
}

export function PreloadProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload images
    const imagePromises = CRITICAL_IMAGES.map(
      (src) =>
        new Promise((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = img.onerror = resolve;
        })
    );
    // Preload fonts
    const fontPromises = CRITICAL_FONTS.map((href) => {
      if (document.querySelector(`link[href="${href}"]`)) return Promise.resolve();
      return new Promise((resolve) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.onload = resolve;
        link.onerror = resolve;
        document.head.appendChild(link);
      });
    });

    Promise.all([...imagePromises, ...fontPromises]).then(() => {
      setTimeout(() => setLoading(false), 400);
    });
  }, []);

  return (
    <PreloadContext.Provider value={{ loading }}>
      {children}
    </PreloadContext.Provider>
  );
}
