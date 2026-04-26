import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-[#fafafa] min-h-screen">
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                Let's talk about your fleet.
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed mb-12">
                Whether you're an owner-operator looking for better loads or a fleet manager needing comprehensive support, we're here to help.
              </p>

              <div className="space-y-8 relative">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 mb-1">Call Us</h3>
                    <p className="text-zinc-600 mb-1">Mon-Fri from 8am to 6pm CST.</p>
                    <a href="tel:+18005550199" className="text-blue-600 font-medium hover:underline">+1 (800) 555-0199</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 mb-1">Email Us</h3>
                    <p className="text-zinc-600 mb-1">We'll respond within 2 hours.</p>
                    <a href="mailto:hello@dispatchhq.com" className="text-emerald-600 font-medium hover:underline">hello@dispatchhq.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 mb-1">Headquarters</h3>
                    <p className="text-zinc-600">
                      100 Logistics Way, Suite 400<br />
                      Chicago, IL 60601
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Get a Quote</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 mb-1.5">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 mb-1.5">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1.5">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1.5">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="(555) 123-4567" />
                </div>

                <div>
                  <label htmlFor="fleetSize" className="block text-sm font-medium text-zinc-700 mb-1.5">Fleet Size</label>
                  <select id="fleetSize" className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white">
                    <option>Owner-Operator (1 Truck)</option>
                    <option>Small Fleet (2-5 Trucks)</option>
                    <option>Medium Fleet (6-15 Trucks)</option>
                    <option>Large Fleet (16+ Trucks)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1.5">How can we help?</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none" placeholder="Tell us about your current operations..."></textarea>
                </div>

                <button type="submit" className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-md">
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
