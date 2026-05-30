import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

function Counter(props) {
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const target = props.target;
        const suffix = props.suffix;
        const step = target / 120;
        const timer = setInterval(function() {
          start += step;
          if (start >= target) { start = target; clearInterval(timer); }
          if (ref.current) ref.current.textContent = Math.floor(start) + suffix;
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <span ref={ref}>{"0" + props.suffix}</span>;
}

function useReveal() {
  useEffect(() => {
    const observe = function(cls) {
      const els = document.querySelectorAll("." + cls);
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, { threshold: 0.1 });
      els.forEach(function(el) { observer.observe(el); });
      return observer;
    };
    const o1 = observe("reveal");
    const o2 = observe("reveal-left");
    const o3 = observe("reveal-right");
    return function() { o1.disconnect(); o2.disconnect(); o3.disconnect(); };
  }, []);
}

const reviews = [
  { name: "Priya S.", text: "Hoose helped my chaat stall get 3x more orders in just 2 months!", rating: 5, city: "Mumbai" },
  { name: "Ramesh K.", text: "The branding support transformed how customers see my dhaba.", rating: 5, city: "Pune" },
  { name: "Anita M.", text: "Finally a platform that understands local food businesses.", rating: 5, city: "Mumbai" },
  { name: "Suresh P.", text: "Dashboard is so easy to use. My sales are up 40%.", rating: 5, city: "Thane" },
  { name: "Deepa R.", text: "The community of vendors is amazing. We help each other grow.", rating: 5, city: "Mumbai" },
  { name: "Vijay T.", text: "Hoose gave my street food stall a real professional identity.", rating: 5, city: "Navi Mumbai" },
];

const floatingEmojis = [
  { emoji: "🍛", size: 56, left: "5%", top: "20%", duration: "7s", delay: "0s" },
  { emoji: "🥘", size: 40, left: "10%", top: "65%", duration: "9s", delay: "1s" },
  { emoji: "🍜", size: 52, left: "88%", top: "12%", duration: "8s", delay: "0.5s" },
  { emoji: "🥗", size: 36, left: "84%", top: "72%", duration: "10s", delay: "2s" },
  { emoji: "🍱", size: 44, left: "3%", top: "45%", duration: "6s", delay: "1.5s" },
  { emoji: "🌮", size: 38, left: "93%", top: "48%", duration: "8s", delay: "0.8s" },
  { emoji: "🍢", size: 32, left: "50%", top: "6%", duration: "11s", delay: "3s" },
  { emoji: "🍙", size: 42, left: "22%", top: "10%", duration: "9s", delay: "0.3s" },
  { emoji: "🫙", size: 34, left: "75%", top: "30%", duration: "7s", delay: "2.5s" },
  { emoji: "🍲", size: 48, left: "65%", top: "80%", duration: "8s", delay: "1.2s" },
  { emoji: "🥙", size: 36, left: "35%", top: "88%", duration: "10s", delay: "0.7s" },
  { emoji: "🍿", size: 30, left: "78%", top: "90%", duration: "12s", delay: "4s" },
  { emoji: "🧆", size: 38, left: "18%", top: "82%", duration: "9s", delay: "1.8s" },
  { emoji: "🥟", size: 44, left: "45%", top: "15%", duration: "7s", delay: "2.2s" },
  { emoji: "🍤", size: 32, left: "58%", top: "5%", duration: "8s", delay: "0.6s" },
];

const marqueeItems = [
  "50+ Vendors", "Mumbai", "270+ Community", "Join Hoose",
  "Local Food", "Grow Faster", "Brand Building", "Technology",
  "50+ Vendors", "Mumbai", "270+ Community", "Join Hoose",
  "Local Food", "Grow Faster", "Brand Building", "Technology",
];

const features = [
  ["🍽️", "Discover Vendors", "Find the best authentic local food businesses near you with verified quality ratings"],
  ["⭐", "Verified Quality", "Every vendor is thoroughly vetted for quality, hygiene and consistency"],
  ["📱", "Easy Ordering", "Order directly from your favourite local vendors with a seamless experience"],
  ["🤝", "Support Local", "Every order directly supports a local food entrepreneur and their family"],
];

const process = [
  ["01", "Register", "Sign up and create your vendor profile in minutes"],
  ["02", "Set Up", "Get your branding, dashboard and operations configured"],
  ["03", "Go Live", "Start receiving orders and growing your customer base"],
  ["04", "Scale", "Use analytics and insights to grow beyond your locality"],
];

export default function Home() {
  const navigate = useNavigate();
  const [reviewIndex, setReviewIndex] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  useReveal();

  useEffect(() => {
    const timer = setInterval(function() {
      setReviewIndex(function(prev) { return (prev + 1) % reviews.length; });
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{backgroundColor: "#faf7f2"}}>

      {/* HERO */}
      <section ref={heroRef} style={{position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#0b7d40"}}>

        {/* Animated orbs */}
        <div style={{position: "absolute", inset: 0, overflow: "hidden"}}>
          <div style={{position: "absolute", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(11,125,64,0.55) 0%, transparent 70%)", top: "-200px", left: "-150px", animation: "orbMove1 12s ease-in-out infinite"}} />
          <div style={{position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(13,150,81,0.4) 0%, transparent 70%)", bottom: "-100px", right: "-100px", animation: "orbMove2 15s ease-in-out infinite"}} />
          <div style={{position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(74,222,128,0.2) 0%, transparent 70%)", top: "40%", left: "40%", animation: "orbMove3 10s ease-in-out infinite"}} />
        </div>

        {/* Floating emojis */}
        {floatingEmojis.map(function(e, i) {
          return (
            <div key={i} className="float-emoji" style={{fontSize: e.size + "px", left: e.left, top: e.top, animationDuration: e.duration, animationDelay: e.delay, opacity: 0.1, zIndex: 1}}>
              {e.emoji}
            </div>
          );
        })}

        {/* Grid overlay */}
        <div style={{position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", zIndex: 1}} />

        <motion.div style={{maxWidth: "1280px", margin: "0 auto", padding: "120px 48px 80px", width: "100%", position: "relative", zIndex: 2, y: heroY, opacity: heroOpacity}}>
          <div style={{display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "80px", alignItems: "center"}}>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.25)", borderRadius: "999px", padding: "8px 18px", marginBottom: "32px"}}
              >
                <span style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4ade80", display: "inline-block", boxShadow: "0 0 8px #4ade80"}} />
                <span style={{fontSize: "13px", color: "#86efac", fontWeight: "500"}}>Trusted by 50+ local food businesses</span>
              </motion.div>

              <div style={{overflow: "hidden", marginBottom: "24px"}}>
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{fontFamily: "Syne, sans-serif", fontSize: "72px", fontWeight: "900", lineHeight: "1.02", letterSpacing: "-3px", color: "white", margin: 0}}
                >
                  {"India's first & "}
                  <span className="shimmer-text">biggest</span>
                  {" local food network"}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                style={{fontSize: "18px", color: "rgba(255,255,255,0.65)", maxWidth: "460px", lineHeight: "1.85", marginBottom: "40px"}}
              >
                Helping local food businesses scale through technology, branding, community, and smarter operations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                style={{display: "flex", gap: "14px", flexWrap: "wrap"}}
              >
                <motion.div
                  onClick={function() { navigate("/contact"); }}
                  style={{background: "linear-gradient(135deg, #4ade80, #0b7d40)", color: "white", padding: "15px 36px", borderRadius: "999px", fontWeight: "700", fontSize: "15px", cursor: "pointer", fontFamily: "Syne, sans-serif", boxShadow: "0 8px 32px rgba(74,222,128,0.3)"}}
                  whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(74,222,128,0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  data-cursor="pointer"
                >
                  Get Started →
                </motion.div>
                <motion.div
                  onClick={function() { navigate("/services/customers"); }}
                  style={{border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", padding: "15px 36px", borderRadius: "999px", fontWeight: "500", fontSize: "15px", cursor: "pointer"}}
                  whileHover={{ borderColor: "rgba(255,255,255,0.5)", color: "white", backgroundColor: "rgba(255,255,255,0.05)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  See Services
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{position: "relative"}}
            >
              <motion.div
                style={{borderRadius: "28px", overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.5)"}}
                whileHover={{ scale: 1.02, rotate: -0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1400&auto=format&fit=crop" alt="Indian street food" style={{width: "100%", height: "520px", objectFit: "cover", display: "block"}} />
                <div style={{position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,15,8,0.4) 0%, transparent 60%)"}} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                style={{position: "absolute", bottom: "-20px", left: "-24px", backgroundColor: "rgba(10,26,15,0.9)", border: "1px solid rgba(74,222,128,0.2)", color: "white", padding: "16px 22px", borderRadius: "20px", backdropFilter: "blur(20px)"}}
              >
                <div style={{fontSize: "36px", fontWeight: "900", fontFamily: "Syne, sans-serif", color: "#4ade80"}}>270+</div>
                <p style={{fontSize: "12px", color: "rgba(255,255,255,0.55)", margin: 0, fontWeight: "500", marginTop: "2px"}}>Growing vendor community</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                style={{position: "absolute", top: "-20px", right: "-24px", backgroundColor: "rgba(10,26,15,0.9)", border: "1px solid rgba(74,222,128,0.2)", color: "white", padding: "16px 22px", borderRadius: "20px", backdropFilter: "blur(20px)"}}
              >
                <div style={{fontSize: "36px", fontWeight: "900", fontFamily: "Syne, sans-serif", color: "#4ade80"}}>50+</div>
                <p style={{fontSize: "12px", color: "rgba(255,255,255,0.55)", margin: 0, fontWeight: "500", marginTop: "2px"}}>Vendors served</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", zIndex: 2}}
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)"}}
          />
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div style={{backgroundColor: "#0a1a0f", padding: "16px 0", overflow: "hidden", borderTop: "1px solid rgba(74,222,128,0.1)", borderBottom: "1px solid rgba(74,222,128,0.1)"}}>
        <div className="marquee-track">
          {marqueeItems.map(function(item, i) {
            return (
              <div key={i} style={{display: "flex", alignItems: "center", gap: "20px", paddingRight: "40px", whiteSpace: "nowrap"}}>
                <span style={{color: "#4ade80", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase"}}>{item}</span>
                <span style={{color: "rgba(74,222,128,0.3)", fontSize: "14px"}}>✦</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* STATS */}
      <section style={{background: "linear-gradient(135deg, #0b7d40 0%, #0d9651 100%)", color: "white", padding: "72px 0"}}>
        <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 48px"}}>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0", textAlign: "center"}}>
            {[
              [50, "+", "Vendors onboarded"],
              [null, "Mumbai", "Operating city"],
              [270, "+", "Community network"]
            ].map(function(stat, i) {
              const num = stat[0];
              const suffix = stat[1];
              const label = stat[2];
              return (
                <motion.div
                  key={label}
                  className="reveal"
                  style={{padding: "0 40px", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.12)" : "none"}}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{fontSize: "52px", fontWeight: "900", fontFamily: "Syne, sans-serif", lineHeight: 1}}>
                    {num !== null ? <Counter target={num} suffix={suffix} /> : suffix}
                  </div>
                  <p style={{color: "rgba(255,255,255,0.6)", marginTop: "10px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.5px"}}>{label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{backgroundColor: "#faf7f2", padding: "120px 0"}}>
        <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 48px"}}>
          <div className="reveal" style={{textAlign: "center", marginBottom: "80px"}}>
            <div style={{display: "inline-block", backgroundColor: "#dcfce7", color: "#0b7d40", padding: "6px 16px", borderRadius: "999px", fontSize: "11px", fontWeight: "700", marginBottom: "20px", letterSpacing: "1.5px", textTransform: "uppercase"}}>How It Works</div>
            <h2 style={{fontFamily: "Syne, sans-serif", fontSize: "48px", fontWeight: "900", color: "#0a1a0f", letterSpacing: "-1.5px", marginBottom: "16px"}}>Four steps to success</h2>
            <p style={{fontSize: "17px", color: "#6b7a5c", maxWidth: "480px", margin: "0 auto", lineHeight: "1.7"}}>Getting started with Hoose is simple. We handle the complexity so you can focus on your food.</p>
          </div>

          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "24px"}}>
            {process.map(function(step, i) {
              const num = step[0];
              const title = step[1];
              const desc = step[2];
              return (
                <motion.div
                  key={num}
                  className="reveal"
                  style={{backgroundColor: "white", borderRadius: "24px", padding: "36px 28px", border: "1px solid #ede9e0", position: "relative", overflow: "hidden", animationDelay: (i * 0.1) + "s"}}
                  whileHover={{ y: -8, boxShadow: "0 24px 56px rgba(11,125,64,0.12)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div style={{position: "absolute", top: "-10px", right: "20px", fontFamily: "Syne, sans-serif", fontSize: "80px", fontWeight: "900", color: "rgba(11,125,64,0.06)", lineHeight: 1, userSelect: "none"}}>{num}</div>
                  <div style={{width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #dcfce7, #bbf7d0)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px"}}>
                    <span style={{fontSize: "22px", fontWeight: "900", color: "#0b7d40", fontFamily: "Syne, sans-serif"}}>{i + 1}</span>
                  </div>
                  <h3 style={{fontFamily: "Syne, sans-serif", fontSize: "20px", fontWeight: "800", color: "#0a1a0f", marginBottom: "10px"}}>{title}</h3>
                  <p style={{fontSize: "14px", color: "#6b7280", lineHeight: "1.7"}}>{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{backgroundColor: "#0a1a0f", padding: "120px 0", position: "relative", overflow: "hidden"}}>
        <div style={{position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(11,125,64,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(13,150,81,0.1) 0%, transparent 50%)"}} />
        <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1}}>
          <div className="reveal" style={{textAlign: "center", marginBottom: "80px"}}>
            <div style={{display: "inline-block", backgroundColor: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)", color: "#4ade80", padding: "6px 16px", borderRadius: "999px", fontSize: "11px", fontWeight: "700", marginBottom: "20px", letterSpacing: "1.5px", textTransform: "uppercase"}}>Why Hoose</div>
            <h2 style={{fontFamily: "Syne, sans-serif", fontSize: "48px", fontWeight: "900", color: "white", letterSpacing: "-1.5px"}}>Built for food entrepreneurs</h2>
          </div>

          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "16px"}}>
            {features.map(function(f, i) {
              return (
                <motion.div
                  key={f[1]}
                  className="reveal"
                  style={{backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "24px", padding: "36px 28px", animationDelay: (i * 0.1) + "s", position: "relative", overflow: "hidden"}}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(74,222,128,0.2)", y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div style={{fontSize: "40px", marginBottom: "20px"}}>{f[0]}</div>
                  <h3 style={{fontFamily: "Syne, sans-serif", fontSize: "18px", fontWeight: "700", color: "white", marginBottom: "10px"}}>{f[1]}</h3>
                  <p style={{fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: "1.7"}}>{f[2]}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{backgroundColor: "#faf7f2", padding: "120px 0", overflow: "hidden"}}>
        <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 48px"}}>
          <div className="reveal" style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px"}}>
            <div>
              <div style={{display: "inline-block", backgroundColor: "#dcfce7", color: "#0b7d40", padding: "6px 16px", borderRadius: "999px", fontSize: "11px", fontWeight: "700", marginBottom: "16px", letterSpacing: "1.5px", textTransform: "uppercase"}}>Testimonials</div>
              <h2 style={{fontFamily: "Syne, sans-serif", fontSize: "48px", fontWeight: "900", color: "#0a1a0f", letterSpacing: "-1.5px", lineHeight: "1.1"}}>Vendors love Hoose</h2>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "12px", paddingBottom: "8px"}}>
              <div style={{display: "flex", gap: "8px"}}>
                {reviews.map(function(_, i) {
                  return (
                    <motion.div key={i} onClick={function() { setReviewIndex(i); }} style={{width: i === reviewIndex ? "32px" : "8px", height: "8px", borderRadius: "999px", backgroundColor: i === reviewIndex ? "#0b7d40" : "#c8e6d0", cursor: "pointer"}} animate={{ width: i === reviewIndex ? 32 : 8 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} />
                  );
                })}
              </div>
            </div>
          </div>

          <div style={{overflow: "hidden"}}>
            <motion.div
              style={{display: "flex", gap: "20px"}}
              animate={{ x: "calc(-" + reviewIndex + " * (33.333% + 7px))" }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              {reviews.concat(reviews).map(function(r, i) {
                return (
                  <motion.div
                    key={i}
                    style={{backgroundColor: "white", borderRadius: "24px", padding: "36px", border: "1px solid #ede9e0", minWidth: "calc(33.333% - 14px)", flexShrink: 0, boxShadow: "0 2px 12px rgba(0,0,0,0.04)"}}
                    whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(11,125,64,0.1)", borderColor: "rgba(11,125,64,0.15)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div style={{color: "#f59e0b", fontSize: "16px", marginBottom: "16px", letterSpacing: "2px"}}>{"★".repeat(r.rating)}</div>
                    <p style={{fontSize: "16px", color: "#374151", lineHeight: "1.8", marginBottom: "24px", fontStyle: "italic"}}>"{r.text}"</p>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                      <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                        <div style={{width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg, #dcfce7, #86efac)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", color: "#0b7d40", fontSize: "15px", fontFamily: "Syne, sans-serif"}}>{r.name[0]}</div>
                        <div>
                          <div style={{fontWeight: "700", color: "#0a1a0f", fontSize: "14px"}}>{r.name}</div>
                          <div style={{fontSize: "12px", color: "#9ca3af"}}>{r.city}</div>
                        </div>
                      </div>
                      <div style={{fontSize: "11px", color: "#0b7d40", fontWeight: "600", backgroundColor: "#f0fdf4", padding: "4px 10px", borderRadius: "999px"}}>Verified</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{position: "relative", overflow: "hidden", padding: "120px 0", background: "#0b7d40"}}>
        <div style={{position: "absolute", inset: 0}}>
          <div style={{position: "absolute", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(11,125,64,0.4) 0%, transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "orbMove3 8s ease-in-out infinite"}} />
          <div style={{position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        </div>
        <div className="reveal" style={{maxWidth: "800px", margin: "0 auto", padding: "0 48px", textAlign: "center", position: "relative", zIndex: 1}}>
          <div style={{display: "inline-block", backgroundColor: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)", color: "#4ade80", padding: "6px 16px", borderRadius: "999px", fontSize: "11px", fontWeight: "700", marginBottom: "24px", letterSpacing: "1.5px", textTransform: "uppercase"}}>Join the Movement</div>
          <h2 style={{fontFamily: "Syne, sans-serif", fontSize: "60px", fontWeight: "900", color: "white", marginBottom: "20px", letterSpacing: "-2px", lineHeight: "1.05"}}>
            Ready to grow your<br />
            <span className="shimmer-text">food business?</span>
          </h2>
          <p style={{fontSize: "18px", color: "rgba(255,255,255,0.55)", marginBottom: "48px", lineHeight: "1.8"}}>
            Join 50+ vendors already on Hoose and start scaling today.
          </p>
          <div style={{display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap"}}>
            <motion.div
              onClick={function() { navigate("/contact"); }}
              style={{background: "linear-gradient(135deg, #4ade80, #0b7d40)", color: "white", padding: "16px 48px", borderRadius: "999px", fontWeight: "700", fontSize: "16px", cursor: "pointer", fontFamily: "Syne, sans-serif", boxShadow: "0 8px 32px rgba(74,222,128,0.25)"}}
              whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(74,222,128,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              Join Hoose →
            </motion.div>
            <motion.div
              onClick={function() { navigate("/services/operators"); }}
              style={{border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", padding: "16px 48px", borderRadius: "999px", fontWeight: "500", fontSize: "16px", cursor: "pointer"}}
              whileHover={{ borderColor: "rgba(255,255,255,0.35)", color: "white", backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.97 }}
            >
              For Operators
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}