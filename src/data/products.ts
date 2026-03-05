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
    name: "OEM Smartphone X15 Pro (Unbranded)",
    brand: "OEM/ODM",
    price: 85,
    retailPrice: 299,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" HD+ IPS LCD",
      processor: "MTK Helio G99",
      storage: "128GB/8GB",
      camera: "50MP Main AI"
    },
    minOrder: 500,
    stock: 50000
  },
  {
    id: "2",
    name: "Rugged Phone Z8000 Bulk Lot",
    brand: "Shenzhen Tech",
    price: 120,
    retailPrice: 350,
    image: "https://images.unsplash.com/photo-1706606991536-e3204238b3e3?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.5\" Gorilla Glass 5",
      processor: "Dimensity 700",
      storage: "256GB",
      camera: "Night Vision 20MP"
    },
    minOrder: 100,
    stock: 2000
  },
  {
    id: "3",
    name: "Refurbished iPhone 13 Pro (Grade A)",
    brand: "Apple (Refurb)",
    price: 450,
    retailPrice: 650,
    image: "https://images.unsplash.com/photo-1695415779023-e274b5247963?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Super Retina",
      processor: "A15 Bionic",
      storage: "128GB",
      camera: "Original Parts"
    },
    minOrder: 20,
    stock: 150
  },
  {
    id: "4",
    name: "Android 14 Tablet PC 10.1\"",
    brand: "OEM",
    price: 65,
    retailPrice: 159,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "10.1\" IPS 1920x1200",
      processor: "Octa-Core 2.0GHz",
      storage: "64GB/4GB",
      camera: "8MP Rear / 5MP Front"
    },
    minOrder: 200,
    stock: 10000
  },
  {
    id: "5",
    name: "Smart Watch Series 9 Clone",
    brand: "Generic",
    price: 12,
    retailPrice: 49,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "1.9\" Infinite Display",
      processor: "Realtek 8762",
      storage: "128MB",
      camera: "Bluetooth Call"
    },
    minOrder: 1000,
    stock: 100000
  },
  {
    id: "6",
    name: "TWS Earbuds Pro 2 (ANC)",
    brand: "AudioTech",
    price: 8.50,
    retailPrice: 39,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "LED Power Display",
      processor: "JL6973",
      storage: "N/A",
      camera: "Active Noise Cancel"
    },
    minOrder: 500,
    stock: 25000
  },
  {
    id: "7",
    name: "5G Mobile Hotspot Router",
    brand: "NetLink",
    price: 45,
    retailPrice: 120,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "2.4\" LCD Status",
      processor: "Qualcomm X55",
      storage: "N/A",
      camera: "3000mAh Battery"
    },
    minOrder: 50,
    stock: 500
  },
  {
    id: "8",
    name: "GaN Fast Charger 65W",
    brand: "PowerMaster",
    price: 6.20,
    retailPrice: 29,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "N/A",
      processor: "GaN Tech",
      storage: "N/A",
      camera: "2C + 1A Ports"
    },
    minOrder: 1000,
    stock: 80000
  },
  {
    id: "9",
    name: "Gaming Phone Cooler Fan",
    brand: "CoolTech",
    price: 4.50,
    retailPrice: 19,
    image: "https://images.unsplash.com/photo-1692049080643-9f8942078652?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "RGB Light",
      processor: "Semiconductor",
      storage: "N/A",
      camera: "Magnetic Mount"
    },
    minOrder: 200,
    stock: 5000
  },
  {
    id: "10",
    name: "LCD Screen for iPhone 14",
    brand: "RepairParts",
    price: 22,
    retailPrice: 60,
    image: "https://images.unsplash.com/photo-1611532736597-b520746436aa?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "OLED Soft",
      processor: "IC Included",
      storage: "N/A",
      camera: "True Tone Support"
    },
    minOrder: 50,
    stock: 1000
  }
];

