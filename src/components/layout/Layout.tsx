import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] font-sans text-zinc-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main className={`flex-grow flex flex-col ${!isHome ? 'pt-16' : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
