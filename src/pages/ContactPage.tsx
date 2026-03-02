import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Let's Talk Business
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-300 max-w-2xl mx-auto"
          >
            Ready to scale your inventory? Our sourcing team in Shenzhen is standing by to assist with custom orders and logistics.
          </motion.p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">Get in Touch</h2>
            <p className="text-neutral-600 mb-12 leading-relaxed">
              Whether you need a quote for a bulk order, have questions about shipping to your country, or want to verify stock availability, we're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-red-50 p-4 rounded-xl">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg mb-1">Headquarters</h3>
                  <p className="text-neutral-600">
                    Shenzhen Direct Tech Co., Ltd.<br />
                    Block B, Seg Plaza, Huaqiang North<br />
                    Futian District, Shenzhen, China 518000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-red-50 p-4 rounded-xl">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg mb-1">Email Us</h3>
                  <p className="text-neutral-600 mb-2">sales@shenzhendirect.com</p>
                  <p className="text-neutral-500 text-sm">Response time: &lt; 4 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-red-50 p-4 rounded-xl">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg mb-1">Call / WhatsApp</h3>
                  <p className="text-neutral-600 mb-2">+86 755 1234 5678</p>
                  <p className="text-neutral-500 text-sm">Mon-Sat, 9:00 AM - 8:00 PM (GMT+8)</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 bg-neutral-100 rounded-2xl h-64 w-full overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1548603908-596956747206?auto=format&fit=crop&q=80&w=1000" 
                alt="Shenzhen Map" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-red-600" />
                  <span className="font-bold text-neutral-900">View on Google Maps</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-50 p-8 md:p-12 rounded-3xl border border-neutral-100"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Inquiry Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white">
                  <option>Bulk Order Quote</option>
                  <option>Shipping & Logistics</option>
                  <option>Product Availability</option>
                  <option>Partnership Proposal</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 group">
                Send Message
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs text-neutral-500 text-center mt-4">
                By submitting this form, you agree to our privacy policy. We typically respond within 2-4 hours during business hours.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
