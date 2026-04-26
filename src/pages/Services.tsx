import { MapPin, Clock, ShieldCheck, HeadphonesIcon, BarChart3, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Load Booking",
      description: "We leverage our industry relationships and market data to find the highest-paying loads. We handle all broker negotiations to ensure you get the best rate per mile.",
      color: "bg-blue-50 text-blue-600 border-blue-100",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Route Planning",
      description: "Smart trip planning that minimizes deadhead miles, accounts for hours of service (HOS), and plans for optimal fuel stops along your route.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "Driver Support",
      description: "Round-the-clock support for check-calls, lumpers, detention pay negotiation, and emergency roadside assistance coordination.",
      color: "bg-purple-50 text-purple-600 border-purple-100",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documentation Handling",
      description: "Complete back-office support. We manage rate confirmations, handle invoicing, submit factoring paperwork, and ensure DOT compliance.",
      color: "bg-orange-50 text-orange-600 border-orange-100",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "24/7 Dispatch Services",
      description: "A dedicated dispatch team available day and night to keep your fleet moving and handle any unexpected issues on the road.",
      color: "bg-zinc-800 text-white border-zinc-700",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#f7f7f5] min-h-screen">
      <section className="pt-24 pb-16 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">
              Comprehensive dispatch services.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Everything you need to operate a highly efficient, profitable trucking business without the administrative headache.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-lg transition-all flex flex-col overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center border ${service.color} bg-white shadow-lg`}>
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">{service.title}</h3>
                  <p className="text-zinc-600 leading-relaxed mb-6 flex-grow text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* CTA Card */}
            <div className="bg-blue-600 rounded-3xl p-8 shadow-lg flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80')] opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Need a custom solution?</h3>
                <p className="text-blue-100 mb-8 text-lg">We offer tailored dispatch packages for fleets of 5+ trucks.</p>
                <Link
                  to="/contact"
                  className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-white text-blue-600 font-bold hover:bg-zinc-50 transition-colors w-full sm:w-auto"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
