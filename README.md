# Hoose — India's Biggest Food Network

Official website for Hoose, a platform connecting local food vendors with technology, branding, and community support.

Live: https://hoose-fv7fxaclo-kasviiis-projects.vercel.app/

---

## Tech Stack

- React + Vite — frontend framework and build tool
- Framer Motion — animations and page transitions  
- Tailwind CSS — utility styling
- React Router DOM — client-side routing

---

## Pages

- / — Home
- /about — About and team
- /services/customers — Pricing and services
- /services/operators — Operator portal (coming soon)
- /contact — Contact form

---

## Project Structure

src/
  components/    Navbar, Footer, WhatsApp
  pages/         Home, About, Customers, Operators, Contact
  hooks/         useIsMobile.js
  index.css      Animations and global styles
public/          Logo and brand assets

---

## Local Development

npm install
npm run dev

Opens at http://localhost:5173

---

## Build and Deploy

npm run build

Deploys automatically to Vercel on every push to main branch.

---

## Brand Guidelines

- Primary color: #0b7d40
- Headings: Syne
- Logo: Josefin Sans Bold  
- Body: Instrument Sans
- Cards use dark overlays rgba(0,0,0,0.18) on green backgrounds

---

## Notes

- Vite uses oxc parser — avoid dot notation in JSX keys, always destructure object properties first
- Mobile responsive via useIsMobile hook (breakpoint 768px)
- All pages hide right column image/cards on mobile, stack to single column grid
