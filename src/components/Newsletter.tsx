import { Mail, ArrowRight, Bell, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function Newsletter() {
  return (
    <section className="py-16 md:py-32 bg-neutral-950 text-white relative overflow-hidden" id="newsletter">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl mb-8 border border-white/5 backdrop-blur-sm"
        >
          <Mail className="h-8 w-8 text-red-500" />
        </motion.div>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
        >
          Shenzhen Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Alerts</span>
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
        >
          Get daily price sheets, new model announcements, and exclusive flash deals directly from the factory floor.
        </motion.p>
        
        <motion.form 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3" 
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-md"></div>
            <input 
              type="email" 
              placeholder="Enter your business email" 
              className="relative w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all backdrop-blur-sm"
            />
          </div>
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 hover:shadow-red-600/30 hover:-translate-y-0.5">
            Subscribe
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.form>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-neutral-500"
        >
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-red-500" />
            <span>Daily Price Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span>Flash Deal Alerts</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <span>Join 15,000+ Importers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
