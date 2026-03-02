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
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 1099,
    retailPrice: 1199,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" Super Retina XDR",
      processor: "A17 Pro",
      storage: "256GB",
      camera: "48MP Main | Ultra Wide | Telephoto"
    },
    minOrder: 5,
    stock: 150
  },
  {
    id: "2",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1150,
    retailPrice: 1299,
    image: "https://images.unsplash.com/photo-1706606991536-e3204238b3e3?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.8\" QHD+ AMOLED",
      processor: "Snapdragon 8 Gen 3",
      storage: "512GB",
      camera: "200MP Main | 100x Space Zoom"
    },
    minOrder: 5,
    stock: 200
  },
  {
    id: "3",
    name: "Pixel 9 Pro",
    brand: "Google",
    price: 899,
    retailPrice: 999,
    image: "https://images.unsplash.com/photo-1695415779023-e274b5247963?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" LTPO OLED",
      processor: "Google Tensor G4",
      storage: "128GB",
      camera: "50MP Main | 5x Telephoto"
    },
    minOrder: 10,
    stock: 85
  },
  {
    id: "4",
    name: "Xperia 1 V",
    brand: "Sony",
    price: 1200,
    retailPrice: 1399,
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.5\" 4K HDR OLED",
      processor: "Snapdragon 8 Gen 2",
      storage: "256GB",
      camera: "Exmor T for Mobile"
    },
    minOrder: 2,
    stock: 40
  },
  {
    id: "5",
    name: "iPhone 15",
    brand: "Apple",
    price: 729,
    retailPrice: 799,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A16 Bionic",
      storage: "128GB",
      camera: "48MP Main | Ultra Wide"
    },
    minOrder: 10,
    stock: 300
  },
  {
    id: "6",
    name: "Z Flip 5",
    brand: "Samsung",
    price: 850,
    retailPrice: 999,
    image: "https://images.unsplash.com/photo-1692049080643-9f8942078652?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" Foldable AMOLED",
      processor: "Snapdragon 8 Gen 2",
      storage: "256GB",
      camera: "12MP Dual Camera"
    },
    minOrder: 5,
    stock: 120
  },
  {
    id: "7",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: 950,
    retailPrice: 1099,
    image: "https://images.unsplash.com/photo-1660482068338-727b1307693d?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.73\" AMOLED",
      processor: "Snapdragon 8 Gen 3",
      storage: "512GB",
      camera: "Leica Quad Camera"
    },
    minOrder: 10,
    stock: 180
  },
  {
    id: "8",
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 699,
    retailPrice: 799,
    image: "https://images.unsplash.com/photo-1668615025752-94d35eb97087?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.82\" ProXDR",
      processor: "Snapdragon 8 Gen 3",
      storage: "256GB",
      camera: "Hasselblad Camera"
    },
    minOrder: 10,
    stock: 250
  },
  {
    id: "9",
    name: "Nothing Phone (2)",
    brand: "Nothing",
    price: 550,
    retailPrice: 699,
    image: "https://images.unsplash.com/photo-1691433774842-88748383a15c?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" OLED",
      processor: "Snapdragon 8+ Gen 1",
      storage: "256GB",
      camera: "50MP Dual Camera"
    },
    minOrder: 15,
    stock: 100
  },
  {
    id: "10",
    name: "ROG Phone 8 Pro",
    brand: "Asus",
    price: 1050,
    retailPrice: 1199,
    image: "https://images.unsplash.com/photo-1611532736597-b520746436aa?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.78\" 165Hz AMOLED",
      processor: "Snapdragon 8 Gen 3",
      storage: "1TB",
      camera: "50MP Gimbal OIS"
    },
    minOrder: 3,
    stock: 60
  }
];
