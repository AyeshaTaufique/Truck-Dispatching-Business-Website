import { Users, Target, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header with Image */}
      <section className="pt-24 pb-16 border-b border-zinc-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#f7f7f5] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">
                Built for the modern fleet.
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                We believe that independent drivers and owner-operators deserve the same level of operational support and technology as massive enterprise fleets.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg"></div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="Our Team" className="relative rounded-3xl shadow-xl w-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#f7f7f5] p-12 rounded-3xl border border-zinc-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-3xl -mr-10 -mt-10 opacity-50"></div>
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8 shadow-lg">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Mission</h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                To empower independent trucking businesses by removing administrative friction, optimizing routes, and negotiating the best possible rates. We handle the office, so you can handle the road.
              </p>
            </div>
            <div className="bg-[#f7f7f5] p-12 rounded-3xl border border-zinc-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200 rounded-full blur-3xl -mr-10 -mt-10 opacity-50"></div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-8 shadow-lg">
                <Zap className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Vision</h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                A logistics industry where every driver has access to an intelligent, 24/7 command center that maximizes their profitability and ensures their safety and compliance on every mile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values with Images */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Why choose DispatchHQ</h2>
            <p className="text-zinc-400 text-lg">The principles that guide our operations and our relationship with every driver on our platform.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Absolute Transparency</h3>
              <p className="text-zinc-400 leading-relaxed">
                No hidden fees, no skimmed rates. You see the original rate confirmation from the broker every single time.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dedicated Partnership</h3>
              <p className="text-zinc-400 leading-relaxed">
                You are assigned a dedicated dispatcher who learns your preferences, your lanes, and your business goals.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Relentless Efficiency</h3>
              <p className="text-zinc-400 leading-relaxed">
                We use advanced routing technology to minimize deadhead and keep your wheels turning profitably.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
