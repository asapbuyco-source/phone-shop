export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  retailPrice: number;
  image: string;
  category: string;
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
  // iPhone 15 Series (8 products)
  {
    id: "1",
    name: "iPhone 15 Pro Max (Factory New - Sealed Box)",
    brand: "Apple",
    category: "iPhone",
    price: 720,
    retailPrice: 1199,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" Super Retina XDR",
      processor: "A17 Pro",
      storage: "256GB/512GB",
      camera: "48MP Main / 5x Telephoto"
    },
    minOrder: 10,
    stock: 450
  },
  {
    id: "2",
    name: "iPhone 15 Pro (Factory New - Sealed Box)",
    brand: "Apple",
    category: "iPhone",
    price: 650,
    retailPrice: 999,
    image: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A17 Pro",
      storage: "128GB/256GB",
      camera: "48MP Main / 3x Telephoto"
    },
    minOrder: 5,
    stock: 500
  },
  {
    id: "3",
    name: "iPhone 15 (Factory New - Sealed Box)",
    brand: "Apple",
    category: "iPhone",
    price: 520,
    retailPrice: 799,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A16 Bionic",
      storage: "128GB/256GB",
      camera: "48MP Main"
    },
    minOrder: 10,
    stock: 600
  },
  {
    id: "4",
    name: "iPhone 15 Plus (Factory New - Sealed Box)",
    brand: "Apple",
    category: "iPhone",
    price: 580,
    retailPrice: 899,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" Super Retina XDR",
      processor: "A16 Bionic",
      storage: "128GB/256GB",
      camera: "48MP Main"
    },
    minOrder: 8,
    stock: 550
  },
  {
    id: "5",
    name: "iPhone 15 Pro Max (Grade A Refurbished)",
    brand: "Apple",
    category: "iPhone",
    price: 580,
    retailPrice: 1199,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" Super Retina XDR",
      processor: "A17 Pro",
      storage: "256GB",
      camera: "48MP Main / 5x Telephoto"
    },
    minOrder: 10,
    stock: 400
  },
  {
    id: "6",
    name: "iPhone 15 Pro (Grade A Refurbished)",
    brand: "Apple",
    category: "iPhone",
    price: 520,
    retailPrice: 999,
    image: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A17 Pro",
      storage: "256GB",
      camera: "48MP Main / 3x Telephoto"
    },
    minOrder: 20,
    stock: 350
  },
  {
    id: "7",
    name: "iPhone 15 (Grade B Used - Good Condition)",
    brand: "Apple",
    category: "iPhone",
    price: 380,
    retailPrice: 799,
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A16 Bionic",
      storage: "128GB",
      camera: "48MP Main"
    },
    minOrder: 25,
    stock: 300
  },
  {
    id: "8",
    name: "iPhone 15 Bulk Lot Mix (Grade A/B)",
    brand: "Apple",
    category: "iPhone",
    price: 8500,
    retailPrice: 20000,
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "Mixed 6.1-6.7 inch",
      processor: "A16/A17 Pro",
      storage: "128GB-512GB",
      camera: "48MP Main"
    },
    minOrder: 1,
    stock: 50
  },

  // iPhone 14 Series (6 products)
  {
    id: "9",
    name: "iPhone 14 Pro Max (Grade A)",
    brand: "Apple",
    category: "iPhone",
    price: 580,
    retailPrice: 1099,
    image: "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" Super Retina XDR",
      processor: "A16 Bionic",
      storage: "256GB",
      camera: "48MP Main"
    },
    minOrder: 15,
    stock: 350
  },
  {
    id: "10",
    name: "iPhone 14 Pro (Grade A Refurbished)",
    brand: "Apple",
    category: "iPhone",
    price: 480,
    retailPrice: 999,
    image: "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A16 Bionic",
      storage: "256GB",
      camera: "48MP Main"
    },
    minOrder: 20,
    stock: 300
  },
  {
    id: "11",
    name: "iPhone 14 (Factory New)",
    brand: "Apple",
    category: "iPhone",
    price: 420,
    retailPrice: 799,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A15 Bionic",
      storage: "128GB/256GB",
      camera: "12MP Main"
    },
    minOrder: 25,
    stock: 400
  },
  {
    id: "12",
    name: "iPhone 14 Plus (Grade A)",
    brand: "Apple",
    category: "iPhone",
    price: 480,
    retailPrice: 899,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" Super Retina XDR",
      processor: "A15 Bionic",
      storage: "256GB",
      camera: "12MP Main"
    },
    minOrder: 20,
    stock: 280
  },
  {
    id: "13",
    name: "iPhone 14 (Grade B Used)",
    brand: "Apple",
    category: "iPhone",
    price: 320,
    retailPrice: 799,
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A15 Bionic",
      storage: "128GB",
      camera: "12MP Main"
    },
    minOrder: 30,
    stock: 250
  },
  {
    id: "14",
    name: "iPhone 14 Wholesale Lot (50 units mixed)",
    brand: "Apple",
    category: "iPhone",
    price: 18000,
    retailPrice: 40000,
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A15 Bionic",
      storage: "128GB-256GB",
      camera: "12MP Main"
    },
    minOrder: 1,
    stock: 30
  },

  // iPhone 13 Series (4 products)
  {
    id: "15",
    name: "iPhone 13 Pro Max (Grade A Refurbished)",
    brand: "Apple",
    category: "iPhone",
    price: 420,
    retailPrice: 999,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" Super Retina XDR",
      processor: "A15 Bionic",
      storage: "256GB",
      camera: "12MP + 77mm Tele"
    },
    minOrder: 20,
    stock: 280
  },
  {
    id: "16",
    name: "iPhone 13 Pro (Grade A)",
    brand: "Apple",
    category: "iPhone",
    price: 380,
    retailPrice: 899,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A15 Bionic",
      storage: "256GB",
      camera: "12MP Triple"
    },
    minOrder: 25,
    stock: 320
  },
  {
    id: "17",
    name: "iPhone 13 (Factory New)",
    brand: "Apple",
    category: "iPhone",
    price: 320,
    retailPrice: 699,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina XDR",
      processor: "A15 Bionic",
      storage: "128GB",
      camera: "12MP Dual"
    },
    minOrder: 30,
    stock: 400
  },
  {
    id: "18",
    name: "iPhone 13 Mini (Grade B)",
    brand: "Apple",
    category: "iPhone",
    price: 250,
    retailPrice: 599,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "5.4\" Super Retina XDR",
      processor: "A15 Bionic",
      storage: "128GB",
      camera: "12MP Dual"
    },
    minOrder: 30,
    stock: 350
  },

  // Samsung Galaxy Series (6 products)
  {
    id: "19",
    name: "Samsung Galaxy S24 Ultra (Factory New)",
    brand: "Samsung",
    category: "Samsung",
    price: 680,
    retailPrice: 1299,
    image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.8\" QHD+ AMOLED",
      processor: "Snapdragon 8 Gen 3",
      storage: "512GB",
      camera: "200MP Quad Camera"
    },
    minOrder: 10,
    stock: 280
  },
  {
    id: "20",
    name: "Samsung Galaxy S24 (Grade A Refurbished)",
    brand: "Samsung",
    category: "Samsung",
    price: 480,
    retailPrice: 999,
    image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.2\" QHD+ AMOLED",
      processor: "Snapdragon 8 Gen 3",
      storage: "256GB",
      camera: "50MP Main"
    },
    minOrder: 15,
    stock: 250
  },
  {
    id: "21",
    name: "Samsung Galaxy S23 (Factory New)",
    brand: "Samsung",
    category: "Samsung",
    price: 420,
    retailPrice: 899,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" AMOLED",
      processor: "Snapdragon 8 Gen 2",
      storage: "256GB",
      camera: "50MP Main"
    },
    minOrder: 20,
    stock: 300
  },
  {
    id: "22",
    name: "Samsung Galaxy A54 Bulk Pack (20 units)",
    brand: "Samsung",
    category: "Samsung",
    price: 3800,
    retailPrice: 12000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.4\" AMOLED",
      processor: "Exynos 1280",
      storage: "128GB",
      camera: "50MP Main"
    },
    minOrder: 1,
    stock: 60
  },
  {
    id: "23b",
    name: "Samsung Galaxy Z Fold 5 (Premium)",
    brand: "Samsung",
    category: "Samsung",
    price: 920,
    retailPrice: 1799,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "7.6\" Foldable AMOLED",
      processor: "Snapdragon 8 Gen 2",
      storage: "512GB",
      camera: "Under-Display Cam"
    },
    minOrder: 10,
    stock: 120
  },
  {
    id: "23c",
    name: "Samsung Galaxy Note 24 (New Release)",
    brand: "Samsung",
    category: "Samsung",
    price: 720,
    retailPrice: 1299,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" QHD+ Dynamic AMOLED",
      processor: "Snapdragon 8 Gen 3",
      storage: "512GB",
      camera: "50MP Triple + S Pen"
    },
    minOrder: 8,
    stock: 200
  },

  // Google Pixel Series (3 products)
  {
    id: "24",
    name: "Google Pixel 8 Pro (Factory New)",
    brand: "Google",
    category: "Google",
    price: 520,
    retailPrice: 999,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" QHD+ AMOLED",
      processor: "Google Tensor G3",
      storage: "256GB",
      camera: "50MP + 48MP Tele"
    },
    minOrder: 15,
    stock: 180
  },
  {
    id: "25",
    name: "Google Pixel 8 (Grade A)",
    brand: "Google",
    category: "Google",
    price: 380,
    retailPrice: 799,
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.2\" FHD+ OLED",
      processor: "Google Tensor G3",
      storage: "128GB",
      camera: "50MP Dual"
    },
    minOrder: 20,
    stock: 250
  },
  {
    id: "26",
    name: "Google Pixel 7a (Bulk)",
    brand: "Google",
    category: "Google",
    price: 220,
    retailPrice: 499,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" FHD+ OLED",
      processor: "Google Tensor",
      storage: "128GB",
      camera: "64MP Dual"
    },
    minOrder: 20,
    stock: 320
  },

  // OnePlus Series (2 products)
  {
    id: "27",
    name: "OnePlus 12 (Factory New)",
    brand: "OnePlus",
    category: "OnePlus",
    price: 520,
    retailPrice: 899,
    image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" QHD+ AMOLED 120Hz",
      processor: "Snapdragon 8 Gen 3",
      storage: "256GB",
      camera: "50MP Triple Camera"
    },
    minOrder: 15,
    stock: 150
  },
  {
    id: "28",
    name: "OnePlus 11 (Grade A)",
    brand: "OnePlus",
    category: "OnePlus",
    price: 380,
    retailPrice: 699,
    image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" QHD+ AMOLED",
      processor: "Snapdragon 8 Gen 2",
      storage: "256GB",
      camera: "50MP Main Camera"
    },
    minOrder: 20,
    stock: 170
  },

  // Xiaomi Series (2 products)
  {
    id: "29",
    name: "Xiaomi 14 Ultra (Factory New)",
    brand: "Xiaomi",
    category: "Xiaomi",
    price: 620,
    retailPrice: 1099,
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.73\" AMOLED 120Hz",
      processor: "Snapdragon 8 Gen 3",
      storage: "512GB",
      camera: "Leica Quad 50MP"
    },
    minOrder: 10,
    stock: 120
  },
  {
    id: "30",
    name: "Xiaomi 13 (Grade A Refurbished)",
    brand: "Xiaomi",
    category: "Xiaomi",
    price: 420,
    retailPrice: 799,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.36\" AMOLED",
      processor: "Snapdragon 8 Gen 2",
      storage: "256GB",
      camera: "50MP Triple Leica"
    },
    minOrder: 15,
    stock: 200
  },

// iPhone 12 Series (2 products)
  {
    id: "31",
    name: "iPhone 12 Pro Max (Grade B Refurbished)",
    brand: "Apple",
    category: "iPhone",
    price: 320,
    retailPrice: 899,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" Super Retina XDR",
      processor: "A14 Bionic",
      storage: "256GB",
      camera: "12MP Quad"
    },
    minOrder: 25,
    stock: 200
  },
  {
    id: "32",
    name: "iPhone 12 Mini (Factory New)",
    brand: "Apple",
    category: "iPhone",
    price: 280,
    retailPrice: 499,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "5.4\" Super Retina XDR",
      processor: "A14 Bionic",
      storage: "128GB",
      camera: "12MP Dual"
    },
    minOrder: 20,
    stock: 280
  },

  // Accessories - Chargers & Cables (8 products)
  {
    id: "33",
    name: "USB-C Lightning Cable (100 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 35,
    retailPrice: 200,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "2 Meters",
      processor: "Nylon Braided",
      storage: "Pack of 100",
      camera: "Fast Charging"
    },
    minOrder: 100,
    stock: 5000
  },
  {
    id: "34",
    name: "USB-C Fast Charger 65W (50 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 280,
    retailPrice: 1000,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "65W Output",
      processor: "PD 3.0 Compatible",
      storage: "Pack of 50",
      camera: "Multi-device"
    },
    minOrder: 50,
    stock: 800
  },
{
    id: "35",
    name: "Apple 20W USB-C Charger (Grade A OEM)",
    brand: "Apple",
    category: "Accessories",
    price: 12,
    retailPrice: 19,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "20W Output",
      processor: "USB-C",
      storage: "Original Packaging",
      camera: "OEM Quality"
    },
    minOrder: 100,
    stock: 2000
  },
  {
    id: "36",
    name: "Lightning to USB-C Adapter (1000 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 120,
    retailPrice: 300,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "Lightning Connector",
      processor: "USB-C Male",
      storage: "Pack of 1000",
      camera: "Compact Design"
    },
    minOrder: 200,
    stock: 10000
  },
  {
    id: "37",
    name: "Wireless Charging Pad (100 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 280,
    retailPrice: 800,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "15W Fast Charging",
      processor: "Qi Compatible",
      storage: "Pack of 100",
      camera: "Universal Device"
    },
    minOrder: 100,
    stock: 1500
  },
  {
    id: "38",
    name: "Car Mount Phone Holder (500 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 180,
    retailPrice: 600,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "Adjustable Grip",
      processor: "Dashboard Mount",
      storage: "Pack of 500",
      camera: "Rotating Head"
    },
    minOrder: 100,
    stock: 5000
  },
  {
    id: "39",
    name: "Power Bank 20000mAh (50 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 680,
    retailPrice: 1500,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "20000mAh Capacity",
      processor: "Dual USB Output",
      storage: "Pack of 50",
      camera: "Fast Charging Support"
    },
    minOrder: 20,
    stock: 800
  },
  {
    id: "40",
    name: "Screen Protector Glass iPhone 15 (500 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 85,
    retailPrice: 400,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "9H Hardness",
      processor: "iPhone 15 Compatible",
      storage: "Pack of 500",
      camera: "Anti-glare Coating"
    },
    minOrder: 500,
    stock: 8000
  },

  // Cases & Protection (8 products)
  {
    id: "41",
    name: "iPhone 15 Pro Max Case (1000 pack mixed colors)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 220,
    retailPrice: 800,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "Soft TPU Material",
      processor: "Multiple Colors",
      storage: "Pack of 1000",
      camera: "Drop Protection"
    },
    minOrder: 200,
    stock: 15000
  },
  {
    id: "42",
    name: "iPhone 15 Pro Case Leather (500 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 320,
    retailPrice: 1200,
    image: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "Premium Leather",
      processor: "MagSafe Compatible",
      storage: "Pack of 500",
      camera: "Card Slot Option"
    },
    minOrder: 100,
    stock: 5000
  },
  {
    id: "43",
    name: "Samsung Galaxy S24 Case (800 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 180,
    retailPrice: 600,
    image: "https://images.unsplash.com/photo-1610945265078-385f0d5a3c9c?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "Silicone Material",
      processor: "Galaxy S24 Fit",
      storage: "Pack of 800",
      camera: "Shock Absorbing"
    },
    minOrder: 150,
    stock: 10000
  },
  {
    id: "44",
    name: "Tempered Glass Screen Protector Mix (2000 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 180,
    retailPrice: 1000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "9H Hardness Mixed",
      processor: "Multi-device Compatible",
      storage: "Pack of 2000",
      camera: "Ultra Clear"
    },
    minOrder: 300,
    stock: 20000
  },
  {
    id: "45",
    name: "Rugged Armor Case (600 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 280,
    retailPrice: 900,
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "Heavy Duty Protection",
      processor: "Mixed Sizes",
      storage: "Pack of 600",
      camera: "Impact Resistant"
    },
    minOrder: 100,
    stock: 8000
  },
  {
    id: "46",
    name: "Flip Case Wallet (700 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 320,
    retailPrice: 1200,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "Wallet Storage",
      processor: "Mixed Colors",
      storage: "Pack of 700",
      camera: "Card Holder"
    },
    minOrder: 100,
    stock: 9000
  },
  {
    id: "47",
    name: "Clear TPU Case Bulk (1500 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 150,
    retailPrice: 600,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "Transparent Design",
      processor: "Universal Fit",
      storage: "Pack of 1500",
      camera: "Lightweight"
    },
    minOrder: 200,
    stock: 18000
  },
  {
    id: "48",
    name: "Anti-radiation Phone Case (300 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 380,
    retailPrice: 1500,
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "EMF Protection",
      processor: "Premium Material",
      storage: "Pack of 300",
      camera: "Certified Safe"
    },
    minOrder: 300,
    stock: 4000
  },

  // Accessories - Audio & Connectivity (8 products)
  {
    id: "49",
    name: "Apple AirPods Pro (Grade A Refurbished)",
    brand: "Apple",
    category: "Audio",
    price: 180,
    retailPrice: 249,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "Active Noise Cancellation",
      processor: "H1 Chip",
      storage: "Wireless Charging Case",
      camera: "Spatial Audio"
    },
    minOrder: 20,
    stock: 300
  },
  {
    id: "50",
    name: "Bluetooth Earbuds Bulk (100 pairs)",
    brand: "Bulk Generic",
    category: "Audio",
    price: 380,
    retailPrice: 1500,
    image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "5.0 Bluetooth",
      processor: "30-hour Battery",
      storage: "Pack of 100 pairs",
      camera: "Noise Cancelling"
    },
    minOrder: 50,
    stock: 2000
  },
  {
    id: "51",
    name: "USB-C Headphones (500 pack)",
    brand: "Bulk Generic",
    category: "Audio",
    price: 150,
    retailPrice: 500,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "USB-C Connector",
      processor: "40mm Driver",
      storage: "Pack of 500",
      camera: "Mic Built-in"
    },
    minOrder: 100,
    stock: 8000
  },
  {
    id: "52",
    name: "3.5mm Auxiliary Cable (1000 pack)",
    brand: "Bulk Generic",
    category: "Audio",
    price: 45,
    retailPrice: 200,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "3 Meters Length",
      processor: "Gold Plated",
      storage: "Pack of 1000",
      camera: "Universal Audio"
    },
    minOrder: 200,
    stock: 15000
  },
  {
    id: "53",
    name: "Bluetooth Speaker Portable (50 pack)",
    brand: "Bulk Generic",
    category: "Audio",
    price: 580,
    retailPrice: 1500,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "20W Output",
      processor: "IPX7 Waterproof",
      storage: "Pack of 50",
      camera: "360° Sound"
    },
    minOrder: 20,
    stock: 600
  },
  {
    id: "54",
    name: "Wireless Charging Case AirPods (200 pack)",
    brand: "Bulk Generic",
    category: "Audio",
    price: 520,
    retailPrice: 2000,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "Qi Charging",
      processor: "LED Indicator",
      storage: "Pack of 200",
      camera: "AirPods Compatible"
    },
    minOrder: 200,
    stock: 3000
  },
  {
    id: "55",
    name: "Neckband Wireless Earphones (300 pack)",
    brand: "Bulk Generic",
    category: "Audio",
    price: 380,
    retailPrice: 1200,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "Magnetic Design",
      processor: "40 Hours Battery",
      storage: "Pack of 300",
      camera: "Noise Cancelling"
    },
    minOrder: 50,
    stock: 4000
  },
  {
    id: "56",
    name: "Car Bluetooth Receiver (400 pack)",
    brand: "Bulk Generic",
    category: "Audio",
    price: 280,
    retailPrice: 1200,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "5.0 Bluetooth",
      processor: "3.5mm Jack Output",
      storage: "Pack of 400",
      camera: "Hands-free Calling"
    },
    minOrder: 400,
    stock: 5000
  },

  // Miscellaneous Accessories (3 products)
  {
    id: "57",
    name: "Phone Stand Desktop Holder (1000 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 150,
    retailPrice: 600,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "Foldable Design",
      processor: "Adjustable Angle",
      storage: "Pack of 1000",
      camera: "Universal Device"
    },
    minOrder: 100,
    stock: 12000
  },
  {
    id: "58",
    name: "Glass Screen Protector with UV Light (600 pack)",
    brand: "Bulk Generic",
    category: "Accessories",
    price: 420,
    retailPrice: 2000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "9H Hardness",
      processor: "UV Installation Light",
      storage: "Pack of 600",
      camera: "Liquid Install"
    },
    minOrder: 600,
    stock: 7000
  },
  {
    id: "59",
    name: "Premium Accessories Starter Pack Bundle",
    brand: "Mixed Brands",
    category: "Accessories",
    price: 85,
    retailPrice: 150,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "5-in-1 Bundle",
      processor: "Cable + Charger + Case",
      storage: "100 bundle sets",
      camera: "Screen Protector + Stand"
    },
    minOrder: 50,
    stock: 5000
  },

  // Trending Products (New 2025 Models)
  {
    id: "TR1",
    name: "iPhone 16 Pro Max (Brand New - Pre-Order)",
    brand: "Apple",
    category: "Trending",
    price: 880,
    retailPrice: 1199,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.9\" Super Retina XDR",
      processor: "A18 Pro",
      storage: "256GB/512GB/1TB",
      camera: "48MP Main / 5x Telephoto"
    },
    minOrder: 10,
    stock: 200
  },
  {
    id: "TR2",
    name: "iPhone 16 Pro (Brand New - Pre-Order)",
    brand: "Apple",
    category: "Trending",
    price: 780,
    retailPrice: 999,
    image: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.3\" Super Retina XDR",
      processor: "A18 Pro",
      storage: "128GB/256GB",
      camera: "48MP Main / 5x Telephoto"
    },
    minOrder: 10,
    stock: 250
  },
  {
    id: "TR3",
    name: "Samsung Galaxy S25 Ultra (New Release)",
    brand: "Samsung",
    category: "Trending",
    price: 820,
    retailPrice: 1299,
    image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.9\" QHD+ AMOLED",
      processor: "Snapdragon 8 Elite",
      storage: "512GB/1TB",
      camera: "200MP Quad Camera"
    },
    minOrder: 10,
    stock: 180
  },
  {
    id: "TR4",
    name: "Samsung Galaxy Z Fold 6 (New Model)",
    brand: "Samsung",
    category: "Trending",
    price: 1180,
    retailPrice: 1799,
    image: "https://images.unsplash.com/photo-1591339136752-96c44f06400e?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "7.6\" Foldable AMOLED",
      processor: "Snapdragon 8 Gen 3",
      storage: "512GB/1TB",
      camera: "50MP Triple"
    },
    minOrder: 5,
    stock: 100
  },
  {
    id: "TR5",
    name: "Google Pixel 9 Pro XL (Latest)",
    brand: "Google",
    category: "Trending",
    price: 680,
    retailPrice: 1099,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.8\" QHD+ OLED",
      processor: "Google Tensor G4",
      storage: "256GB/512GB",
      camera: "50MP + 48MP Tele"
    },
    minOrder: 15,
    stock: 150
  },
  {
    id: "TR6",
    name: "OnePlus 13 (New Flagship)",
    brand: "OnePlus",
    category: "Trending",
    price: 620,
    retailPrice: 899,
    image: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.82\" QHD+ AMOLED 120Hz",
      processor: "Snapdragon 8 Elite",
      storage: "256GB/512GB",
      camera: "50MP Triple Hasselblad"
    },
    minOrder: 15,
    stock: 120
  },
  {
    id: "TR7",
    name: "Xiaomi 15 Ultra (New Launch)",
    brand: "Xiaomi",
    category: "Trending",
    price: 780,
    retailPrice: 1199,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.73\" AMOLED 120Hz",
      processor: "Snapdragon 8 Elite",
      storage: "512GB/1TB",
      camera: "Leica Quad 50MP"
    },
    minOrder: 10,
    stock: 100
  },
  {
    id: "TR8",
    name: "OPPO Find X8 Pro (New Arrival)",
    brand: "OPPO",
    category: "Trending",
    price: 680,
    retailPrice: 999,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.78\" AMOLED 120Hz",
      processor: "Dimensity 9400",
      storage: "256GB/512GB",
      camera: "50MP Triple Hasselblad"
    },
    minOrder: 20,
    stock: 180
  },
  {
    id: "TR9",
    name: "Vivo X200 Pro (Hot New Model)",
    brand: "Vivo",
    category: "Trending",
    price: 720,
    retailPrice: 1099,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.78\" AMOLED 120Hz",
      processor: "Dimensity 9400",
      storage: "256GB/512GB",
      camera: "200MP Triple"
    },
    minOrder: 15,
    stock: 150
  },
  {
    id: "TR10",
    name: "iPad Pro 13\" M4 (Tablet)",
    brand: "Apple",
    category: "Trending",
    price: 920,
    retailPrice: 1299,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "13\" Liquid Retina XDR",
      processor: "Apple M4",
      storage: "256GB/512GB/1TB",
      camera: "12MP Wide + LiDAR"
    },
    minOrder: 5,
    stock: 80
  }
];

