import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Newsletter } from '../components/Newsletter';
import { ProductGrid } from '../components/ProductGrid';
import { Testimonials } from '../components/Testimonials';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <Hero />
      <Features />
      
      <section className="py-24 bg-white relative overflow-hidden" id="catalog">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2 uppercase tracking-wider text-sm">
                <Sparkles className="h-4 w-4" />
                <span>Latest Factory Lots</span>
              </div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">Wholesale Highlights</h2>
              <p className="text-lg text-neutral-600 max-w-2xl">
                The latest OEM/ODM devices and bulk lots, available for immediate shipment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/shop" 
                className="hidden md:flex items-center gap-2 text-neutral-900 font-bold hover:text-red-600 transition-colors group"
              >
                View All Products 
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          <ProductGrid products={featuredProducts} variant="carousel" />
          
          <div className="mt-12 text-center md:hidden">
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors"
            >
              View All Products <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </>
  );
}
