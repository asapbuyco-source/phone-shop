export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  retailPrice: number;
  image: string;
  specs: {
    screen: string;
    processor: string;
    storage: string;
    camera: string;
  };
  minOrder: number;
  stock: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max (Refurbished - Grade A+)",
    brand: "Apple",
    price: 850,
    retailPrice: 1199,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" Super Retina XDR",
      processor: "A17 Pro",
      storage: "256GB/512GB",
      camera: "48MP Main / 5x Telephoto"
    },
    minOrder: 10,
    stock: 150
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra (Bulk Pack)",
    brand: "Samsung",
    price: 920,
    retailPrice: 1299,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.8\" QHD+ AMOLED",
      processor: "Snapdragon 8 Gen 3",
      storage: "512GB",
      camera: "200MP Quad Camera"
    },
    minOrder: 20,
    stock: 500
  },
  {
    id: "3",
    name: "iPhone 15 (New - Bulk)",
    brand: "Apple",
    price: 680,
    retailPrice: 799,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A16 Bionic",
      storage: "128GB",
      camera: "48MP Main"
    },
    minOrder: 15,
    stock: 300
  },
  {
    id: "4",
    name: "iPhone 14 Pro Max (Used - Grade A)",
    brand: "Apple",
    price: 750,
    retailPrice: 1099,
    image: "https://images.unsplash.com/photo-1663499482523-1c0c16740a16?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" Super Retina XDR",
      processor: "A16 Bionic",
      storage: "256GB",
      camera: "48MP Main"
    },
    minOrder: 10,
    stock: 200
  },
  {
    id: "5",
    name: "Google Pixel 8 Pro (Global Unlocked)",
    brand: "Google",
    price: 650,
    retailPrice: 999,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" LTPO OLED",
      processor: "Google Tensor G3",
      storage: "128GB",
      camera: "50MP + 48MP Tele"
    },
    minOrder: 15,
    stock: 300
  },
  {
    id: "6",
    name: "iPhone 13 (Refurbished - Grade B)",
    brand: "Apple (Refurb)",
    price: 380,
    retailPrice: 599,
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A15 Bionic",
      storage: "128GB",
      camera: "Dual 12MP"
    },
    minOrder: 20,
    stock: 400
  },
  {
    id: "7",
    name: "Xiaomi 14 Ultra (China Version/Global ROM)",
    brand: "Xiaomi",
    price: 780,
    retailPrice: 1099,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.73\" AMOLED 120Hz",
      processor: "Snapdragon 8 Gen 3",
      storage: "512GB/16GB",
      camera: "Leica Quad 50MP"
    },
    minOrder: 50,
    stock: 1000
  },
  {
    id: "8",
    name: "iPhone SE (3rd Gen) (New - Bulk)",
    brand: "Apple",
    price: 290,
    retailPrice: 429,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "4.7\" Retina HD",
      processor: "A15 Bionic",
      storage: "64GB",
      camera: "12MP Wide"
    },
    minOrder: 50,
    stock: 600
  },
  {
    id: "9",
    name: "iPhone 14 (Used - Grade B)",
    brand: "Apple",
    price: 420,
    retailPrice: 699,
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A15 Bionic",
      storage: "128GB",
      camera: "Dual 12MP"
    },
    minOrder: 20,
    stock: 200
  },
  {
    id: "10",
    name: "iPhone 11 (Refurbished - Grade A)",
    brand: "Apple (Refurb)",
    price: 210,
    retailPrice: 499,
    image: "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Liquid Retina",
      processor: "A13 Bionic",
      storage: "64GB",
      camera: "Dual 12MP"
    },
    minOrder: 50,
    stock: 800
  },
  {
    id: "11",
    name: "Samsung Galaxy Z Fold 5 (Bulk)",
    brand: "Samsung",
    price: 950,
    retailPrice: 1799,
    image: "https://images.unsplash.com/photo-1611462985358-60d3498e0364?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "7.6\" Foldable AMOLED",
      processor: "Snapdragon 8 Gen 2",
      storage: "512GB",
      camera: "Under-Display Cam"
    },
    minOrder: 10,
    stock: 80
  },
  {
    id: "12",
    name: "iPhone 12 Mini (Refurbished - Grade A)",
    brand: "Apple (Refurb)",
    price: 220,
    retailPrice: 429,
    image: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "5.4\" Super Retina XDR",
      processor: "A14 Bionic",
      storage: "64GB",
      camera: "Dual 12MP"
    },
    minOrder: 50,
    stock: 500
  },
  {
    id: "13",
    name: "iPhone 15 Plus (New - Bulk)",
    brand: "Apple",
    price: 750,
    retailPrice: 899,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" Super Retina XDR",
      processor: "A16 Bionic",
      storage: "128GB",
      camera: "48MP Main"
    },
    minOrder: 15,
    stock: 250
  },
  {
    id: "14",
    name: "iPhone 13 Pro (Used - Grade A)",
    brand: "Apple",
    price: 550,
    retailPrice: 999,
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A15 Bionic",
      storage: "128GB",
      camera: "Pro Camera System"
    },
    minOrder: 20,
    stock: 300
  },
  {
    id: "15",
    name: "iPhone XR (Refurbished - Grade B)",
    brand: "Apple (Refurb)",
    price: 180,
    retailPrice: 499,
    image: "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Liquid Retina",
      processor: "A12 Bionic",
      storage: "64GB",
      camera: "12MP Wide"
    },
    minOrder: 100,
    stock: 1000
  }
];

