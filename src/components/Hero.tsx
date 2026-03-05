import { motion } from 'motion/react';
import { ArrowRight, Star, Globe, TrendingUp, ShieldCheck } from 'lucide-react';

export function Hero() {
  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNewsletter = () => {
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden min-h-[90vh] flex items-center" id="hero">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-red-950/30"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-8">
              <span className="bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-2 backdrop-blur-sm">
                <Globe className="h-3 w-3" />
                Global Shipping
              </span>
              <span className="flex items-center gap-1.5 text-yellow-400 text-sm font-medium bg-yellow-400/10 px-3 py-1.5 rounded-full border border-yellow-400/20 backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 fill-current" />
                #1 Shenzhen Exporter
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
              Shenzhen <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
                Wholesale.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-400 mb-10 max-w-lg leading-relaxed border-l-2 border-red-600 pl-6">
              Your direct link to China's mobile market. Source premium smartphones, refurbished devices, and OEM lots at factory-gate prices.
            </motion.p>

            {/* Mobile-Only Hero Image */}
            <motion.div 
              variants={itemVariants}
              className="lg:hidden mb-10 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800" 
                alt="Latest Smartphones" 
                className="rounded-2xl shadow-2xl border border-neutral-800 w-full object-cover h-64 sm:h-80"
              />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-neutral-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-white">Live Inventory</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToCatalog}
                className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] hover:shadow-[0_0_60px_-15px_rgba(220,38,38,0.6)] flex items-center justify-center gap-2 group"
              >
                View Global Catalog
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToNewsletter}
                className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/10 hover:bg-white/5 transition-colors backdrop-blur-sm"
              >
                Request Price List
              </button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-16 grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
              <div>
                <div className="flex items-center gap-2 text-red-500 mb-2">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <p className="text-3xl font-bold text-white tracking-tight">500k+</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1 font-medium">Units Exported</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-red-500 mb-2">
                  <Globe className="h-5 w-5" />
                </div>
                <p className="text-3xl font-bold text-white tracking-tight">120+</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1 font-medium">Countries Served</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-red-500 mb-2">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-3xl font-bold text-white tracking-tight">100%</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mt-1 font-medium">QC Verified</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
             {/* Abstract Phone Mockup Composition */}
             <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800" 
                    alt="Latest Smartphones" 
                    className="rounded-[2.5rem] shadow-2xl border-[12px] border-neutral-950 rotate-[-6deg] hover:rotate-0 transition-transform duration-700 w-3/4 mx-auto relative z-20"
                  />
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-10 right-10 z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/20 p-2 rounded-lg">
                      <ShieldCheck className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 uppercase tracking-wider">Status</p>
                      <p className="text-sm font-bold text-white">Verified Supplier</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-20 -left-4 z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-red-500/20 p-2 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 uppercase tracking-wider">Daily Volume</p>
                      <p className="text-sm font-bold text-white">2,500+ Units</p>
                    </div>
                  </div>
                </motion.div>
             </div>

             {/* Glow Effects */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                <div className="w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] animate-pulse"></div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
