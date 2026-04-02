export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Laptops' | 'Phones' | 'Audio' | 'Accessories';
  image: string;
  rating: number;
  reviews: number;
  specs: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  createdAt: any;
}

export interface Order {
  id?: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: any;
}
