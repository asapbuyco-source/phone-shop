import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle, Truck, Building2, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

export function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const [step, setStep] = useState<'cart' | 'shipping' | 'success'>('cart');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
      setTimeout(() => {
        setStep('cart');
        clearCart();
        setIsCartOpen(false);
      }, 4000);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-neutral-100">
              <h2 className="text-xl font-bold flex items-center gap-2">
                {step === 'cart' && <><ShoppingBag className="h-5 w-5" /> Your Order</>}
                {step === 'shipping' && <><Truck className="h-5 w-5" /> Shipping Details</>}
                {step === 'success' && <><CheckCircle className="h-5 w-5 text-green-600" /> Order Confirmed</>}
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {step === 'cart' && (
                <div className="space-y-6">
                  {cart.length === 0 ? (
                    <div className="text-center py-12 text-neutral-500">
                      <ShoppingBag className="h-12 w-12 mx-auto mb-4 opacity-20" />
                      <p>Your order is empty.</p>
                      <button 
                        onClick={() => setIsCartOpen(false)}
                        className="mt-4 text-red-600 font-medium hover:underline"
                      >
                        Browse Global Catalog
                      </button>
                    </div>
                  ) : (
                    cart.map((item) => {
                      const product = products.find((p) => p.id === item.productId);
                      if (!product) return null;
                      return (
                        <div key={item.productId} className="flex gap-4">
                          <div className="w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-neutral-900">{product.name}</h3>
                            <p className="text-sm text-neutral-500 mb-2">{product.brand}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center border border-neutral-200 rounded-lg">
                                <button 
                                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                  className="px-2 py-1 hover:bg-neutral-50 text-neutral-600"
                                >
                                  -
                                </button>
                                <span className="px-2 text-sm font-medium">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                  className="px-2 py-1 hover:bg-neutral-50 text-neutral-600"
                                >
                                  +
                                </button>
                              </div>
                              <p className="font-bold text-neutral-900">${(product.price * item.quantity).toLocaleString()}</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.productId)}
                            className="text-neutral-400 hover:text-red-500 transition-colors self-start"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>
              )}

              {step === 'shipping' && (
                <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 h-5 w-5 text-neutral-400" />
                      <input required type="text" className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none" placeholder="Tech Imports Ltd." />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Contact Name</label>
                    <input required type="text" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none" placeholder="John Doe" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                    <input required type="email" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none" placeholder="purchasing@company.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Shipping Destination</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 h-5 w-5 text-neutral-400" />
                      <select required className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white">
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="DE">Germany</option>
                        <option value="AE">UAE</option>
                        <option value="NG">Nigeria</option>
                        <option value="BR">Brazil</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Shipping Method</label>
                    <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white">
                      <option>DHL Express (3-5 Days)</option>
                      <option>FedEx International (3-5 Days)</option>
                      <option>Air Freight (5-7 Days)</option>
                      <option>Sea Freight (25-30 Days)</option>
                    </select>
                  </div>
                </form>
              )}

              {step === 'success' && (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Order Received!</h3>
                  <p className="text-neutral-600 mb-6">
                    Thank you for your order. Our sales team will contact you within 2 hours with the proforma invoice and shipping details.
                  </p>
                  <div className="bg-neutral-50 p-4 rounded-xl text-left text-sm text-neutral-500">
                    <p>Order Reference: <span className="font-mono font-bold text-neutral-900">SZ-{Math.floor(Math.random() * 10000)}</span></p>
                    <p className="mt-1">Status: <span className="text-yellow-600 font-medium">Pending Verification</span></p>
                  </div>
                </div>
              )}
            </div>

            {cart.length > 0 && step !== 'success' && (
              <div className="p-6 border-t border-neutral-100 bg-neutral-50">
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm text-neutral-600">
                    <span>Subtotal</span>
                    <span>${cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-neutral-600">
                    <span>Shipping Estimate</span>
                    <span>Calculated Next</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-neutral-900 pt-4 border-t border-neutral-200">
                    <span>Total Estimate</span>
                    <span>${cartTotal.toLocaleString()}</span>
                  </div>
                </div>

                {step === 'cart' ? (
                  <button
                    onClick={() => setStep('shipping')}
                    className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Proceed to Checkout
                    <ArrowRight className="h-5 w-5" />
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep('cart')}
                      className="flex-1 bg-white border border-neutral-300 text-neutral-700 py-4 rounded-xl font-bold hover:bg-neutral-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      form="checkout-form"
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-[2] bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Place Order
                          <CheckCircle className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                )}
                <p className="text-xs text-center text-neutral-400 mt-4">
                  Secure B2B checkout powered by Shenzhen Direct.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
