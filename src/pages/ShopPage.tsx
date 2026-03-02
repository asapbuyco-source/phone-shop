import { ProductGrid } from '../components/ProductGrid';
import { products } from '../data/products';
import { Filter, SlidersHorizontal } from 'lucide-react';

export function ShopPage() {
  return (
    <div className="bg-neutral-50 min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Global Wholesale Catalog</h1>
          <p className="text-lg text-neutral-600 max-w-3xl">
            Browse our complete inventory of premium smartphones. All devices are unlocked, 
            factory tested, and ready for international distribution.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-2 font-bold text-neutral-900 mb-4">
                <Filter className="h-5 w-5" />
                Filters
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3">Brand</h3>
                  <div className="space-y-2">
                    {['Apple', 'Samsung', 'Google', 'Sony', 'Xiaomi', 'OnePlus'].map(brand => (
                      <label key={brand} className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 cursor-pointer">
                        <input type="checkbox" className="rounded border-neutral-300 text-red-600 focus:ring-red-500" />
                        {brand}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-red-600 focus:ring-red-500" />
                      Under $500
                    </label>
                    <label className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-red-600 focus:ring-red-500" />
                      $500 - $800
                    </label>
                    <label className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-red-600 focus:ring-red-500" />
                      $800+
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3">Stock Status</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded border-neutral-300 text-red-600 focus:ring-red-500" />
                      In Stock
                    </label>
                    <label className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-red-600 focus:ring-red-500" />
                      Pre-order
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-neutral-500 text-sm">Showing {products.length} results</p>
              <button className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 lg:hidden">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
            </div>
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}
