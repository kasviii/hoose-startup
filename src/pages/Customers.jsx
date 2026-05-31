import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

const plans = [
  {
    name: "Starter Plan",
    price: "499",
    original: "999",
    discount: "83% OFF",
    tagline: "Everything you need to get started with Hoose.",
    billing: "Billed annually ₹5,988 or ₹599 month-to-month",
    features: ["Vendor profile on Hoose", "Basic dashboard access", "Order management", "Basic sales insights", "Community access", "Email support"],
    highlight: false,
    extra: "+ 1 month free"
  },
  {
    name: "Growth Plan",
    price: "1499",
    original: "1999",
    discount: "Most Popular",
    tagline: "Everything you need to grow your food business.",
    billing: "Billed annually ₹17,988 or ₹1,699 month-to-month",
    features: ["Dedicated vendor dashboard", "Order & sales management", "Customer insights & analytics", "Promotions & marketing support", "Priority customer support", "Featured on Hoose platform", "Branding support", "Social media & growth assistance"],
    highlight: true,
    extra: "+ 2 months free"
  },
  {
    name: "Pro Plan",
    price: "2499",
    original: "3999",
    discount: "64% OFF",
    tagline: "Advanced tools and expert support to scale.",
    billing: "Billed annually ₹29,988 or ₹2,799 month-to-month",
    features: ["Everything in Growth Plan", "Advanced analytics & reports", "Custom marketing campaigns", "Priority vendor placement", "Dedicated account manager", "Early access to new features", "Lower transaction fees", "Business growth consultation"],
    highlight: false,
    extra: "+ 3 months free"
  }
];

const perks = [
  ["⚡", "Instant Setup", "Get your vendor profile live in under 10 minutes"],
  ["📊", "Real Analytics", "Track orders, revenue and customer trends in real time"],
  ["🎨", "Brand Kit", "Professional branding materials created for your business"],
  ["🌍", "Network Access", "Join a community of 270+ food entrepreneurs"],
  ["💬", "Priority Support", "Dedicated support team available 7 days a week"],
  ["🔒", "Secure Platform", "Enterprise-grade security for your business data"],
];

const featureTags = [
  "Dashboard", "Analytics", "Branding", "Order Management",
  "Community", "Marketing", "Growth Tools", "Support",
  "Vendor Profile", "Sales Insights", "Campaign Tools", "Reports",
  "Dashboard", "Analytics", "Branding", "Order Management",
  "Community", "Marketing", "Growth Tools", "Support",
  "Vendor Profile", "Sales Insights", "Campaign Tools", "Reports",
];

export default function Customers() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div style={{backgroundColor: "#0b7d40"}}>

      {/* Hero */}
      <section style={{position: "relative", overflow: "hidden", padding: isMobile ? "100px 0 0" : "140px 0 0", background: "linear-gradient(160deg, #085c30 0%, #0b7d40 50%, #0d9651 100%)"}}>
        <div style={{position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px"}} />

        <div style={{maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px", position: "relative", zIndex: 1}}>
          <div style={{display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "32px" : "80px", alignItems: "center", paddingBottom: "64px"}}>

            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "999px", padding: "8px 18px", marginBottom: "28px"}}
              >
                <span style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#86efac", display: "inline-block"}} />
                <span style={{fontSize: "13px", color: "white", fontWeight: "500"}}>For Customers</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{fontFamily: "Syne, sans-serif", fontSize: isMobile ? "30px" : "58px", fontWeight: "900", color: "white", letterSpacing: isMobile ? "-1px" : "-2px", lineHeight: "1.05", marginBottom: "20px"}}
              >
                Services designed<br />for food<br />
                <span style={{background: "linear-gradient(90deg, white 0%, rgba(255,255,255,0.7) 30%, white 60%, rgba(255,255,255,0.5) 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "shimmer 4s linear infinite"}}>entrepreneurs</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                style={{fontSize: isMobile ? "15px" : "17px", color: "rgba(255,255,255,0.75)", lineHeight: "1.8", marginBottom: "32px", maxWidth: "420px"}}
              >
                Helping authentic Indian food businesses grow with tailored tools, branding, and operations support.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{display: "flex", gap: "12px", flexWrap: "wrap"}}
              >
                <motion.div
                  onClick={function() { navigate("/contact"); }}
                  style={{backgroundColor: "white", color: "#0b7d40", padding: isMobile ? "12px 28px" : "13px 32px", borderRadius: "999px", fontWeight: "700", fontSize: "14px", cursor: "pointer", fontFamily: "Syne, sans-serif"}}
                  whileHover={{ scale: 1.05, backgroundColor: "#86efac" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Started →
                </motion.div>
                <motion.div
                  onClick={function() { const el = document.getElementById("pricing"); if (el) el.scrollIntoView({behavior: "smooth"}); }}
                  style={{border: "2px solid rgba(255,255,255,0.35)", color: "white", padding: isMobile ? "12px 28px" : "13px 32px", borderRadius: "999px", fontWeight: "500", fontSize: "14px", cursor: "pointer"}}
                  whileHover={{ borderColor: "rgba(255,255,255,0.7)", backgroundColor: "rgba(255,255,255,0.08)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  See Pricing
                </motion.div>
              </motion.div>
            </div>

            {/* Right — stacked plan cards, desktop only */}
            {!isMobile && (
              <div style={{position: "relative", height: "380px"}}>
                {[
                  { name: "Starter", price: "₹499", top: "0px", left: "40px", rotate: "-3deg", zIndex: 1 },
                  { name: "Growth ★", price: "₹1499", top: "60px", left: "20px", rotate: "0deg", zIndex: 2 },
                  { name: "Pro", price: "₹2499", top: "30px", left: "0px", rotate: "3deg", zIndex: 1 },
                ].map(function(card, i) {
                  return (
                    <motion.div
                      key={card.name}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      style={{position: "absolute", width: "calc(33% - 8px)", left: "calc(" + (i * 33) + "% + 0px)", top: card.top, backgroundColor: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "20px", padding: "24px 20px", backdropFilter: "blur(10px)", zIndex: card.zIndex, rotate: card.rotate}}
                      whileHover={{ y: -8, zIndex: 10, rotate: "0deg", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <div style={{fontSize: "11px", color: "rgba(255,255,255,0.5)", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px"}}>{card.name}</div>
                      <div style={{fontSize: "36px", fontWeight: "900", fontFamily: "Syne, sans-serif", color: "white", lineHeight: 1}}>{card.price}</div>
                      <div style={{fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "4px"}}>/month</div>
                      <div style={{marginTop: "16px", display: "flex", flexDirection: "column", gap: "6px"}}>
                        {["Profile", "Dashboard", "Analytics"].map(function(f) {
                          return (
                            <div key={f} style={{display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgba(255,255,255,0.6)"}}>
                              <span style={{color: "#86efac", fontSize: "10px"}}>✓</span>{f}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                  style={{position: "absolute", bottom: "20px", right: "0px", backgroundColor: "white", color: "#0b7d40", padding: "12px 18px", borderRadius: "14px", boxShadow: "0 12px 32px rgba(0,0,0,0.25)", zIndex: 10}}
                >
                  <div style={{fontSize: "18px", fontWeight: "900", fontFamily: "Syne, sans-serif"}}>270+</div>
                  <div style={{fontSize: "11px", color: "#6b7280", fontWeight: "500"}}>Vendors growing</div>
                </motion.div>
              </div>
            )}
          </div>
        </div>

        {/* Scrolling tags strip */}
        <div style={{overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.1)"}}>
          <div style={{display: "flex", animation: "marquee 22s linear infinite", width: "max-content", padding: "12px 0"}}>
            {featureTags.map(function(tag, i) {
              return (
                <div key={i} style={{display: "flex", alignItems: "center", gap: "12px", paddingRight: "20px", whiteSpace: "nowrap"}}>
                  <span style={{backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)", padding: "5px 14px", borderRadius: "999px", fontSize: "12px", fontWeight: "500"}}>{tag}</span>
                  <span style={{color: "rgba(255,255,255,0.15)", fontSize: "10px"}}>•</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section style={{backgroundColor: "#0b7d40", padding: isMobile ? "48px 0" : "80px 0"}}>
        <div style={{maxWidth: "1180px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px"}}>
          <div style={{display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr", gap: "12px", marginBottom: isMobile ? "48px" : "100px"}}>
            {perks.map(function(p, i) {
              return (
                <motion.div
                  key={p[1]}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  style={{backgroundColor: "rgba(0,0,0,0.18)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "16px", padding: isMobile ? "18px 14px" : "28px", display: "flex", gap: "12px", alignItems: "flex-start"}}
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.28)", borderColor: "rgba(255,255,255,0.25)", y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div style={{fontSize: isMobile ? "22px" : "28px", flexShrink: 0}}>{p[0]}</div>
                  <div>
                    <h4 style={{fontFamily: "Syne, sans-serif", fontSize: isMobile ? "13px" : "16px", fontWeight: "700", color: "white", marginBottom: "4px"}}>{p[1]}</h4>
                    {!isMobile && <p style={{fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: "1.6", margin: 0}}>{p[2]}</p>}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pricing */}
          <div id="pricing">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{fontFamily: "Syne, sans-serif", fontSize: isMobile ? "30px" : "44px", fontWeight: "900", color: "white", letterSpacing: "-1px", marginBottom: "12px", textAlign: "center"}}
            >
              Simple pricing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{textAlign: "center", color: "rgba(255,255,255,0.6)", fontSize: "15px", marginBottom: "40px"}}
            >
              No hidden fees. Cancel anytime.
            </motion.p>

            <div style={{display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: "20px", alignItems: "stretch"}}>
              {plans.map(function(plan, i) {
                const hl = plan.highlight;
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: isMobile ? 0 : i * 0.1 }}
                    style={{background: hl ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.18)", borderRadius: "28px", padding: isMobile ? "28px 24px" : "36px 32px", border: hl ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.12)", position: "relative", display: "flex", flexDirection: "column", boxShadow: hl ? "0 32px 64px rgba(0,0,0,0.3)" : "none"}}
                    whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.3)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    {hl && (
                      <div style={{position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", backgroundColor: "white", color: "#0b7d40", padding: "5px 20px", borderRadius: "999px", fontSize: "11px", fontWeight: "800", whiteSpace: "nowrap"}}>
                        ★ MOST POPULAR
                      </div>
                    )}
                    <div style={{display: "inline-block", backgroundColor: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: "999px", fontSize: "11px", fontWeight: "700", marginBottom: "16px"}}>{plan.discount}</div>
                    <h3 style={{fontFamily: "Syne, sans-serif", fontSize: "20px", fontWeight: "800", color: "white", marginBottom: "6px"}}>{plan.name}</h3>
                    <p style={{fontSize: "13px", color: "rgba(255,255,255,0.6)", marginBottom: "20px", lineHeight: "1.6"}}>{plan.tagline}</p>
                    <div style={{marginBottom: "4px"}}>
                      <span style={{fontSize: "13px", color: "rgba(255,255,255,0.35)", textDecoration: "line-through"}}>₹{plan.original}</span>
                    </div>
                    <div style={{display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "6px"}}>
                      <span style={{fontSize: isMobile ? "44px" : "52px", fontWeight: "900", fontFamily: "Syne, sans-serif", lineHeight: 1, color: "white"}}>₹{plan.price}</span>
                      <span style={{fontSize: "14px", color: "rgba(255,255,255,0.45)", marginLeft: "2px"}}>/mo</span>
                    </div>
                    <div style={{fontSize: "13px", color: "#86efac", marginBottom: "24px", fontWeight: "600"}}>{plan.extra}</div>
                    <motion.div
                      onClick={function() { navigate("/contact"); }}
                      style={{textAlign: "center", backgroundColor: hl ? "white" : "rgba(255,255,255,0.1)", color: hl ? "#0b7d40" : "white", border: hl ? "none" : "1px solid rgba(255,255,255,0.2)", padding: "13px", borderRadius: "14px", fontWeight: "700", fontSize: "15px", cursor: "pointer", marginBottom: "16px", fontFamily: "Syne, sans-serif"}}
                      whileHover={{ scale: 1.02, backgroundColor: hl ? "#86efac" : "rgba(255,255,255,0.18)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started →
                    </motion.div>
                    <p style={{fontSize: "11px", color: "rgba(255,255,255,0.3)", marginBottom: "20px", lineHeight: "1.6"}}>{plan.billing}</p>
                    <div style={{borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px", display: "flex", flexDirection: "column", gap: "10px", marginTop: "auto"}}>
                      {plan.features.map(function(f) {
                        return (
                          <div key={f} style={{display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px"}}>
                            <span style={{color: "#86efac", fontWeight: "700", flexShrink: 0, marginTop: "1px"}}>✓</span>
                            <span style={{color: "rgba(255,255,255,0.8)", lineHeight: "1.5"}}>{f}</span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}