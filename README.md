# NESTA — Modern Responsive Furniture Website UI

A modern, editorial, and fully responsive furniture shopping platform built with **React 19**, **Vite**, **Tailwind CSS**, and **React Icons**.

Engineered with an intelligent **dual-responsive layout system**:
- **On Mobile Devices (320px – 640px)**: Retains the exact mobile app-like interface with compact touch targets, sticky header with circular controls, 2-column mobile card grid, mobile takeover product details, and a fixed bottom mobile navigation bar.
- **On Tablets (iPad), Laptops & Desktops (`md:`, `lg:`, `xl:`)**: Seamlessly transforms into a spacious, full-width, multi-column editorial furniture website with full desktop navigation, 2-column split hero, 3-column product grid, 4-column features, 2-column about and contact sections, and a multi-column footer.

---

## 🎨 Color Palette & Aesthetic

| Role | Hex Value | Application |
|---|---|---|
| **Main Background** | `#F5F1EA` | Body canvas and warm card backgrounds |
| **Secondary Background** | `#ECE6DC` | Hero display cards, about section |
| **Pure White** | `#FFFEFB` | Navigation sheets, modals, badges |
| **Primary Text** | `#1D1D1B` | Editorial headlines, bold product titles |
| **Secondary Text** | `#77736D` | Subtitles, product categories |
| **Muted Text** | `#A19B92` | Micro-labels, dimensions |
| **Warm Yellow Accent** | `#E9BD61` | Ratings, indicator stars |
| **Warm Mustard** | `#C99235` | Saved wishlist hearts |
| **Olive Accent** | `#74765B` | Editorial accents & badges |
| **Subtle Borders** | `#E5DED4` | Card borders, dividers |
| **Minimal Black CTA** | `#171715` | Action buttons, pills, active tabs |
| **Cards** | `#FCFAF6` | Product cards, feature boxes |

---

## 🖥️ Layout Responsiveness Breakdown

| Section | Mobile Layout (< 768px) | iPad, Laptop & Desktop Layout (md+) |
|---|---|---|
| **Header** | Logo + circular buttons (Search, Bag, Hamburger) + slide drawer | Logo + centered nav links + Search, Wishlist, Bag + "Book Styling" CTA |
| **Hero** | Editorial heading + CTA + stacked hero lounge chair card | 2-column split: Left copy & CTAs + Right large lounge chair showcase |
| **Category Filter** | Horizontally scrollable pill buttons | Wrapped spacious pill buttons with product count indicator |
| **Product Grid** | 2-column mobile grid with quick add buttons | 3-column spacious grid with hover zoom & lift effects |
| **Product Detail** | Full mobile takeover with sticky bottom buy bar | 2-column editorial split: Huge gallery on left, specs & buy CTAs on right |
| **Features** | 2x2 grid of 4 living principles | 4-column single row layout with line icons |
| **About** | Stacked card with text, image, and 3 stats | 2-column split: Narrative & statistics on left, large interior photo on right |
| **Testimonials** | Horizontally swipeable review carousel | 3-column side-by-side grid showing all verified client reviews |
| **Contact** | Single-column form with real-time validation | 2-column split: Studio hours & hotline on left, validated form on right |
| **Footer** | Stacked brand and links | 4-column comprehensive footer with Atelier information & social links |
| **Bottom Navigation** | Fixed bottom navigation bar (`Home`, `Explore`, `Saved`, `Cart`, `Profile`) | Automatically hidden (`md:hidden`) in favor of desktop header navigation |

---

## 🛋️ 6 Core Curated Products

1. **Solace Lounge Chair** — ₹24,999 · 4.8 ★
2. **Cloud Recliner** — ₹32,499 · 4.9 ★
3. **Noma Coffee Table** — ₹12,999 · 4.7 ★
4. **Arlo Accent Chair** — ₹18,499 · 4.8 ★
5. **Luna Floor Lamp** — ₹8,999 · 4.6 ★
6. **Haven Sofa** — ₹54,999 · 4.9 ★

---

## ⚡ Running Locally

```bash
# Start Vite development server
npm run dev

# Run production build check
npm run build
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.
