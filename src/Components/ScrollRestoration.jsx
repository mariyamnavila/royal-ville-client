import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = {};

export default function ScrollRestoration() {
  const { pathname } = useLocation();
  const isInitial = useRef(true);

  // Save scroll before route changes
  useEffect(() => {
    const saveScroll = () => {
      scrollPositions[pathname] = window.scrollY;
    };
    window.addEventListener("beforeunload", saveScroll);
    return () => window.removeEventListener("beforeunload", saveScroll);
  }, [pathname]);

  // Restore scroll on route change
  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      window.scrollTo(0, 0);
      return;
    }

    const saved = scrollPositions[pathname] ?? 0;
    window.scrollTo(0, saved);
  }, [pathname]);

  return null;
}
