import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

const upcoming = [
  ["📊", "Advanced Analytics", "Deep insights into your vendor network performance and growth metrics"],
  ["🏪", "Vendor Management", "Onboard, manage and support all your vendors from one dashboard"],
  ["💰", "Revenue Tracking", "Real-time revenue, transaction and payout management"],
  ["📣", "Campaign Tools", "Create and manage marketing campaigns across your vendor network"],
  ["🤝", "Partnership Portal", "Connect with suppliers, logistics partners and service providers"],
  ["⚙️", "Custom Integrations", "Connect your existing tools and workflows via our API"],
];

export default function Operators() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div style={{backgroundColor: "#0b7d40"}}>

      {/* Hero */}
      <section style={{position: "relative", overflow: "hidden", padding: isMobile ? "100px 0 60px" : "140px 0 80px", background: "linear-gradient(160deg, #085c30 0%, #0b7d40 50%, #0d9651 100%)"}}>
        <div style={{position: "absolute", inset: 0}}>
          <div style={{position: "absolute", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)", top: "-200px", left: "50%", transform: "translateX(-50%)"}} />
          <div style={{position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        </div>

        <div style={{maxWidth: "900px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px", textAlign: "center", position: "relative", zIndex: 1}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "999px", padding: "8px 18px", marginBottom: "28px"}}
          >
            <span style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#86efac", display: "inline-block"}} />
            <span style={{fontSize: "13px", color: "white", fontWeight: "500"}}>For Operators</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{fontFamily: "Syne, sans-serif", fontSize: isMobile ? "38px" : "64px", fontWeight: "900", color: "white", letterSpacing: isMobile ? "-1px" : "-2px", lineHeight: "1.05", marginBottom: "20px"}}
          >
            Grow your food<br />
            <span className="shimmer-text">business with Hoose</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{fontSize: isMobile ? "15px" : "18px", color: "rgba(255,255,255,0.8)", lineHeight: "1.8"}}
          >
            We're building a dedicated portal for food operators. Be the first to know when we launch.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section style={{backgroundColor: "#0b7d40", padding: isMobile ? "48px 0 80px" : "40px 0 120px"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px"}}>

          {/* Coming soon card */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
            gap: isMobile ? "28px" : "64px",
            alignItems: "center",
            marginBottom: isMobile ? "48px" : "80px",
            padding: isMobile ? "32px 24px" : "56px",
            background: "rgba(0,0,0,0.2)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "32px",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{textAlign: "center"}}>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{fontSize: isMobile ? "64px" : "90px", marginBottom: "12px"}}
              >🚀</motion.div>
              <div style={{fontSize: isMobile ? "32px" : "44px", fontWeight: "900", fontFamily: "Syne, sans-serif", color: "#86efac"}}>Coming</div>
              <div style={{fontSize: isMobile ? "32px" : "44px", fontWeight: "900", fontFamily: "Syne, sans-serif", color: "white", marginTop: "-8px"}}>Soon</div>
            </div>

            <div>
              <h2 style={{fontFamily: "Syne, sans-serif", fontSize: isMobile ? "22px" : "34px", fontWeight: "900", color: "white", marginBottom: "14px", letterSpacing: "-0.5px", lineHeight: "1.2"}}>
                The operator portal is in development
              </h2>
              <p style={{fontSize: isMobile ? "14px" : "16px", color: "rgba(255,255,255,0.75)", lineHeight: "1.8", marginBottom: "28px"}}>
                We're building a powerful suite of tools specifically designed for food business operators — with advanced analytics, vendor management, and growth insights all in one place.
              </p>
              <motion.div
                onClick={function() { navigate("/contact"); }}
                style={{display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "white", color: "#0b7d40", padding: isMobile ? "12px 28px" : "14px 32px", borderRadius: "999px", fontWeight: "700", fontSize: "15px", cursor: "pointer", fontFamily: "Syne, sans-serif"}}
                whileHover={{ scale: 1.05, backgroundColor: "#86efac" }}
                whileTap={{ scale: 0.97 }}
              >
                Get Early Access →
              </motion.div>
            </div>
          </div>

          {/* What's coming */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{fontFamily: "Syne, sans-serif", fontSize: isMobile ? "28px" : "40px", fontWeight: "900", color: "white", letterSpacing: "-1px", marginBottom: "10px", textAlign: "center"}}
          >
            What's coming
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: "15px", marginBottom: "36px"}}
          >
            A sneak peek at what we're building for operators
          </motion.p>

          <div style={{display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr", gap: "14px"}}>
            {upcoming.map(function(item, i) {
              return (
                <motion.div
                  key={item[1]}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  style={{backgroundColor: "rgba(0,0,0,0.18)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: isMobile ? "20px 16px" : "28px", position: "relative", overflow: "hidden"}}
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.28)", borderColor: "rgba(255,255,255,0.2)", y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div style={{position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)"}} />
                  <div style={{fontSize: isMobile ? "26px" : "32px", marginBottom: "12px"}}>{item[0]}</div>
                  <h4 style={{fontFamily: "Syne, sans-serif", fontSize: isMobile ? "13px" : "16px", fontWeight: "700", color: "white", marginBottom: "6px"}}>{item[1]}</h4>
                  {!isMobile && <p style={{fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: "1.7", margin: 0}}>{item[2]}</p>}
                  <div style={{position: "absolute", bottom: "14px", right: "14px", width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "rgba(134,239,172,0.5)"}} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}