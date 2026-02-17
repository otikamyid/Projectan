import { Bot, Zap, Shield } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-green-50 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-700">AI Customer Service 24/7</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ubah Alur Penjualan dan Layanan Pelanggan dengan{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Teknologi AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Cukup Rp 3.000-an/hari setara harga Es Teh 🤭
          </p>

          {/* Features pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-gray-100">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium">Respon Cepat 24/7</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-gray-100">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Bahasa Natural</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-gray-100">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Aman & Handal</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 py-4">
              Konsultasi Gratis
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-4">
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Dipercaya oleh berbagai bisnis</p>
            <div className="flex justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gray-200"></div>
                <span className="text-sm font-medium">Company 1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gray-200"></div>
                <span className="text-sm font-medium">Company 2</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gray-200"></div>
                <span className="text-sm font-medium">Company 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
