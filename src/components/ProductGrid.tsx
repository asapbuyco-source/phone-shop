import { Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { motion } from 'motion/react';
import { useRef } from 'react';

interface ProductGridProps {
  products: Product[];
  className?: string;
  variant?: 'grid' | 'carousel';
}

export function ProductGrid({ products, className = "", variant = 'grid' }: ProductGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (variant === 'carousel') {
    return (
      <div className={`relative group ${className}`}>
        <motion.div 
          ref={scrollRef}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide snap-x snap-mandatory"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              variants={item} 
              className="min-w-[280px] md:min-w-[320px] snap-center h-full"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Gradient Fade for Scroll Indication */}
        <div className="absolute right-0 top-0 bottom-8 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
      </div>
    );
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={item} className="h-full">
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}
