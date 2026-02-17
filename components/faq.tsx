'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const faqs = [
  {
    question: 'Apakah AI OTIKA bisa bekerja 24 jam nonstop?',
    answer: 'Ya, AI OTIKA dirancang untuk bekerja 24/7 tanpa henti. Anda bisa set jadwal kapan AI aktif dan non-aktif sesuai kebutuhan bisnis Anda.',
  },
  {
    question: 'Apakah AI bisa mengirim gambar katalog produk?',
    answer: 'Untuk Paket GENIUS dan Custom Solution, AI dapat mengirim gambar katalog produk atau jasa kepada pelanggan secara otomatis.',
  },
  {
    question: 'Bagaimana jika ada pertanyaan yang tidak bisa dijawab AI?',
    answer: 'AI OTIKA memiliki fitur untuk memanggil CS manusia (handover) ketika menghadapi pertanyaan yang memerlukan penanganan khusus. CS akan langsung dihubungi untuk take over percakapan.',
  },
  {
    question: 'Apakah data pelanggan aman?',
    answer: 'Ya, semua data pelanggan dan percakapan tersimpan dengan aman dan terenkripsi. Kami memprioritaskan keamanan data sebagai komitmen utama kami.',
  },
  {
    question: 'Berapa lama waktu setup AI?',
    answer: 'Setup dasar bisa dilakukan dalam 1-2 hari kerja. Untuk custom solution dengan fitur lebih kompleks, waktu setup disesuaikan dengan tingkat kompleksitas kebutuhan Anda.',
  },
  {
    question: 'Apakah bisa integrasi dengan platform lain selain WhatsApp?',
    answer: 'Saat ini kami sedang mengembangkan integrasi ke berbagai platform seperti Messenger, Instagram, Telegram, dan Email. Hubungi tim kami untuk info terbaru.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering <span className="text-primary">Ditanyakan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Masih ragu? Mungkin jawaban yang Anda cari ada di sini
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              variant="bordered"
              className={`cursor-pointer transition-all duration-300 ${openIndex === index ? 'border-primary shadow-md' : 'hover:border-gray-300'}`}
              onClick={() => toggle(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  <button className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
