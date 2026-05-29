import { useNavigate } from "react-router-dom";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

const NAV_LINKS = [["Home", "/"], ["About", "/about"], ["Contact", "/contact"]];
const SERVICE_LINKS = [["For Customers", "/services/customers"], ["For Operators", "/services/operators"]];
const SOCIALS = [["instagram", InstagramIcon], ["facebook", FacebookIcon], ["linkedin", LinkedInIcon]];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{backgroundColor: "#0a1a0f", color: "white", padding: "64px 0 0"}}>
      <div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 48px"}}>
        <div style={{display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "56px"}}>

          <div>
            <div style={{marginBottom: "20px"}}>
              <div style={{fontFamily: "Syne, sans-serif", fontSize: "30px", fontWeight: "900", color: "white", letterSpacing: "-1px"}}>hoose</div>
              <div style={{color: "#4ade80", fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", marginTop: "-2px"}}>India's Biggest Food Network</div>
            </div>
            <p style={{fontSize: "14px", color: "#6b7280", lineHeight: "1.8", maxWidth: "260px", marginBottom: "28px"}}>
              Helping local food businesses scale through technology, branding, community, and smarter operations.
            </p>
            <div style={{display: "flex", gap: "10px"}}>
              {SOCIALS.map(function(s) {
                const key = s[0];
                const Icon = s[1];
                return (
                  <div
                    key={key}
                    style={{width: "40px", height: "40px", backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", cursor: "pointer", transition: "all 0.2s", border: "1px solid rgba(255,255,255,0.05)"}}
                    onMouseEnter={function(e) { e.currentTarget.style.backgroundColor = "rgba(74,222,128,0.15)"; e.currentTarget.style.color = "#4ade80"; }}
                    onMouseLeave={function(e) { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "#9ca3af"; }}
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h4 style={{fontFamily: "Syne, sans-serif", fontSize: "12px", fontWeight: "700", color: "#4ade80", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "2px"}}>Navigation</h4>
            {NAV_LINKS.map(function(item) {
              const label = item[0];
              const path = item[1];
              return (
                <div key={label} onClick={function() { navigate(path); }} style={{color: "#6b7280", fontSize: "14px", marginBottom: "12px", cursor: "pointer", transition: "color 0.2s"}} onMouseEnter={function(e) { e.currentTarget.style.color = "white"; }} onMouseLeave={function(e) { e.currentTarget.style.color = "#6b7280"; }}>
                  {label}
                </div>
              );
            })}
          </div>

          <div>
            <h4 style={{fontFamily: "Syne, sans-serif", fontSize: "12px", fontWeight: "700", color: "#4ade80", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "2px"}}>Services</h4>
            {SERVICE_LINKS.map(function(item) {
              const label = item[0];
              const path = item[1];
              return (
                <div key={label} onClick={function() { navigate(path); }} style={{color: "#6b7280", fontSize: "14px", marginBottom: "12px", cursor: "pointer", transition: "color 0.2s"}} onMouseEnter={function(e) { e.currentTarget.style.color = "white"; }} onMouseLeave={function(e) { e.currentTarget.style.color = "#6b7280"; }}>
                  {label}
                </div>
              );
            })}
          </div>

          <div>
            <h4 style={{fontFamily: "Syne, sans-serif", fontSize: "12px", fontWeight: "700", color: "#4ade80", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "2px"}}>Contact</h4>
            <p style={{color: "#6b7280", fontSize: "14px", marginBottom: "10px", lineHeight: "1.6"}}>+91 9137719788</p>
            <p style={{color: "#6b7280", fontSize: "14px", marginBottom: "10px", lineHeight: "1.6"}}>office@hoose.in</p>
            <p style={{color: "#6b7280", fontSize: "14px", lineHeight: "1.6"}}>Mumbai, Maharashtra</p>
          </div>
        </div>

        <div style={{borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <p style={{color: "#374151", fontSize: "13px"}}>© 2026 Hoose Pvt Ltd. All rights reserved.</p>
          <p style={{color: "#4ade80", fontSize: "13px", fontWeight: "600", letterSpacing: "0.5px"}}>Join. Launch. Grow. Expand.</p>
        </div>
      </div>
    </footer>
  );
}