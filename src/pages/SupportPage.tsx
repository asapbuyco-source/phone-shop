import { Truck, HelpCircle, FileText, Phone } from 'lucide-react';

export function SupportPage() {
  return (
    <div className="bg-neutral-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Support Center</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Everything you need to know about shipping, payments, and warranties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-50 p-2 rounded-lg">
                  <Truck className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">Shipping & Logistics</h2>
              </div>
              <div className="space-y-4 text-neutral-600">
                <p>
                  <strong>Processing Time:</strong> All in-stock orders are processed within 24 hours. 
                  Large bulk orders (500+ units) may require 48-72 hours for final QC.
                </p>
                <p>
                  <strong>Carriers:</strong> We primarily use DHL Express, FedEx International, and UPS Worldwide Saver. 
                  For larger pallets, we offer Air Freight and Sea Freight options.
                </p>
                <p>
                  <strong>Customs:</strong> We provide commercial invoices and packing lists. 
                  Import duties and taxes are the responsibility of the buyer, though we can assist with documentation.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-50 p-2 rounded-lg">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">Warranty & Returns</h2>
              </div>
              <div className="space-y-4 text-neutral-600">
                <p>
                  <strong>Warranty Period:</strong> All new devices come with a 1-year manufacturer warranty. 
                  Refurbished units come with a 90-day Shenzhen Wholesale Factory warranty.
                </p>
                <p>
                  <strong>RMA Process:</strong> If you receive a defective unit, contact your account manager within 7 days. 
                  We will issue an RMA number and provide a return shipping label.
                </p>
                <p>
                  <strong>Restocking Fee:</strong> Non-defective returns are subject to a 15% restocking fee 
                  and must be returned in original sealed packaging.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-50 p-2 rounded-lg">
                  <HelpCircle className="h-6 w-6 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">Do you offer dropshipping?</h3>
                  <p className="text-neutral-600">Yes, we offer blind dropshipping services for verified partners. Contact sales to apply.</p>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">What are your payment terms?</h3>
                  <p className="text-neutral-600">We accept T/T (Bank Transfer), USDT (Tether), and Letter of Credit for orders over $50k. First-time buyers must pay 100% upfront.</p>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">Are the phones unlocked?</h3>
                  <p className="text-neutral-600">Yes, 100% of our inventory is factory unlocked and compatible with global GSM networks.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-neutral-900 text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Need Urgent Help?</h3>
              <p className="text-neutral-400 mb-6">Our support team is available 24/7 to assist with your orders.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  <span className="font-mono">+86 755 1234 5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 w-5 h-5 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">W</span>
                  </div>
                  <span>WeChat: szdirect_support</span>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors mt-4">
                  Start Live Chat
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Download Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center justify-between text-neutral-600 hover:text-red-600 transition-colors group">
                    <span className="text-sm">Latest Price List (PDF)</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between text-neutral-600 hover:text-red-600 transition-colors group">
                    <span className="text-sm">RMA Form</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between text-neutral-600 hover:text-red-600 transition-colors group">
                    <span className="text-sm">Bank Details</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowRight } from 'lucide-react';
