import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const foodItems = ["🍛", "🥘", "🍜", "🥗", "🍱", "🌮", "🍢", "🥟", "🍤", "🧆"];

function AnimatedHoose() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(function() {
      setIndex(function(prev) { return (prev + 1) % foodItems.length; });
    }, 600);
    return () => clearInterval(timer);
  }, []);

  const letters = ["h", "o", "o", "s", "e"];

  return (
    <span style={{display: "inline-flex", alignItems: "center", gap: "2px", fontFamily: "Syne, sans-serif"}}>
      {letters.map(function(letter, i) {
        const isFoodLetter = i === 1 || i === 2;
        return (
          <motion.span
            key={i}
            style={{
              display: "inline-block",
              color: isFoodLetter ? "transparent" : "white",
              position: "relative",
              minWidth: isFoodLetter ? "64px" : "auto"
            }}
          >
            {isFoodLetter ? (
              <motion.span
                key={index + i}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{display: "inline-block", fontSize: "56px"}}
              >
                {foodItems[(index + i) % foodItems.length]}
              </motion.span>
            ) : letter}
          </motion.span>
        );
      })}
    </span>
  );
}

const values = [
  ["🌱", "Authenticity", "We champion real, local food over mass-produced alternatives."],
  ["🤝", "Community", "We build networks that help vendors support each other."],
  ["📈", "Growth", "Every tool we build is designed to help vendors scale."],
  ["🛡️", "Trust", "We ensure quality and hygiene standards across our network."]
];

const team = [
  { name: "Divyanshu Jauhari", role: "Co-Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
  { name: "Dhananjay K. Dhoni", role: "Co-Founder", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" }
];

const timeline = [
  ["2023", "The Idea", "Two friends frustrated by how invisible great local food was decided to do something about it."],
  ["2024", "First Vendors", "Onboarded the first 10 vendors in Mumbai and proved the concept worked."],
  ["2025", "Growing Fast", "Reached 50+ vendors, 270+ community members, and launched the full platform."],
  ["2026", "Scaling Up", "Expanding to new cities and launching the operator portal."],
];

const stats = [
  ["50+", "Vendors"],
  ["270+", "Community"],
  ["2023", "Est."],
  ["Mumbai", "HQ"],
];

export default function About() {
  return (
    <div style={{backgroundColor: "#0b7d40"}}>

      {/* Hero */}
      <section style={{position: "relative", background: "linear-gradient(160deg, #085c30 0%, #0b7d40 50%, #0d9651 100%)", overflow: "hidden", padding: "140px 0 80px"}}>
        <div style={{position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />

        <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1}}>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center"}}>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "999px", padding: "8px 18px", marginBottom: "32px"}}
              >
                <span style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#86efac", display: "inline-block"}} />
                <span style={{fontSize: "13px", color: "white", fontWeight: "500"}}>Our Story</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{marginBottom: "24px"}}
              >
                <div style={{fontFamily: "Syne, sans-serif", fontSize: "64px", fontWeight: "900", color: "white", letterSpacing: "-2px", lineHeight: "1.05"}}>
                  <AnimatedHoose /> the guy
                </div>
                <div style={{fontFamily: "Syne, sans-serif", fontSize: "64px", fontWeight: "900", color: "white", letterSpacing: "-2px", lineHeight: "1.05"}}>
                  doing it?
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                style={{fontSize: "17px", color: "rgba(255,255,255,0.75)", lineHeight: "1.8", marginBottom: "40px", maxWidth: "440px"}}
              >
                Two friends on a mission to make India's local food culture the biggest food movement in the country.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{display: "flex", gap: "0", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)"}}
              >
                {stats.map(function(stat, i) {
                  return (
                    <div
                      key={stat[0]}
                      style={{flex: 1, padding: "16px 12px", textAlign: "center", backgroundColor: "rgba(0,0,0,0.2)", borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none"}}
                    >
                      <div style={{fontSize: "20px", fontWeight: "900", fontFamily: "Syne, sans-serif", color: "white", lineHeight: 1}}>{stat[0]}</div>
                      <div style={{fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "4px", fontWeight: "500"}}>{stat[1]}</div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{position: "relative"}}
            >
              <div style={{borderRadius: "28px", overflow: "hidden", boxShadow: "0 32px 64px rgba(0,0,0,0.35)"}}>
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop"
                  alt="Indian food culture"
                  style={{width: "100%", height: "460px", objectFit: "cover", display: "block"}}
                />
                <div style={{position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)"}} />
              </div>
              <div style={{position: "absolute", bottom: "24px", left: "24px", right: "24px", backgroundColor: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "16px", padding: "16px 20px", backdropFilter: "blur(20px)"}}>
                <div style={{fontSize: "13px", color: "#86efac", fontWeight: "600", marginBottom: "4px"}}>Founded in Mumbai</div>
                <div style={{fontSize: "15px", color: "white", fontWeight: "700", fontFamily: "Syne, sans-serif"}}>Building India's food future, one vendor at a time</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{backgroundColor: "#0b7d40", padding: "100px 0"}}>
        <div style={{maxWidth: "1100px", margin: "0 auto", padding: "0 48px"}}>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "100px"}}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{borderRadius: "28px", overflow: "hidden", boxShadow: "0 32px 64px rgba(0,0,0,0.3)", position: "relative"}}
            >
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop" alt="Team" style={{width: "100%", height: "480px", objectFit: "cover", display: "block"}} />
              <div style={{position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)"}} />
              <div style={{position: "absolute", bottom: "24px", left: "24px", right: "24px"}}>
                <div style={{backgroundColor: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "16px", padding: "16px 20px", backdropFilter: "blur(20px)"}}>
                  <div style={{fontSize: "13px", color: "#86efac", fontWeight: "600", marginBottom: "4px"}}>Founded in Mumbai</div>
                  <div style={{fontSize: "15px", color: "white", fontWeight: "700", fontFamily: "Syne, sans-serif"}}>Building India's food future</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{display: "flex", flexDirection: "column", gap: "20px"}}
            >
              <p style={{fontSize: "17px", lineHeight: "1.9", color: "rgba(255,255,255,0.85)"}}>
                Divyanshu and Dhananjay have always believed that India's local food culture deserves far more visibility, trust, and structure than it gets today.
              </p>
              <p style={{fontSize: "17px", lineHeight: "1.9", color: "rgba(255,255,255,0.85)"}}>
                Growing up around authentic local food experiences, they saw how incredibly talented vendors, small kitchens, and passionate food creators often remain unnoticed despite serving food that people truly connect with.
              </p>
              <p style={{fontSize: "17px", lineHeight: "1.9", color: "rgba(255,255,255,0.85)"}}>
                That belief became the foundation of Hoose.
              </p>
              <div style={{background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "20px", padding: "28px 32px", position: "relative", overflow: "hidden"}}>
                <div style={{fontSize: "32px", color: "rgba(255,255,255,0.3)", fontFamily: "Georgia, serif", lineHeight: 1, marginBottom: "12px"}}>"</div>
                <p style={{fontSize: "16px", color: "white", margin: 0, lineHeight: "1.8", fontStyle: "italic"}}>
                  The next great food experience in India may not come from a big chain, but from a small local kitchen with a story of generations.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <div style={{marginBottom: "100px"}}>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{fontFamily: "Syne, sans-serif", fontSize: "44px", fontWeight: "900", color: "white", letterSpacing: "-1.5px", marginBottom: "56px", textAlign: "center"}}
            >
              Our journey
            </motion.h2>
            <div style={{position: "relative"}}>
              <div style={{position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)", transform: "translateX(-50%)"}} />
              {timeline.map(function(item, i) {
                const year = item[0];
                const title = item[1];
                const desc = item[2];
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{display: "flex", justifyContent: isLeft ? "flex-end" : "flex-start", paddingRight: isLeft ? "calc(50% + 32px)" : "0", paddingLeft: isLeft ? "0" : "calc(50% + 32px)", marginBottom: "48px", position: "relative"}}
                  >
                    <div style={{position: "absolute", left: "50%", top: "24px", width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#86efac", transform: "translateX(-50%)", boxShadow: "0 0 16px rgba(134,239,172,0.6)", zIndex: 1}} />
                    <div style={{backgroundColor: "rgba(0,0,0,0.2)", borderRadius: "20px", padding: "28px 32px", border: "1px solid rgba(255,255,255,0.12)", maxWidth: "420px", backdropFilter: "blur(10px)"}}>
                      <div style={{fontSize: "13px", color: "#86efac", fontWeight: "700", marginBottom: "8px", letterSpacing: "1px"}}>{year}</div>
                      <h3 style={{fontFamily: "Syne, sans-serif", fontSize: "20px", fontWeight: "800", color: "white", marginBottom: "8px"}}>{title}</h3>
                      <p style={{fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.7", margin: 0}}>{desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mission Vision */}
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "100px"}}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "28px", padding: "48px"}}
            >
              <div style={{fontSize: "40px", marginBottom: "20px"}}>🎯</div>
              <h3 style={{fontFamily: "Syne, sans-serif", fontSize: "28px", fontWeight: "800", color: "white", marginBottom: "16px"}}>Our Mission</h3>
              <p style={{fontSize: "16px", lineHeight: "1.8", color: "rgba(255,255,255,0.8)"}}>
                Thousands of food vendors serve amazing products every day, yet many struggle with visibility, branding, and growth. Hoose bridges that gap by bringing modern business tools to local food entrepreneurs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{backgroundColor: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "28px", padding: "48px", position: "relative", overflow: "hidden"}}
            >
              <div style={{position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)"}} />
              <div style={{fontSize: "40px", marginBottom: "20px"}}>🔭</div>
              <h3 style={{fontFamily: "Syne, sans-serif", fontSize: "28px", fontWeight: "800", color: "white", marginBottom: "16px"}}>Our Vision</h3>
              <p style={{fontSize: "16px", lineHeight: "1.8", color: "rgba(255,255,255,0.8)"}}>
                To build India's most trusted ecosystem for food entrepreneurs by making growth tools accessible to every vendor, regardless of size.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{fontFamily: "Syne, sans-serif", fontSize: "44px", fontWeight: "900", color: "white", letterSpacing: "-1.5px", marginBottom: "48px", textAlign: "center"}}
          >
            What we stand for
          </motion.h2>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "20px", marginBottom: "100px"}}>
            {values.map(function(v, i) {
              return (
                <motion.div
                  key={v[1]}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  style={{backgroundColor: "rgba(0,0,0,0.18)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "32px 24px", textAlign: "center"}}
                  whileHover={{ y: -8, backgroundColor: "rgba(0,0,0,0.28)", borderColor: "rgba(255,255,255,0.25)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div style={{fontSize: "40px", marginBottom: "14px"}}>{v[0]}</div>
                  <h4 style={{fontFamily: "Syne, sans-serif", fontSize: "17px", fontWeight: "700", color: "white", marginBottom: "8px"}}>{v[1]}</h4>
                  <p style={{fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: "1.7"}}>{v[2]}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Team */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{fontFamily: "Syne, sans-serif", fontSize: "44px", fontWeight: "900", color: "white", letterSpacing: "-1.5px", marginBottom: "56px", textAlign: "center"}}
          >
            Meet the founders
          </motion.h2>
          <div style={{display: "flex", justifyContent: "center", gap: "48px", paddingBottom: "20px"}}>
            {team.map(function(member, i) {
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  style={{textAlign: "center", maxWidth: "280px"}}
                  whileHover={{ y: -8 }}
                >
                  <div style={{position: "relative", display: "inline-block", marginBottom: "24px"}}>
                    <div style={{position: "absolute", inset: "-3px", borderRadius: "50%", background: "linear-gradient(135deg, #86efac, rgba(255,255,255,0.4))", zIndex: 0}} />
                    <img src={member.img} alt={member.name} style={{width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover", display: "block", border: "4px solid #0b7d40", position: "relative", zIndex: 1}} />
                  </div>
                  <h4 style={{fontFamily: "Syne, sans-serif", fontSize: "20px", fontWeight: "800", color: "white", marginBottom: "6px"}}>{member.name}</h4>
                  <p style={{fontSize: "13px", color: "#86efac", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase"}}>{member.role}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}