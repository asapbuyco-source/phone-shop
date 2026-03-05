import React from 'react';
import { motion } from 'motion/react';
import { Truck, Package, Ship, Clock, CheckCircle2, MapPin, Container, Boxes } from 'lucide-react';

export function DeliveryPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-neutral-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            alt="Warehouse Logistics" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6 tracking-tight">Global Logistics & Delivery</h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              From our Shenzhen factory floor to your warehouse. We handle the complexities of international freight, customs clearance, and bulk packaging.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Boxes className="h-8 w-8 text-red-600" />,
              title: "Factory Packing",
              desc: "Items are packed in export-grade, reinforced cartons. Palletized and shrink-wrapped for maximum protection during transit."
            },
            {
              icon: <Container className="h-8 w-8 text-red-600" />,
              title: "Container Loading",
              desc: "Direct loading at our Shenzhen facility. We support FCL (Full Container Load) and LCL (Less than Container Load) shipments."
            },
            {
              icon: <Ship className="h-8 w-8 text-red-600" />,
              title: "Global Shipping",
              desc: "Partnerships with Maersk, DHL, and FedEx. We offer EXW, FOB, and CIF terms to suit your business needs."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Factory & Packing Gallery */}
      <div className="bg-white py-20 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Factory Floor & Packaging</h2>
            <p className="text-neutral-600">
              Transparency is key. See exactly how your bulk orders are handled, packed, and prepared for shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-100 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1565514020176-dbf2277e4952?auto=format&fit=crop&q=80&w=1000" 
                  alt="Factory Assembly Line" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-bold text-lg">Assembly Line A - Electronics</p>
                  <p className="text-neutral-300 text-sm">Daily Output: 5,000 Units</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video rounded-xl overflow-hidden bg-neutral-100 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=600" 
                    alt="Quality Control" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold">Quality Control</span>
                  </div>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden bg-neutral-100 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
                    alt="Component Testing" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold">Testing Lab</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-100 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1000" 
                  alt="Cartons Packed on Pallets" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-bold text-lg">Export Packaging Zone</p>
                  <p className="text-neutral-300 text-sm">Reinforced Cartons & Palletization</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video rounded-xl overflow-hidden bg-neutral-100 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1566576912902-199df136d64b?auto=format&fit=crop&q=80&w=600" 
                    alt="Shipping Container" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold">Container Loading</span>
                  </div>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden bg-neutral-100 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1494412574643-35d324698420?auto=format&fit=crop&q=80&w=600" 
                    alt="Warehouse Storage" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold">Bulk Storage</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Shipping Terms Table */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-neutral-900 mb-8">Shipping Terms & Lead Times</h2>
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-neutral-900">Shipping Method</th>
                  <th className="px-6 py-4 font-bold text-neutral-900">Est. Time</th>
                  <th className="px-6 py-4 font-bold text-neutral-900">Cost Level</th>
                  <th className="px-6 py-4 font-bold text-neutral-900">Recommended For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr className="hover:bg-neutral-50/50">
                  <td className="px-6 py-4 font-medium text-neutral-900 flex items-center gap-2">
                    <Truck className="h-4 w-4 text-neutral-400" />
                    Express Air (DHL/FedEx)
                  </td>
                  <td className="px-6 py-4 text-neutral-600">3-5 Days</td>
                  <td className="px-6 py-4 text-red-600 font-medium">High</td>
                  <td className="px-6 py-4 text-neutral-600">Samples, Urgent Small Orders</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="px-6 py-4 font-medium text-neutral-900 flex items-center gap-2">
                    <Truck className="h-4 w-4 text-neutral-400" />
                    Air Freight
                  </td>
                  <td className="px-6 py-4 text-neutral-600">7-12 Days</td>
                  <td className="px-6 py-4 text-orange-600 font-medium">Medium</td>
                  <td className="px-6 py-4 text-neutral-600">Medium Orders (100-500kg)</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="px-6 py-4 font-medium text-neutral-900 flex items-center gap-2">
                    <Ship className="h-4 w-4 text-neutral-400" />
                    Sea Freight (LCL)
                  </td>
                  <td className="px-6 py-4 text-neutral-600">25-35 Days</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Low</td>
                  <td className="px-6 py-4 text-neutral-600">Bulk Orders (1-10 CBM)</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="px-6 py-4 font-medium text-neutral-900 flex items-center gap-2">
                    <Ship className="h-4 w-4 text-neutral-400" />
                    Sea Freight (FCL)
                  </td>
                  <td className="px-6 py-4 text-neutral-600">20-30 Days</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Lowest</td>
                  <td className="px-6 py-4 text-neutral-600">Full Containers (20ft/40ft)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
