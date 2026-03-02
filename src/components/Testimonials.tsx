import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodriguez",
    role: "Procurement Manager",
    company: "TechRetail SA, Mexico",
    content: "ShenzhenDirect has transformed our supply chain. The quality control is impeccable, and shipping to Mexico City takes just 5 days. We've reduced our return rates by 40%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CEO",
    company: "MobileFirst, Singapore",
    content: "The direct factory access is real. We're getting pricing that beats our previous suppliers by 15-20%. Their team communicates clearly and handles customs documentation perfectly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "David Okafor",
    role: "Director of Operations",
    company: "Lagos Gadgets, Nigeria",
    content: "Trust was our biggest concern with overseas suppliers. ShenzhenDirect's video inspection reports for every batch gave us peace of mind. Highly recommended for bulk buyers.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-red-600 font-bold mb-4 uppercase tracking-wider text-sm bg-red-50 px-4 py-1.5 rounded-full border border-red-100"
          >
            <Star className="h-4 w-4 fill-current" />
            <span>Trusted by 500+ Enterprises</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            Global Partners, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Local Success.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-600 leading-relaxed"
          >
            Don't just take our word for it. Hear from wholesale partners who have scaled their businesses with our supply chain solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-xl hover:border-red-100 transition-all relative group"
            >
              <div className="absolute top-8 right-8 text-neutral-100 group-hover:text-red-50 transition-colors">
                <Quote className="h-12 w-12" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-neutral-600 mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-neutral-900">{testimonial.name}</h4>
                  <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">{testimonial.role}</p>
                  <p className="text-xs text-red-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
