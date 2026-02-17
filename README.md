# OTIKA Landing Page

Landing page modern untuk **OTIKA** - Jasa Integrasi Customer Service Berbasis AI dengan WhatsApp. Dibuat dengan Next.js 15, TypeScript, dan Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwind-css)

## 🌐 Live Demo

Coming soon on Vercel!

## ✨ Fitur

- **Responsive Design** - Tampilan optimal di mobile, tablet, dan desktop
- **Smooth Animations** - Animasi logo yang menarik di section "Trusted By"
- **TypeScript** - Type safety untuk development experience yang lebih baik
- **Modern UI** - Desain minimalis dengan font "Outfit"
- **SEO Friendly** - Struktur HTML yang optimasi untuk search engine

## 🎨 Sections

| Section | Deskripsi |
|---------|-----------|
| **Hero** | Headline menarik dengan CTA buttons |
| **Features** | 6 fitur utama OTIKA |
| **Services** | AI Chatbots & CRM Inbox |
| **Benefits** | Keuntungan menggunakan AI WhatsApp |
| **Industries** | 4 industri yang cocok menggunakan OTIKA |
| **Trusted By** ⭐ | Logo animation (baris 1 kiri, baris 2 kanan) |
| **Pricing** | 3 paket harga (SMART, GENIUS, Custom) |
| **FAQ** | Accordion FAQ interaktif |
| **CTA** | Final call-to-action |

## 🚀 Tech Stack

| Technology | Description |
|------------|-------------|
| **Next.js 15** | React framework dengan App Router |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first CSS framework |
| **Lucide React** | Icon library |
| **Google Fonts** | "Outfit" font family |

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/otikamyid/Projectan.git

# Masuk ke folder project
cd Projectan

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasil.

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
Projectan/
├── app/
│   ├── layout.tsx          # Root layout dengan font configuration
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── hero.tsx            # Hero section
│   ├── features.tsx        # Features section
│   ├── services.tsx        # Services section
│   ├── benefits.tsx        # Benefits section
│   ├── industries.tsx      # Industries section
│   ├── trusted-by.tsx      # Logo animation section
│   ├── pricing.tsx         # Pricing section
│   ├── faq.tsx             # FAQ section
│   ├── cta.tsx             # CTA section
│   └── ui/
│       ├── button.tsx      # Button component
│       └── card.tsx        # Card components
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

## 🎨 Key Features Implementation

### Logo Animation (Trusted By Section)

```css
/* Baris pertama - scroll ke kiri */
.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
}

/* Baris kedua - scroll ke kanan */
.animate-scroll-right {
  animation: scroll-right 30s linear infinite;
}
```

### Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔗 Links

- [Live Demo](#) (Coming soon)
- [OTIKA Website](https://otika.biz.id)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Created with ❤️ for OTIKA

---

Made with Next.js, TypeScript, and Tailwind CSS
