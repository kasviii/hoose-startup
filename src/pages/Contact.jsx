import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({name: "", email: "", phone: "", message: ""});
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = function(e) {
    const field = e.target.name;
    const value = e.target.value;
    setForm(function(prev) {
      const next = Object.assign({}, prev);
      next[field] = value;
      return next;
    });
  };

  const handleSubmit = function(e) {
    e.preventDefault();
    setSent(true);
  };

  const getInputStyle = function(name) {
    return {
      width: "100%",
      padding: "16px 18px",
      borderRadius: "14px",
      border: focused === name ? "1.5px solid #86efac" : "1.5px solid rgba(255,255,255,0.15)",
      fontSize: "15px",
      outline: "none",
      backgroundColor: "rgba(0,0,0,0.2)",
      color: "white",
      fontFamily: "Instrument Sans, sans-serif",
      boxSizing: "border-box",
      transition: "border-color 0.2s, background 0.2s",
      caretColor: "#86efac"
    };
  };

  const contactItems = [
    { icon: "📞", label: "Phone", value: "+91 9137719788", sub: "Mon–Sat, 9am–7pm" },
    { icon: "✉️", label: "Email", value: "office@hoose.in", sub: "We reply within 24hrs" },
    { icon: "📍", label: "Location", value: "Mumbai, Maharashtra", sub: "India" }
  ];

  const reasons = [
    ["🍽️", "Join as a Vendor", "Get your food business on Hoose"],
    ["📈", "Grow Your Brand", "Marketing and branding support"],
    ["🤝", "Partnership", "Collaborate with Hoose"],
    ["💬", "General Query", "Any other questions"],
  ];

  return (
    <div style={{backgroundColor: "#0b7d40"}}>

      {/* Hero — split layout */}
      <section style={{position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #085c30 0%, #0b7d40 50%, #0d9651 100%)", padding: "140px 0 80px"}}>
        <div style={{position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />

        <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1}}>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center"}}>

            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "999px", padding: "8px 18px", marginBottom: "32px"}}
              >
                <span style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#86efac", display: "inline-block"}} />
                <span style={{fontSize: "13px", color: "white", fontWeight: "500"}}>Get In Touch</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{fontFamily: "Syne, sans-serif", fontSize: "58px", fontWeight: "900", color: "white", letterSpacing: "-2px", lineHeight: "1.05", marginBottom: "24px"}}
              >
                Let's grow your<br />
                <span style={{
                  background: "linear-gradient(90deg, white 0%, rgba(255,255,255,0.7) 30%, white 60%, rgba(255,255,255,0.5) 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 4s linear infinite"
                }}>food brand</span><br />
                together
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                style={{fontSize: "17px", color: "rgba(255,255,255,0.75)", lineHeight: "1.8", marginBottom: "40px", maxWidth: "420px"}}
              >
                Whether you're starting your first food stall or expanding an established brand, we're here to help.
              </motion.p>

              {/* Reason chips */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px"}}
              >
                {reasons.map(function(r) {
                  return (
                    <motion.div
                      key={r[1]}
                      style={{display: "flex", alignItems: "center", gap: "10px", backgroundColor: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "14px", padding: "12px 16px", cursor: "default"}}
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.3)", borderColor: "rgba(255,255,255,0.25)", x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <span style={{fontSize: "20px"}}>{r[0]}</span>
                      <div>
                        <div style={{fontSize: "13px", fontWeight: "700", color: "white", fontFamily: "Syne, sans-serif"}}>{r[1]}</div>
                        <div style={{fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "1px"}}>{r[2]}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right — contact info card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{display: "flex", flexDirection: "column", gap: "16px"}}
            >
              {/* Big contact card */}
              <div style={{backgroundColor: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "28px", padding: "36px", backdropFilter: "blur(20px)"}}>
                <h3 style={{fontFamily: "Syne, sans-serif", fontSize: "22px", fontWeight: "800", color: "white", marginBottom: "28px"}}>Contact us directly</h3>
                <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
                  {contactItems.map(function(item) {
                    return (
                      <motion.div
                        key={item.label}
                        style={{display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px"}}
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", x: 4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      >
                        <div style={{width: "44px", height: "44px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0}}>
                          {item.icon}
                        </div>
                        <div>
                          <div style={{fontSize: "11px", color: "#86efac", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600"}}>{item.label}</div>
                          <div style={{fontSize: "15px", fontWeight: "700", color: "white", fontFamily: "Syne, sans-serif"}}>{item.value}</div>
                          <div style={{fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "2px"}}>{item.sub}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Social + response time row */}
              <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px"}}>
                <div style={{backgroundColor: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "20px", padding: "20px", textAlign: "center"}}>
                  <div style={{fontSize: "28px", marginBottom: "8px"}}>⚡</div>
                  <div style={{fontSize: "16px", fontWeight: "800", color: "white", fontFamily: "Syne, sans-serif"}}>24hrs</div>
                  <div style={{fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "2px"}}>Response time</div>
                </div>
                <div style={{backgroundColor: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "20px", padding: "20px", textAlign: "center"}}>
                  <div style={{fontSize: "28px", marginBottom: "8px"}}>🌟</div>
                  <div style={{fontSize: "16px", fontWeight: "800", color: "white", fontFamily: "Syne, sans-serif"}}>50+</div>
                  <div style={{fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "2px"}}>Happy vendors</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section style={{backgroundColor: "#0b7d40", padding: "80px 0 120px"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto", padding: "0 48px"}}>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start"}}>

            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 style={{fontFamily: "Syne, sans-serif", fontSize: "36px", fontWeight: "800", color: "white", marginBottom: "12px", letterSpacing: "-0.5px"}}>
                Follow our journey
              </h2>
              <p style={{fontSize: "15px", color: "rgba(255,255,255,0.6)", marginBottom: "28px", lineHeight: "1.7"}}>
                Stay updated with vendor stories, platform news, and food culture content from across India.
              </p>
              <div style={{display: "flex", gap: "10px", marginBottom: "48px"}}>
                {[["📸", "Instagram"], ["👥", "Facebook"], ["💼", "LinkedIn"]].map(function(s) {
                  return (
                    <motion.div
                      key={s[1]}
                      style={{display: "flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", padding: "10px 16px", cursor: "pointer", fontSize: "13px", fontWeight: "600", color: "rgba(255,255,255,0.8)"}}
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.35)", borderColor: "rgba(255,255,255,0.3)", color: "white" }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>{s[0]}</span>
                      <span>{s[1]}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quote */}
              <div style={{background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "20px", padding: "28px 32px"}}>
                <div style={{fontSize: "28px", color: "rgba(255,255,255,0.3)", fontFamily: "Georgia, serif", lineHeight: 1, marginBottom: "12px"}}>"</div>
                <p style={{fontSize: "15px", color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: "1.8", fontStyle: "italic"}}>
                  We built Hoose because we believe every street food vendor deserves the same tools as a big restaurant chain.
                </p>
                <div style={{marginTop: "16px", fontSize: "13px", color: "#86efac", fontWeight: "600"}}>— Divyanshu & Dhananjay, Co-Founders</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{backgroundColor: "rgba(0,0,0,0.22)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "28px", padding: "44px"}}
            >
              {sent ? (
                <div style={{textAlign: "center", padding: "60px 0"}}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    style={{fontSize: "72px", marginBottom: "24px"}}
                  >🎉</motion.div>
                  <h3 style={{fontFamily: "Syne, sans-serif", fontSize: "28px", fontWeight: "800", color: "white", marginBottom: "12px"}}>Message Sent!</h3>
                  <p style={{color: "rgba(255,255,255,0.6)", fontSize: "15px", lineHeight: "1.7"}}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "16px"}}>
                  <h3 style={{fontFamily: "Syne, sans-serif", fontSize: "26px", fontWeight: "800", color: "white", marginBottom: "8px"}}>Send us a message</h3>
                  <input style={getInputStyle("name")} type="text" name="name" placeholder="Full name" value={form.name} onChange={handleChange} required onFocus={function() { setFocused("name"); }} onBlur={function() { setFocused(""); }} />
                  <input style={getInputStyle("email")} type="email" name="email" placeholder="Email address" value={form.email} onChange={handleChange} required onFocus={function() { setFocused("email"); }} onBlur={function() { setFocused(""); }} />
                  <input style={getInputStyle("phone")} type="tel" name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} onFocus={function() { setFocused("phone"); }} onBlur={function() { setFocused(""); }} />
                  <textarea style={Object.assign({}, getInputStyle("message"), {height: "140px", resize: "none"})} name="message" placeholder="Tell us about your food business..." value={form.message} onChange={handleChange} required onFocus={function() { setFocused("message"); }} onBlur={function() { setFocused(""); }} />
                  <motion.button
                    type="submit"
                    style={{backgroundColor: "white", color: "#0b7d40", padding: "17px", borderRadius: "14px", fontWeight: "700", fontSize: "16px", border: "none", cursor: "pointer", fontFamily: "Syne, sans-serif"}}
                    whileHover={{ scale: 1.02, backgroundColor: "#86efac" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message →
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}