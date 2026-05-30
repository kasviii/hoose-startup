import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

export default function Customers() {
  const navigate = useNavigate();

  return (
    <div style={{backgroundColor: "#0b7d40"}}>

      {/* Hero */}
      <section style={{position: "relative", overflow: "hidden", padding: "160px 0 80px"}}>
        <div style={{position: "absolute", inset: 0}}>
          <div style={{position: "absolute", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(11,125,64,0.4) 0%, transparent 70%)", top: "-150px", right: "-100px", animation: "orbMove1 12s ease-in-out infinite"}} />
          <div style={{position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%)", bottom: "0", left: "5%", animation: "orbMove2 15s ease-in-out infinite"}} />
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
            <span style={{fontSize: "13px", color: "#86efac", fontWeight: "500"}}>For Customers</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{fontFamily: "Syne, sans-serif", fontSize: "64px", fontWeight: "900", color: "white", letterSpacing: "-2px", lineHeight: "1.05", marginBottom: "24px"}}
          >
            Services designed for<br />
            <span className="shimmer-text">food entrepreneurs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: "1.8"}}
          >
            Helping authentic Indian food businesses grow with tailored tools, branding, and operations support.
          </motion.p>
        </div>
      </section>

      {/* Perks */}
      <section style={{backgroundColor: "#0b7d40", padding: "80px 0"}}>
        <div style={{maxWidth: "1180px", margin: "0 auto", padding: "0 48px"}}>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginBottom: "100px"}}>
            {perks.map(function(p, i) {
              return (
                <motion.div
                  key={p[1]}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  style={{backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "28px", display: "flex", gap: "16px", alignItems: "flex-start"}}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(74,222,128,0.2)" }}
                >
                  <div style={{fontSize: "28px", flexShrink: 0}}>{p[0]}</div>
                  <div>
                    <h4 style={{fontFamily: "Syne, sans-serif", fontSize: "16px", fontWeight: "700", color: "white", marginBottom: "6px"}}>{p[1]}</h4>
                    <p style={{fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: "1.6", margin: 0}}>{p[2]}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pricing */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{fontFamily: "Syne, sans-serif", fontSize: "44px", fontWeight: "900", color: "white", letterSpacing: "-1.5px", marginBottom: "16px", textAlign: "center"}}
          >
            Simple pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: "16px", marginBottom: "56px"}}
          >
            No hidden fees. Cancel anytime.
          </motion.p>

          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", alignItems: "stretch"}}>
            {plans.map(function(plan, i) {
              const hl = plan.highlight;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  style={{
                    background: hl ? "linear-gradient(160deg, #0b3d20 0%, #0b7d40 100%)" : "rgba(255,255,255,0.04)",
                    borderRadius: "28px",
                    padding: "36px 32px",
                    border: hl ? "1px solid rgba(74,222,128,0.3)" : "1px solid rgba(255,255,255,0.07)",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: hl ? "0 32px 64px rgba(11,125,64,0.3)" : "none"
                  }}
                  whileHover={{ y: -6, borderColor: hl ? "rgba(74,222,128,0.5)" : "rgba(255,255,255,0.12)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {hl && (
                    <div style={{position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #4ade80, #0b7d40)", color: "white", padding: "5px 20px", borderRadius: "999px", fontSize: "11px", fontWeight: "800", whiteSpace: "nowrap", letterSpacing: "0.5px"}}>
                      ★ MOST POPULAR
                    </div>
                  )}

                  <div style={{display: "inline-block", backgroundColor: hl ? "rgba(255,255,255,0.15)" : "rgba(74,222,128,0.1)", color: hl ? "white" : "#4ade80", border: hl ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(74,222,128,0.2)", padding: "4px 12px", borderRadius: "999px", fontSize: "11px", fontWeight: "700", marginBottom: "20px", letterSpacing: "0.5px"}}>
                    {plan.discount}
                  </div>

                  <h3 style={{fontFamily: "Syne, sans-serif", fontSize: "22px", fontWeight: "800", color: "white", marginBottom: "8px"}}>{plan.name}</h3>
                  <p style={{fontSize: "13px", color: "rgba(255,255,255,0.55)", marginBottom: "24px", lineHeight: "1.6"}}>{plan.tagline}</p>

                  <div style={{marginBottom: "4px"}}>
                    <span style={{fontSize: "13px", color: "rgba(255,255,255,0.3)", textDecoration: "line-through"}}>₹{plan.original}</span>
                  </div>
                  <div style={{display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "6px"}}>
                    <span style={{fontSize: "52px", fontWeight: "900", fontFamily: "Syne, sans-serif", lineHeight: 1, color: "white"}}>₹{plan.price}</span>
                    <span style={{fontSize: "15px", color: "rgba(255,255,255,0.4)", marginLeft: "2px"}}>/mo</span>
                  </div>
                  <div style={{fontSize: "13px", color: "#4ade80", marginBottom: "28px", fontWeight: "600"}}>{plan.extra}</div>

                  <motion.div
                    onClick={function() { navigate("/contact"); }}
                    style={{textAlign: "center", background: hl ? "white" : "rgba(74,222,128,0.1)", color: hl ? "#0b7d40" : "white", border: hl ? "none" : "1px solid rgba(74,222,128,0.3)", padding: "14px", borderRadius: "14px", fontWeight: "700", fontSize: "15px", cursor: "pointer", marginBottom: "16px", fontFamily: "Syne, sans-serif"}}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started →
                  </motion.div>

                  <p style={{fontSize: "11px", color: "rgba(255,255,255,0.3)", marginBottom: "24px", lineHeight: "1.6"}}>{plan.billing}</p>

                  <div style={{borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "12px", marginTop: "auto"}}>
                    {plan.features.map(function(f) {
                      return (
                        <div key={f} style={{display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px"}}>
                          <span style={{color: "#4ade80", fontWeight: "700", flexShrink: 0, marginTop: "1px"}}>✓</span>
                          <span style={{color: "rgba(255,255,255,0.75)", lineHeight: "1.5"}}>{f}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}