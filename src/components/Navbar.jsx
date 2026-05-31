import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = function() { setScrolled(window.scrollY > 40); };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const navBg = scrolled ? "rgba(11,125,64,0.97)" : "#0b7d40";

  const navTo = function(path) {
    navigate(path);
    setMenuOpen(false);
    setDropdown(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          backgroundColor: navBg,
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          transition: "all 0.4s ease"
        }}
      >
        <nav style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: isMobile ? "14px 20px" : "20px 48px",
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>

          {/* Logo */}
          <motion.div
            onClick={function() { navTo("/"); }}
            style={{cursor: "pointer", display: "flex", flexDirection: "column", lineHeight: 1, flexShrink: 0}}
            whileTap={{ scale: 0.97 }}
          >
            <span style={{color: "white", fontSize: isMobile ? "20px" : "26px", fontWeight: "700", letterSpacing: "1px", fontFamily: "Josefin Sans, sans-serif"}}>hoose</span>
            {!isMobile && <span style={{color: "rgba(255,255,255,0.7)", fontSize: "7px", letterSpacing: "3px", textTransform: "uppercase", marginTop: "-1px", fontWeight: "600"}}>India's Biggest Food Network</span>}
          </motion.div>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{display: "flex", alignItems: "center", gap: "36px"}}>
              <motion.span
                onClick={function() { navTo("/"); }}
                style={{color: location.pathname === "/" ? "white" : "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: "500", cursor: "pointer", position: "relative", paddingBottom: "2px"}}
                whileHover={{ color: "white" }}
              >
                Home
                {location.pathname === "/" && <motion.div layoutId="underline" style={{position: "absolute", bottom: 0, left: 0, right: 0, height: "1.5px", backgroundColor: "#4ade80", borderRadius: "999px"}} />}
              </motion.span>

              <div style={{position: "relative"}} onMouseEnter={function() { setDropdown(true); }} onMouseLeave={function() { setDropdown(false); }}>
                <motion.span style={{color: "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: "500", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px"}} whileHover={{ color: "white" }}>
                  Services
                  <motion.span animate={{ rotate: dropdown ? 180 : 0 }} transition={{ duration: 0.2 }} style={{fontSize: "10px", display: "inline-block"}}>▼</motion.span>
                </motion.span>
                <AnimatePresence>
                  {dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      style={{position: "absolute", top: "calc(100% + 16px)", left: "50%", transform: "translateX(-50%)", backgroundColor: "#0a1a0f", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", overflow: "hidden", minWidth: "240px", boxShadow: "0 24px 64px rgba(0,0,0,0.4)", backdropFilter: "blur(20px)"}}
                    >
                      <div style={{padding: "8px"}}>
                        {[["/services/customers", "🍽️", "For Customers", "Discover local food vendors"], ["/services/operators", "🏪", "For Operators", "Grow your food business"]].map(function(item) {
                          const path = item[0]; const icon = item[1]; const label = item[2]; const sub = item[3];
                          return (
                            <motion.div key={path} onClick={function() { navTo(path); }} style={{padding: "14px 16px", borderRadius: "14px", cursor: "pointer", display: "flex", alignItems: "center", gap: "14px"}} whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
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

              {[["About", "/about"], ["Contact", "/contact"]].map(function(p) {
                const label = p[0]; const path = p[1]; const isActive = location.pathname === path;
                return (
                  <motion.span key={path} onClick={function() { navTo(path); }} style={{color: isActive ? "white" : "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: "500", cursor: "pointer", position: "relative", paddingBottom: "2px"}} whileHover={{ color: "white" }}>
                    {label}
                    {isActive && <motion.div layoutId="underline" style={{position: "absolute", bottom: 0, left: 0, right: 0, height: "1.5px", backgroundColor: "#4ade80", borderRadius: "999px"}} />}
                  </motion.span>
                );
              })}
            </div>
          )}

          {/* Right side */}
          <div style={{display: "flex", alignItems: "center", gap: "12px", flexShrink: 0}}>
            {!isMobile && (
              <motion.div
                onClick={function() { navTo("/contact"); }}
                style={{backgroundColor: "white", color: "#0b7d40", padding: "10px 24px", borderRadius: "999px", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "Josefin Sans, sans-serif"}}
                whileHover={{ scale: 1.05, backgroundColor: "#86efac" }}
                whileTap={{ scale: 0.96 }}
              >
                Get Started
              </motion.div>
            )}

            {/* Hamburger */}
            {isMobile && (
              <motion.div
                onClick={function() { setMenuOpen(function(prev) { return !prev; }); }}
                style={{display: "flex", flexDirection: "column", gap: "5px", cursor: "pointer", padding: "6px"}}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{width: "22px", height: "2px", backgroundColor: "white", borderRadius: "999px", transformOrigin: "center"}}
                />
                <motion.div
                  animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                  transition={{ duration: 0.25 }}
                  style={{width: "22px", height: "2px", backgroundColor: "white", borderRadius: "999px"}}
                />
                <motion.div
                  animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{width: "22px", height: "2px", backgroundColor: "white", borderRadius: "999px", transformOrigin: "center"}}
                />
              </motion.div>
            )}
          </div>
        </nav>
      </motion.header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed", top: "50px", left: 0, right: 0,
              backgroundColor: "#085c30",
              zIndex: 998,
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              overflow: "hidden"
            }}
          >
            <div style={{padding: "8px 20px 20px"}}>
              {[
                ["Home", "/"],
                ["For Customers", "/services/customers"],
                ["For Operators", "/services/operators"],
                ["About", "/about"],
                ["Contact", "/contact"]
              ].map(function(item) {
                const label = item[0]; const path = item[1];
                const isActive = location.pathname === path;
                return (
                  <motion.div
                    key={path}
                    onClick={function() { navTo(path); }}
                    style={{
                      padding: "14px 4px",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                      color: isActive ? "white" : "rgba(255,255,255,0.65)",
                      fontSize: "16px",
                      fontWeight: isActive ? "700" : "400",
                      cursor: "pointer",
                      fontFamily: "Syne, sans-serif",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                    whileTap={{ x: 6 }}
                  >
                    {label}
                    {isActive && <span style={{fontSize: "10px", color: "#86efac"}}>●</span>}
                  </motion.div>
                );
              })}
              <motion.div
                onClick={function() { navTo("/contact"); }}
                style={{marginTop: "16px", backgroundColor: "white", color: "#0b7d40", padding: "14px", borderRadius: "14px", fontWeight: "700", fontSize: "15px", textAlign: "center", cursor: "pointer", fontFamily: "Josefin Sans, sans-serif"}}
                whileTap={{ scale: 0.98 }}
              >
                Get Started →
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}