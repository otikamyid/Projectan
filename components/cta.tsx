import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-indigo-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Mulai Sekarang</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Siap Mengubah WhatsApp Anda Jadi Mesin Penjualan?
          </h2>

          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Jangan biarkan leads terus bocor. Mulai percakapan dengan tim kami dan temukan solusi AI yang tepat untuk bisnis Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-10 py-4 shadow-xl">
              Konsultasi Gratis Sekarang
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 text-lg px-10 py-4"
            >
              Chat Sekarang
            </Button>
          </div>

          <p className="text-indigo-200 text-sm mt-6">
            Konsultasi gratis, tanpa komitmen
          </p>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
    </section>
  );
}
