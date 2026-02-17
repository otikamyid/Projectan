import { Clock, Users, RefreshCw, DollarSign, TrendingUp, Lock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const benefits = [
  {
    icon: Clock,
    title: 'Respon Otomatis 24/7',
    description: 'Tidak ada lagi customer yang menunggu. AI aktif siang malam, weekend, bahkan hari libur.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Filter Leads Berkualitas',
    description: 'AI membantu menyaring mana leads yang serius beli dan mana yang hanya browsing.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: RefreshCw,
    title: 'Follow-up Otomatis',
    description: 'Tidak ada leads yang terlewat. AI mengingatkan dan follow-up secara konsisten.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: DollarSign,
    title: 'Hemat Biaya Admin',
    description: 'Kurangi beban operasional. Satu AI bisa handle ribuan chat tanpa capek.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: TrendingUp,
    title: 'Closing Lebih Konsisten',
    description: 'Dengan alur yang terstruktur, conversion rate meningkat signifikan.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Lock,
    title: 'Data Customer Aman',
    description: 'Semua percakapan dan data customer tersimpan dengan aman dan terenkripsi.',
    color: 'from-pink-500 to-pink-600',
  },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Keuntungan Menggunakan <span className="text-primary">AI WhatsApp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fokus pada yang penting: mengembangkan bisnis. Biarkan AI handle yang repetitif.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`}></div>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-lg`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
