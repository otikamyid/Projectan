'use client';

import { Check, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardFooter } from './ui/card';
import { Button } from './ui/button';

const plans = [
  {
    name: 'Paket SMART',
    price: 'Rp 99k',
    period: '/bulan',
    description: 'Paket basic untuk memulai AI Customer Service',
    popular: false,
    features: [
      'Schedule/Penjadwalan AI On / Off',
      'Kondisi pengendali AI Bot On / Off',
      'Memanggil agent/CS manusia ketika membutuhkan support',
      'Auto Off ketika intervensi manusia',
      'Daya Ingat',
      '200 pertanyaan/hari',
      '24 Jam NonStop',
    ],
    highlight: false,
  },
  {
    name: 'Paket GENIUS',
    price: 'Rp 199k',
    period: '/bulan',
    description: 'Paket lengkap dengan fitur canggih',
    popular: true,
    features: [
      'Semua Fitur SMART',
      'Auto Off ketika intervensi CS manusia',
      'Kirim Gambar katalog Produk/Jasa',
      'Membaca & Mempelajari Data PDF, Google Doc, Spreadsheet',
      'Daya Ingat & konteks',
      'Bisa Browsing Google',
      'Hitung ongkir langsung oleh AI*',
      'Bisa lacak pengiriman langsung oleh AI*',
      'Analisis gambar',
      'Integrasi Woocommerce WordPress',
      'Boleh request 1 Fitur Tambahan Custom',
    ],
    highlight: true,
  },
  {
    name: 'Custom Solution',
    price: 'Custom',
    period: '',
    description: 'Untuk kebutuhan bisnis yang kompleks',
    popular: false,
    features: [
      'AI Agent yang super personal',
      'Custom serumit apapun akan dilaksanakan',
      'Konsultasi gratis',
      'Dedicated support team',
      'SLA guarantee',
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Paket Layanan <span className="text-primary">OTIKA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Paket Chatbot yang membuat CS Anda super fast response tanpa ngeluh dan tanpa menuntut naik gaji.
            <br />
            <span className="text-sm text-gray-500">Jauh di bawah UMR daerah manapun</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              variant={plan.highlight ? 'elevated' : 'bordered'}
              className={`relative ${plan.highlight ? 'border-primary border-2 shadow-2xl shadow-primary/20 scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-white" />
                    POPULER
                  </div>
                </div>
              )}

              <CardHeader className="text-center pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-3">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  variant={plan.highlight ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.name === 'Custom Solution' ? 'Konsultasi Dulu' : 'Pilih Paket'}
                  {!plan.name.includes('Custom') && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          *Fitur integrasi ongkir & lacak pengiriman memerlukan setup tambahan
        </p>
      </div>
    </section>
  );
}
