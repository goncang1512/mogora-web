"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const PageLoader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;

      // Cek apakah klik berasal dari link (a tag)
      if (
        target.tagName === "A" &&
        target.href.startsWith(window.location.origin)
      ) {
        setLoading(true);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    setLoading(false); // Hentikan loading setelah pindah halaman
  }, [pathname]);

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 animate-pulse"></div>
  ) : null;
};

export default PageLoader;
