import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = function() { setScrolled(window.scrollY > 40); };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pages = [["home", "/"], ["about", "/about"], ["contact", "/contact"]];

  const navBg = scrolled
    ? "rgba(10,26,15,0.85)"
    : "transparent";

  const navBorder = scrolled
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid transparent";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: navBg,
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: navBorder,
        transition: "all 0.4s ease"
      }}
    >
      <nav style={{maxWidth: "1280px", margin: "0 auto", padding: "20px 48px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>

        <motion.div
            onClick={function() { navigate("/"); }}
            style={{cursor: "pointer", display: "flex", alignItems: "center"}}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            >
            <img src="/logo.jpeg" alt="Hoose" style={{height: "44px", borderRadius: "8px"}} />
        </motion.div>

        <div style={{display: "flex", alignItems: "center", gap: "36px"}}>
          <motion.span
            onClick={function() { navigate("/"); }}
            style={{color: location.pathname === "/" ? "white" : "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: "500", cursor: "pointer", position: "relative", paddingBottom: "2px"}}
            whileHover={{ color: "white" }}
            data-cursor="pointer"
          >
            Home
            {location.pathname === "/" && (
              <motion.div layoutId="underline" style={{position: "absolute", bottom: 0, left: 0, right: 0, height: "1.5px", backgroundColor: "#4ade80", borderRadius: "999px"}} />
            )}
          </motion.span>

          <div
            style={{position: "relative"}}
            onMouseEnter={function() { setDropdown(true); }}
            onMouseLeave={function() { setDropdown(false); }}
          >
            <motion.span
              style={{color: "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: "500", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px"}}
              whileHover={{ color: "white" }}
            >
              Services
              <motion.span
                animate={{ rotate: dropdown ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                style={{fontSize: "10px", display: "inline-block"}}
              >▼</motion.span>
            </motion.span>

            <AnimatePresence>
              {dropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 16px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#0a1a0f",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    minWidth: "240px",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
                    backdropFilter: "blur(20px)"
                  }}
                >
                  <div style={{padding: "8px"}}>
                    {[
                      ["/services/customers", "🍽️", "For Customers", "Discover local food vendors"],
                      ["/services/operators", "🏪", "For Operators", "Grow your food business"]
                    ].map(function(item) {
                      const path = item[0];
                      const icon = item[1];
                      const label = item[2];
                      const sub = item[3];
                      return (
                        <motion.div
                          key={path}
                          onClick={function() { navigate(path); setDropdown(false); }}
                          style={{padding: "14px 16px", borderRadius: "14px", cursor: "pointer", display: "flex", alignItems: "center", gap: "14px"}}
                          whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                        >
                          <span style={{fontSize: "26px"}}>{icon}</span>
                          <div>
                            <div style={{fontSize: "14px", fontWeight: "600", color: "white", fontFamily: "Syne, sans-serif"}}>{label}</div>
                            <div style={{fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "2px"}}>{sub}</div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {pages.filter(function(p) { return p[0] !== "home"; }).map(function(p) {
            const label = p[0];
            const path = p[1];
            const isActive = location.pathname === path;
            return (
              <motion.span
                key={path}
                onClick={function() { navigate(path); }}
                style={{color: isActive ? "white" : "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: "500", cursor: "pointer", position: "relative", paddingBottom: "2px", textTransform: "capitalize"}}
                whileHover={{ color: "white" }}
              >
                {label}
                {isActive && (
                  <motion.div layoutId="underline" style={{position: "absolute", bottom: 0, left: 0, right: 0, height: "1.5px", backgroundColor: "#4ade80", borderRadius: "999px"}} />
                )}
              </motion.span>
            );
          })}
        </div>

        <motion.div
          onClick={function() { navigate("/contact"); }}
          style={{backgroundColor: "white", color: "#0a1a0f", padding: "10px 24px", borderRadius: "999px", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "Syne, sans-serif"}}
          whileHover={{ scale: 1.05, backgroundColor: "#86efac" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          Get Started
        </motion.div>
      </nav>
    </motion.header>
  );
}