import { Heart, ShoppingCart, GraduationCap, Wrench } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const industries = [
  {
    icon: Heart,
    title: 'Klinik & Kesehatan',
    items: [
      'Jawab pertanyaan layanan & jadwal praktik',
      'Booking appointment otomatis',
      'Reminder jadwal kontrol pasien',
      'Informasi dokter & spesialisasi',
    ],
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: ShoppingCart,
    title: 'UMKM & Retail',
    items: [
      'Katalog produk interaktif',
      'Cek stok & harga real-time',
      'Proses pesanan hingga konfirmasi',
      'Update status pengiriman',
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: GraduationCap,
    title: 'Edukasi & Kursus',
    items: [
      'Informasi program & jadwal kelas',
      'Pendaftaran siswa baru',
      'Reminder pembayaran SPP',
      'Konsultasi jurusan/program',
    ],
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Wrench,
    title: 'Jasa & Service',
    items: [
      'Estimasi harga layanan',
      'Booking jadwal service',
      'Update progress pekerjaan',
      'Follow-up kepuasan pelanggan',
    ],
    color: 'from-emerald-500 to-green-600',
  },
];

export function Industries() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cocok untuk <span className="text-primary">Berbagai Industri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI custom yang disesuaikan dengan kebutuhan spesifik bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <Card key={index} variant="elevated" className="group hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{industry.title}</h3>
                <ul className="space-y-3">
                  {industry.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
