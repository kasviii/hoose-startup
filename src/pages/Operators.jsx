import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

  return (
    <div style={{backgroundColor: "#060f08"}}>

      <section style={{position: "relative", overflow: "hidden", padding: "160px 0 80px"}}>
        <div style={{position: "absolute", inset: 0}}>
          <div style={{position: "absolute", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(11,125,64,0.35) 0%, transparent 70%)", top: "-200px", left: "50%", transform: "translateX(-50%)", animation: "orbMove3 10s ease-in-out infinite"}} />
          <div style={{position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        </div>
        <div style={{maxWidth: "900px", margin: "0 auto", padding: "0 48px", textAlign: "center", position: "relative", zIndex: 1}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.25)", borderRadius: "999px", padding: "8px 18px", marginBottom: "32px"}}
          >
            <span style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4ade80", display: "inline-block", boxShadow: "0 0 8px #4ade80"}} />
            <span style={{fontSize: "13px", color: "#86efac", fontWeight: "500"}}>For Operators</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{fontFamily: "Syne, sans-serif", fontSize: "64px", fontWeight: "900", color: "white", letterSpacing: "-2px", lineHeight: "1.05", marginBottom: "24px"}}
          >
            Grow your food<br />
            <span className="shimmer-text">business with Hoose</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: "1.8"}}
          >
            We're building a dedicated portal for food operators. Be the first to know when we launch.
          </motion.p>
        </div>
      </section>

      <section style={{backgroundColor: "#060f08", padding: "40px 0 120px"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto", padding: "0 48px"}}>

          <div style={{display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px", alignItems: "center", marginBottom: "100px", padding: "64px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "32px"}}>
            <div style={{textAlign: "center"}}>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{fontSize: "100px", marginBottom: "16px"}}
              >🚀</motion.div>
              <div style={{fontSize: "48px", fontWeight: "900", fontFamily: "Syne, sans-serif", color: "#4ade80"}}>Coming</div>
              <div style={{fontSize: "48px", fontWeight: "900", fontFamily: "Syne, sans-serif", color: "white", marginTop: "-8px"}}>Soon</div>
            </div>
            <div>
              <h2 style={{fontFamily: "Syne, sans-serif", fontSize: "36px", fontWeight: "900", color: "white", marginBottom: "20px", letterSpacing: "-1px", lineHeight: "1.1"}}>
                The operator portal is in development
              </h2>
              <p style={{fontSize: "16px", color: "rgba(255,255,255,0.55)", lineHeight: "1.8", marginBottom: "32px"}}>
                We're building a powerful suite of tools specifically designed for food business operators — with advanced analytics, vendor management, and growth insights all in one place.
              </p>
              <motion.div
                onClick={function() { navigate("/contact"); }}
                style={{display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #4ade80, #0b7d40)", color: "white", padding: "14px 32px", borderRadius: "999px", fontWeight: "700", fontSize: "15px", cursor: "pointer", fontFamily: "Syne, sans-serif"}}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(74,222,128,0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
                Get Early Access →
              </motion.div>
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{fontFamily: "Syne, sans-serif", fontSize: "40px", fontWeight: "900", color: "white", letterSpacing: "-1px", marginBottom: "12px", textAlign: "center"}}
          >
            What's coming
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "16px", marginBottom: "48px"}}
          >
            A sneak peek at what we're building for operators
          </motion.p>

          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px"}}>
            {upcoming.map(function(item, i) {
              return (
                <motion.div
                  key={item[1]}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  style={{backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "28px", position: "relative", overflow: "hidden"}}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(74,222,128,0.15)", y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div style={{position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px", borderRadius: "50%", background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)"}} />
                  <div style={{fontSize: "32px", marginBottom: "16px"}}>{item[0]}</div>
                  <h4 style={{fontFamily: "Syne, sans-serif", fontSize: "16px", fontWeight: "700", color: "white", marginBottom: "8px"}}>{item[1]}</h4>
                  <p style={{fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: "1.7", margin: 0}}>{item[2]}</p>
                  <div style={{position: "absolute", bottom: "20px", right: "20px", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(74,222,128,0.4)"}} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}