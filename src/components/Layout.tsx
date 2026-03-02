import React from 'react';
import { ShoppingBag, Menu, X, Smartphone, Search, Globe2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Link, NavLink, useLocation } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans flex flex-col">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <div className="bg-red-600 p-2 rounded-lg">
                <Globe2 className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none tracking-tight">Shenzhen<span className="text-red-600">Direct</span></span>
                <span className="text-[10px] text-neutral-500 font-medium tracking-widest uppercase">Global Wholesale</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink 
                to="/shop" 
                className={({ isActive }) => cn("text-sm font-medium transition-colors", isActive ? "text-red-600" : "text-neutral-600 hover:text-red-600")}
              >
                Global Catalog
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => cn("text-sm font-medium transition-colors", isActive ? "text-red-600" : "text-neutral-600 hover:text-red-600")}
              >
                About Us
              </NavLink>
              <NavLink 
                to="/support" 
                className={({ isActive }) => cn("text-sm font-medium transition-colors", isActive ? "text-red-600" : "text-neutral-600 hover:text-red-600")}
              >
                Support Center
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => cn("text-sm font-medium transition-colors", isActive ? "text-red-600" : "text-neutral-600 hover:text-red-600")}
              >
                Contact
              </NavLink>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-neutral-600 hover:text-neutral-900 transition-colors group"
              >
                <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                className="md:hidden p-2 text-neutral-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-neutral-200 bg-white overflow-hidden"
            >
              <div className="px-4 py-4 space-y-4 flex flex-col">
                <NavLink to="/shop" className="text-sm font-medium text-neutral-900 py-2">Global Catalog</NavLink>
                <NavLink to="/about" className="text-sm font-medium text-neutral-900 py-2">About Us</NavLink>
                <NavLink to="/support" className="text-sm font-medium text-neutral-900 py-2">Support Center</NavLink>
                <NavLink to="/contact" className="text-sm font-medium text-neutral-900 py-2">Contact</NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-neutral-900 text-white py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-red-600 p-1.5 rounded">
                  <Globe2 className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl">Shenzhen<span className="text-red-500">Direct</span></span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                Your direct link to the world's electronics manufacturing hub. We supply retailers, distributors, and enterprises in over 120 countries with factory-direct pricing and reliable logistics.
              </p>
              <div className="mt-6 flex gap-4">
                <div className="text-center">
                  <p className="font-bold text-white text-lg">12+</p>
                  <p className="text-xs text-neutral-500">Years Exp.</p>
                </div>
                <div className="w-px bg-neutral-800 h-10"></div>
                <div className="text-center">
                  <p className="font-bold text-white text-lg">120+</p>
                  <p className="text-xs text-neutral-500">Countries</p>
                </div>
                <div className="w-px bg-neutral-800 h-10"></div>
                <div className="text-center">
                  <p className="font-bold text-white text-lg">24/7</p>
                  <p className="text-xs text-neutral-500">Support</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-lg">Sourcing</h3>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li><Link to="/shop" className="hover:text-red-500 transition-colors">Latest Smartphones</Link></li>
                <li><Link to="/shop" className="hover:text-red-500 transition-colors">Refurbished Units</Link></li>
                <li><Link to="/shop" className="hover:text-red-500 transition-colors">Accessories</Link></li>
                <li><Link to="/shop" className="hover:text-red-500 transition-colors">Parts & Repair</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-lg">Support</h3>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li><Link to="/support" className="hover:text-red-500 transition-colors">Shipping Policy</Link></li>
                <li><Link to="/support" className="hover:text-red-500 transition-colors">Customs & Duties</Link></li>
                <li><Link to="/support" className="hover:text-red-500 transition-colors">Warranty Claims</Link></li>
                <li><Link to="/support" className="hover:text-red-500 transition-colors">Contact Sales</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>© 2024 Shenzhen Direct Tech Co., Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Trade</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
