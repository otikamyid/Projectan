import { Bot, Inbox } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';

const services = [
  {
    icon: Bot,
    title: 'Automated AI Chatbots',
    description: 'Layanan chat untuk membantu proses penjualan dan layanan pelanggan berbasis AI yang bahasanya nggak kaku seperti bot!',
    features: ['Berkomunikasi seperti manusia', 'Mampu mengirim gambar katalog produk', 'Bekerja 24/7 tanpa lelah'],
  },
  {
    icon: Inbox,
    title: 'CRM Inbox',
    description: 'Layanan CRM Integrasi berbagai platform chat sosmed Anda untuk pengelolaan pesan yang lebih efisien.',
    features: ['Kelola semua pesan dari berbagai platform', 'Tampilan antarmuka yang mudah digunakan', 'Analisis percakapan dan performa'],
  },
];

export function Services() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-primary">OTIKA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Membantu Alur Penjualan dan Layanan Pelanggan sehingga pekerjaan CS Anda jadi ringan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} variant="bordered" className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-50 to-green-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              &quot;Bisnis Anda jalan, CS Anda bahagia 🤭&quot;
            </p>
            <p className="text-gray-600 mt-4">
              Kita memahami tidak sepenuhnya bisnis itu semua di-handle oleh AI, Anda juga tetap butuh tenaga manusia untuk handle bisnis Anda. AI tidak menggantikan manusia, tapi membantu pekerjaan manusia dalam konteks ini meringankan beban CS dari sisi <strong>Waktu & Tenaga</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
