# OTIKA Landing Page - Project Documentation

## Project Overview
Landing page modern untuk **OTIKA** - Jasa Integrasi Customer Service Berbasis AI dengan WhatsApp dan berbagai aplikasi pesan singkat.

## Tech Stack

| Technology | Version/Description |
|------------|---------------------|
| **Framework** | Next.js 15+ (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Font** | Google Fonts - "Outfit" |
| **Icons** | Lucide React |

## Design System

### Color Palette
```css
/* Primary */
--primary: #4F46E5      /* Indigo 600 */
--primary-dark: #4338CA /* Indigo 700 */
--primary-light: #818CF8 /* Indigo 400 */

/* Accent */
--accent: #22C55E       /* Green 500 */

/* Neutral */
--bg-primary: #FFFFFF
--bg-secondary: #F9FAFB
--text-primary: #111827
--text-secondary: #6B7280
```

### Typography
- **Font Family**: Outfit (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

## Project Structure

```
Projectan/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & Tailwind directives
├── components/
│   ├── hero.tsx            # Hero section with CTA
│   ├── features.tsx        # 6 key features grid
│   ├── services.tsx        # Services (AI Chatbots, CRM)
│   ├── benefits.tsx        # Benefits of using AI WhatsApp
│   ├── industries.tsx      # Industries served (4 cards)
│   ├── trusted-by.tsx      # ⭐ Logo animation section
│   ├── pricing.tsx         # Pricing plans (3 tiers)
│   ├── faq.tsx             # FAQ accordion
│   ├── cta.tsx             # Final CTA section
│   └── ui/
│       ├── button.tsx      # Reusable button component
│       └── card.tsx        # Reusable card components
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies
```

## Sections

### 1. Hero Section
- Headline: "Ubah Alur Penjualan dan Layanan Pelanggan dengan Teknologi AI"
- Subheadline: "Cukup Rp 3000-an/hari setara harga Es Teh"
- CTA Buttons
- Trust indicators

### 2. Features Section
6 key features:
- Respon Cepat 24/7
- Bahasa Natural
- Konversi Tinggi
- Integrasi Mudah
- Aman & Handal
- Hemat Biaya

### 3. Services Section
- Automated AI Chatbots
- CRM Inbox
- Mission statement card

### 4. Benefits Section
6 benefits:
- Respon Otomatis 24/7
- Filter Leads Berkualitas
- Follow-up Otomatis
- Hemat Biaya Admin
- Closing Lebih Konsisten
- Data Customer Aman

### 5. Industries Section
4 industries:
- Klinik & Kesehatan
- UMKM & Retail
- Edukasi & Kursus
- Jasa & Service

### 6. Trusted By Section ⭐ (Key Feature)
**Animation:**
- Row 1: Scrolls LEFT (`animate-scroll-left`)
- Row 2: Scrolls RIGHT (`animate-scroll-right`)
- Infinite loop animation
- Pauses on hover

### 7. Pricing Section
3 pricing tiers:
- **Paket SMART** - Rp 99k/bulan (Basic)
- **Paket GENIUS** - Rp 199k/bulan (Popular/Pro)
- **Custom Solution** - Enterprise

### 8. FAQ Section
Accordion-style FAQ with common questions

### 9. CTA Section
Final call-to-action with gradient background

## Key Features

### Logo Animation Implementation
```css
/* In tailwind.config.ts */
animation: {
  'scroll-left': 'scroll-left 30s linear infinite',
  'scroll-right': 'scroll-right 30s linear infinite',
}

/* Keyframes */
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scroll-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
```

## Commands

### Development
```bash
npm run dev
```
Starts development server on http://localhost:3000

### Build
```bash
npm run build
```
Creates optimized production build

### Production
```bash
npm start
```
Starts production server

### Lint
```bash
npm run lint
```
Runs ESLint

## Component Guidelines

### Button Component
```tsx
<Button variant="primary" size="lg">
  Button Text
</Button>
```

### Card Component
```tsx
<Card variant="elevated">
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Notes
- All components use TypeScript
- Mobile-first responsive design
- Accessibility considered (keyboard nav, screen readers)
- SEO optimized with proper semantic HTML
