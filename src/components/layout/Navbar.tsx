import { Link, useLocation } from 'react-router-dom';
import { Truck, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing Plans', path: '/pricing' },
  ];

  return (
    <nav className={clsx(
      "fixed top-0 z-50 w-full transition-all duration-300",
      scrolled || !isHome ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className={clsx("p-1.5 rounded-lg transition-colors", scrolled || !isHome ? "bg-blue-600" : "bg-white")}>
              <Truck className={clsx("w-5 h-5", scrolled || !isHome ? "text-white" : "text-blue-600")} />
            </div>
            <span className={clsx("font-bold tracking-tight text-xl", scrolled || !isHome ? "text-zinc-900" : "text-white")}>DispatchHQ</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    'text-sm font-medium transition-colors hover:opacity-100',
                    scrolled || !isHome 
                      ? (location.pathname === link.path ? 'text-blue-600' : 'text-zinc-600 hover:text-zinc-900')
                      : (location.pathname === link.path ? 'text-white' : 'text-white/70 hover:text-white')
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className={clsx(
                  "text-sm font-medium transition-colors px-4 py-2 rounded-lg",
                  scrolled || !isHome ? "text-zinc-600 hover:bg-zinc-100" : "text-white hover:bg-white/10"
                )}
              >
                Get a Quote
              </Link>
              <Link
                to="/register"
                className="text-sm font-bold bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
              >
                Register as Driver
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsx("p-2", scrolled || !isHome ? "text-zinc-900" : "text-white")}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  'block px-3 py-3 rounded-md text-base font-medium',
                  location.pathname === link.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-3 px-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full px-4 py-3 border border-zinc-200 rounded-xl text-base font-medium text-zinc-700 bg-white hover:bg-zinc-50"
              >
                Get a Quote
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full px-4 py-3 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md"
              >
                Register as Driver
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
