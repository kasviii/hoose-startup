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
      border: focused === name ? "1.5px solid #4ade80" : "1.5px solid rgba(255,255,255,0.08)",
      fontSize: "15px",
      outline: "none",
      backgroundColor: "rgba(255,255,255,0.04)",
      color: "white",
      fontFamily: "Instrument Sans, sans-serif",
      boxSizing: "border-box",
      transition: "border-color 0.2s, background 0.2s",
      caretColor: "#4ade80"
    };
  };

  const contactItems = [
    { icon: "📞", label: "Phone", value: "+91 9137719788" },
    { icon: "✉️", label: "Email", value: "office@hoose.in" },
    { icon: "📍", label: "Location", value: "Mumbai, Maharashtra" }
  ];

  return (
    <div style={{backgroundColor: "#0b7d40"}}>

      {/* Hero */}
      <section style={{position: "relative", overflow: "hidden", padding: "160px 0 80px"}}>
        <div style={{position: "absolute", inset: 0}}>
          <div style={{position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(11,125,64,0.35) 0%, transparent 70%)", top: "-100px", left: "-100px", animation: "orbMove1 12s ease-in-out infinite"}} />
          <div style={{position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%)", bottom: "0", right: "10%", animation: "orbMove2 15s ease-in-out infinite"}} />
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
            <span style={{fontSize: "13px", color: "#86efac", fontWeight: "500"}}>Get In Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{fontFamily: "Syne, sans-serif", fontSize: "64px", fontWeight: "900", color: "white", letterSpacing: "-2px", lineHeight: "1.05", marginBottom: "24px"}}
          >
            Let's grow your<br />
            <span className="shimmer-text">food brand together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: "1.8"}}
          >
            Whether you're starting your first food stall or expanding an established brand, we're here to help.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section style={{backgroundColor: "#0b7d40", padding: "80px 0 120px"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto", padding: "0 48px"}}>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start"}}>

            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 style={{fontFamily: "Syne, sans-serif", fontSize: "32px", fontWeight: "800", color: "white", marginBottom: "40px", letterSpacing: "-0.5px"}}>
                Contact Information
              </h2>
              <div style={{display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px"}}>
                {contactItems.map(function(item) {
                  return (
                    <motion.div
                      key={item.label}
                      style={{display: "flex", alignItems: "center", gap: "16px", padding: "20px 24px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px"}}
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(74,222,128,0.2)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <div style={{width: "48px", height: "48px", backgroundColor: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0}}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{fontSize: "11px", color: "#4ade80", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600"}}>{item.label}</div>
                        <div style={{fontSize: "15px", fontWeight: "600", color: "white"}}>{item.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div style={{background: "linear-gradient(135deg, rgba(11,125,64,0.3), rgba(13,150,81,0.2))", border: "1px solid rgba(74,222,128,0.15)", borderRadius: "24px", padding: "32px", position: "relative", overflow: "hidden"}}>
                <div style={{position: "absolute", top: "-30px", right: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, rgba(74,222,128,0.15) 0%, transparent 70%)"}} />
                <h3 style={{fontFamily: "Syne, sans-serif", fontSize: "20px", fontWeight: "700", color: "white", marginBottom: "12px"}}>Follow Our Journey</h3>
                <p style={{fontSize: "14px", color: "rgba(255,255,255,0.55)", marginBottom: "20px", lineHeight: "1.7"}}>
                  Stay updated with vendor stories, platform news, and food culture content.
                </p>
                <div style={{display: "flex", gap: "10px"}}>
                  {[["📸", "Instagram"], ["👥", "Facebook"], ["💼", "LinkedIn"]].map(function(s) {
                    return (
                      <motion.div
                        key={s[1]}
                        style={{display: "flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "8px 14px", cursor: "pointer", fontSize: "13px", fontWeight: "600", color: "rgba(255,255,255,0.7)"}}
                        whileHover={{ backgroundColor: "rgba(74,222,128,0.15)", borderColor: "rgba(74,222,128,0.3)", color: "white" }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>{s[0]}</span>
                        <span>{s[1]}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "28px", padding: "44px"}}
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
                  <p style={{color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: "1.7"}}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "16px"}}>
                  <h3 style={{fontFamily: "Syne, sans-serif", fontSize: "26px", fontWeight: "800", color: "white", marginBottom: "8px"}}>Send us a message</h3>
                  <input
                    style={getInputStyle("name")}
                    type="text" name="name" placeholder="Full name"
                    value={form.name} onChange={handleChange} required
                    onFocus={function() { setFocused("name"); }}
                    onBlur={function() { setFocused(""); }}
                  />
                  <input
                    style={getInputStyle("email")}
                    type="email" name="email" placeholder="Email address"
                    value={form.email} onChange={handleChange} required
                    onFocus={function() { setFocused("email"); }}
                    onBlur={function() { setFocused(""); }}
                  />
                  <input
                    style={getInputStyle("phone")}
                    type="tel" name="phone" placeholder="Phone number"
                    value={form.phone} onChange={handleChange}
                    onFocus={function() { setFocused("phone"); }}
                    onBlur={function() { setFocused(""); }}
                  />
                  <textarea
                    style={Object.assign({}, getInputStyle("message"), {height: "140px", resize: "none"})}
                    name="message" placeholder="Tell us about your food business..."
                    value={form.message} onChange={handleChange} required
                    onFocus={function() { setFocused("message"); }}
                    onBlur={function() { setFocused(""); }}
                  />
                  <motion.button
                    type="submit"
                    style={{background: "linear-gradient(135deg, #4ade80, #0b7d40)", color: "white", padding: "17px", borderRadius: "14px", fontWeight: "700", fontSize: "16px", border: "none", cursor: "pointer", fontFamily: "Syne, sans-serif", boxShadow: "0 8px 24px rgba(74,222,128,0.25)"}}
                    whileHover={{ scale: 1.02, boxShadow: "0 12px 32px rgba(74,222,128,0.4)" }}
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