import { Building2, ShoppingCart, Store, Briefcase, Factory, Building, ShoppingBag, Warehouse } from 'lucide-react';

// Logo placeholder companies with icons
const logosRow1 = [
  { name: 'PT Maju Jaya', icon: Building2, color: 'text-blue-600' },
  { name: 'Toko Berkah', icon: ShoppingCart, color: 'text-green-600' },
  { name: 'CV Sejahtera', icon: Store, color: 'text-purple-600' },
  { name: 'PT Digital Indonesia', icon: Briefcase, color: 'text-orange-600' },
  { name: 'Factory Tech', icon: Factory, color: 'text-cyan-600' },
  { name: 'Building Corp', icon: Building, color: 'text-red-600' },
  { name: 'Shop Mart', icon: ShoppingBag, color: 'text-pink-600' },
  { name: 'Store Indo', icon: Warehouse, color: 'text-indigo-600' },
];

const logosRow2 = [
  { name: 'Klinik Sehat', icon: Building2, color: 'text-emerald-600' },
  { name: 'Edu Center', icon: ShoppingCart, color: 'text-amber-600' },
  { name: 'Service Pro', icon: Store, color: 'text-rose-600' },
  { name: 'Tech Startup', icon: Briefcase, color: 'text-violet-600' },
  { name: 'Retail Plus', icon: Factory, color: 'text-teal-600' },
  { name: 'Market Place', icon: Building, color: 'text-lime-600' },
  { name: 'Business Hub', icon: ShoppingBag, color: 'text-sky-600' },
  { name: 'Trade Center', icon: Warehouse, color: 'text-fuchsia-600' },
];

function LogoItem({ name, icon: Icon, color }: { name: string; icon: any; color: string }) {
  return (
    <div className="flex items-center gap-3 px-8 py-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className={`w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-semibold text-gray-700 whitespace-nowrap">{name}</span>
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dipercaya oleh <span className="text-primary">Berbagai Bisnis</span>
          </h2>
          <p className="text-xl text-gray-600">
            Lihat bagaimana AI WhatsApp membantu bisnis lain berkembang
          </p>
        </div>
      </div>

      {/* Row 1 - Scroll Left */}
      <div className="mb-6">
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused]">
            {/* Original set */}
            {[...logosRow1, ...logosRow1].map((logo, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0">
                <LogoItem {...logo} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 - Scroll Right */}
      <div>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll-right hover:[animation-play-state:paused]">
            {/* Original set */}
            {[...logosRow2, ...logosRow2].map((logo, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0">
                <LogoItem {...logo} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient fade on edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
