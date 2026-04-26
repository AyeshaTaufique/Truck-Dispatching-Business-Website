import { Link } from 'react-router-dom';
import { MapPin, Clock, ShieldCheck, CheckCircle2, BarChart3, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Notion-style Dark Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-[#0a0a0a] text-white">
        {/* Background Glows */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-40 bg-gradient-to-b from-blue-600 to-purple-600 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-medium mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Meet your new dispatch team
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Keep Your Fleet <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Moving 24/7</span>
          </h1>
          
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            The digital dispatch command center for independent drivers and owner-operators. We find the loads, handle the paperwork, and optimize your routes while you sleep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/register"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)]"
            >
              Register as a Driver
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-all backdrop-blur-md"
            >
              Request a demo
            </Link>
          </div>

          {/* Floating Elements (Notion style) */}
          <div className="hidden lg:block absolute top-20 left-10 animate-[bounce_3s_infinite]">
            <div className="bg-white p-3 rounded-2xl shadow-xl transform -rotate-12">
              <MapPin className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="hidden lg:block absolute top-40 right-10 animate-[bounce_4s_infinite]">
            <div className="bg-white p-3 rounded-2xl shadow-xl transform rotate-12">
              <Clock className="w-8 h-8 text-emerald-500" />
            </div>
          </div>
        </div>

        {/* Centralized UI Mockup */}
        <div className="max-w-5xl mx-auto px-4 mt-20 relative z-20">
          <div className="rounded-2xl border border-white/10 bg-[#1a1a1a]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="h-12 border-b border-white/10 flex items-center px-4 gap-4 bg-black/40">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="h-6 w-64 bg-white/5 rounded-md border border-white/10 flex items-center px-3">
                  <MapPin className="w-3 h-3 text-zinc-500 mr-2" />
                  <div className="h-1.5 w-24 bg-zinc-600 rounded"></div>
                </div>
              </div>
            </div>
            <div className="p-2 bg-zinc-900/50">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Dashboard Mockup" className="w-full h-auto rounded-xl opacity-80 mix-blend-screen" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-10 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-zinc-500 mb-6">Trusted by top owner-operators and fleets nationwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            <div className="text-xl font-bold font-serif">FreightLine</div>
            <div className="text-xl font-bold tracking-tighter">SwiftLogistics</div>
            <div className="text-xl font-black italic">ApexTransport</div>
            <div className="text-xl font-bold uppercase tracking-widest">GlobalRoute</div>
            <div className="text-xl font-bold">ExpressWay</div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services with Images */}
      <section className="py-24 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Bring all your operations together.</h2>
            <p className="text-zinc-600 text-lg">We handle the back-office complexity so you can focus on the road. Our platform provides end-to-end support for your operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Large Card 1 */}
            <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden group flex flex-col">
              <div className="p-10 pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">Load Booking</h3>
                </div>
                <p className="text-zinc-600 mb-8 text-lg">Access exclusive freight networks. We negotiate the highest rates and secure the best lanes.</p>
              </div>
              <div className="mt-auto px-10 pb-10">
                <div className="rounded-2xl overflow-hidden border border-zinc-100 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Route Map" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            {/* Large Card 2 */}
            <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden group flex flex-col">
              <div className="p-10 pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">Route Planning</h3>
                </div>
                <p className="text-zinc-600 mb-8 text-lg">Minimize deadhead miles and maximize profit with AI-assisted routing and scheduling.</p>
              </div>
              <div className="mt-auto px-10 pb-10">
                <div className="rounded-2xl overflow-hidden border border-zinc-100 shadow-lg bg-zinc-50 p-4">
                   <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"/>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Small Card 1 */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 border border-orange-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Documentation Handling</h3>
              <p className="text-zinc-600">We handle invoicing, rate cons, and factoring paperwork instantly.</p>
            </div>
            
            {/* Small Card 2 */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 border border-purple-100">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Driver Support</h3>
              <p className="text-zinc-600">Dedicated assistance for lumpers, detention pay, and roadside issues.</p>
            </div>

            {/* Small Card 3 */}
            <div className="bg-zinc-900 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow text-white">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 text-blue-400 flex items-center justify-center mb-6 border border-zinc-700">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Dispatch Services</h3>
              <p className="text-zinc-400">A dedicated dispatcher is always on call. We never sleep so you can.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Notion-style Testimonial */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8 leading-tight">
                "DispatchHQ has been the most powerful and impactful way to streamline our trucking workflow."
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Driver" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="font-bold text-zinc-900">Marcus Johnson</div>
                  <div className="text-zinc-500 text-sm">Owner-Operator, Midwest Express</div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80" alt="Truck on road" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-zinc-900 hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#f7f7f5] border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Try it for your fleet.</h2>
          <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
            Join hundreds of owner-operators who have increased their gross revenue and reduced their stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-sm"
            >
              Get started
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-white text-zinc-900 font-medium border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
