import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-zinc-900 p-1.5 rounded-lg">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-zinc-900 tracking-tight">DispatchHQ</span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed">
              The intelligent logistics command center for independent drivers and owner-operators.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Pricing</Link></li>
              <li><Link to="/portfolio" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} DispatchHQ. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social placeholders */}
            <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600 transition-colors cursor-pointer">
              <span className="text-xs">in</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600 transition-colors cursor-pointer">
              <span className="text-xs">tw</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
