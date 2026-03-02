import { Building2, Users, Globe2, Award } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Connecting Shenzhen to the World</h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Shenzhen Direct Tech is the premier bridge between China's electronics manufacturing hub and global retailers.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-red-600 mb-2">2012</p>
              <p className="text-neutral-600 font-medium">Founded</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600 mb-2">120+</p>
              <p className="text-neutral-600 font-medium">Countries Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600 mb-2">500k+</p>
              <p className="text-neutral-600 font-medium">Units Shipped</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600 mb-2">50+</p>
              <p className="text-neutral-600 font-medium">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                We believe that accessing the world's best electronics shouldn't be complicated. 
                Our mission is to simplify the wholesale supply chain, providing transparency, 
                quality assurance, and reliable logistics to businesses of all sizes.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Located in the heart of Shenzhen's Huaqiangbei district, we have direct relationships 
                with major manufacturers, allowing us to offer factory-direct pricing that 
                our competitors simply can't match.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1565514020176-db792f9862eb?auto=format&fit=crop&q=80&w=600" 
                alt="Shenzhen Skyline" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
                alt="Quality Control" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900">Why Partner With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
              <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Direct Sourcing</h3>
              <p className="text-neutral-600">No middlemen. We source directly from factory lines to ensure authenticity and the best possible margins for your business.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
              <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Quality First</h3>
              <p className="text-neutral-600">Our in-house QC team inspects every single unit. We have a zero-tolerance policy for defects or counterfeit goods.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
              <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Dedicated Support</h3>
              <p className="text-neutral-600">Every partner gets a dedicated account manager available 24/7 via WhatsApp, WeChat, or email to handle your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
