import React, { useState } from 'react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ShoppingCart, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(product.minOrder);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => Math.max(product.minOrder, q - 1));

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
      setQuantity(val);
    } else if (e.target.value === '') {
      setQuantity(0); // Temporary state while typing
    }
  };

  const handleBlur = () => {
    if (quantity < product.minOrder) {
      setQuantity(product.minOrder);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
          {product.brand}
        </div>
        {product.stock < 50 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
            Low Stock
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-neutral-900 mb-1">{product.name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-red-600">${product.price}</span>
            <span className="text-xs text-neutral-500 font-medium bg-neutral-100 px-2 py-0.5 rounded">FOB Shenzhen</span>
          </div>
          <div className="text-sm text-neutral-400 mt-1">Est. Resale: ${product.retailPrice}</div>
        </div>

        <div className="space-y-2 mb-6 text-sm text-neutral-600 flex-grow">
          <div className="flex justify-between border-b border-neutral-100 pb-1">
            <span>Screen</span>
            <span className="font-medium text-neutral-900">{product.specs.screen}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-100 pb-1">
            <span>Processor</span>
            <span className="font-medium text-neutral-900">{product.specs.processor}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-100 pb-1">
            <span>Storage</span>
            <span className="font-medium text-neutral-900">{product.specs.storage}</span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-neutral-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Min Order: {product.minOrder} units
            </span>
            <div className="flex items-center gap-1 bg-neutral-50 rounded-lg p-1 border border-neutral-200">
              <button 
                onClick={decrement}
                className="p-3 sm:p-2 hover:bg-white rounded-md transition-colors text-neutral-600 disabled:opacity-50 active:bg-white"
                disabled={quantity <= product.minOrder}
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4 sm:h-3 sm:w-3" />
              </button>
              <input
                type="number"
                min={product.minOrder}
                value={quantity}
                onChange={handleQuantityChange}
                onBlur={handleBlur}
                className="w-12 text-center bg-transparent font-mono font-medium text-sm focus:outline-none appearance-none"
              />
              <button 
                onClick={increment}
                className="p-3 sm:p-2 hover:bg-white rounded-md transition-colors text-neutral-600 active:bg-white"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4 sm:h-3 sm:w-3" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`w-full py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
              isAdded 
                ? 'bg-green-600 text-white' 
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="h-5 w-5" />
                Added to Order
              </>
            ) : (
              <>
                <ShoppingCart className="h-5 w-5" />
                Add to Order
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
