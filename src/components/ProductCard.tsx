import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  key?: string | number;
}

export default function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => onViewDetails(product)}
      className="bg-white rounded-xl overflow-hidden border border-slate-100 group cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium text-slate-900 truncate">
            {product.name}
          </h3>
        </div>
        
        <p className="text-xs text-slate-500 mb-3">
          {product.category}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">
            ₹{product.price.toLocaleString()}
          </span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-800 transition-all active:scale-95"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
