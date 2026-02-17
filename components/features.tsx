import { Clock, MessageCircle, TrendingUp, Plug, ShieldCheck, PiggyBank } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const features = [
  {
    icon: Clock,
    title: 'Respon Cepat 24/7',
    description: 'AI Chatbot yang merespon pelanggan Anda secara instan kapanpun, bahkan di luar jam kerja.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: MessageCircle,
    title: 'Bahasa Natural',
    description: 'Teknologi AI canggih yang berkomunikasi dengan bahasa natural, tidak kaku seperti chatbot biasa.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: TrendingUp,
    title: 'Konversi Tinggi',
    description: 'Dirancang untuk membantu proses penjualan dari pemberian informasi hingga closing transaksi.',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Plug,
    title: 'Integrasi Mudah',
    description: 'Pasang pada WhatsApp biasa maupun WhatsApp Bisnis dengan cepat dan langsung bisa digunakan.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    icon: ShieldCheck,
    title: 'Aman & Handal',
    description: 'Keamanan data terjamin dengan infrastruktur yang stabil dan handal untuk keperluan bisnis.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
  },
  {
    icon: PiggyBank,
    title: 'Hemat Biaya',
    description: 'Biaya jauh lebih murah dibandingkan mempekerjakan CS manusia - mulai dari Rp 3.000/hari.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
  },
];

export function Features() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih <span className="text-primary">OTIKA</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solusi AI Customer Service yang dirancang untuk meningkatkan penjualan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} variant="elevated" className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
