import { Truck, ShieldCheck, Globe, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    name: 'Shenzhen Logistics',
    description: 'Direct shipping from our Shenzhen warehouse to 120+ countries via DHL/FedEx.',
    icon: Globe,
  },
  {
    name: 'Factory QC',
    description: '30-point inspection process on every unit before it leaves the facility.',
    icon: ShieldCheck,
  },
  {
    name: 'Bank Transfer / Crypto',
    description: 'Secure payment options including T/T, USDT, and Letter of Credit.',
    icon: CreditCard,
  },
  {
    name: 'Express Dispatch',
    description: 'Stock items shipped within 24 hours. Tracking provided immediately.',
    icon: Truck,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden" id="features">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-neutral-900"
          >
            Your Partner in China
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Bridging the gap between Shenzhen factories and your business with transparency and speed.
          </motion.p>
        </div>
        
        <div className="flex overflow-x-auto gap-4 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:pb-0 scrollbar-hide snap-x snap-mandatory">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-xl hover:border-red-100 transition-all group min-w-[260px] snap-center h-full flex flex-col"
            >
              <div className="bg-red-50 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 group-hover:text-red-600 transition-colors">{feature.name}</h3>
              <p className="text-neutral-600 leading-relaxed text-sm flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center gap-1 mt-4 sm:hidden">
          <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
        </div>
      </div>
    </section>
  );
}
