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
    id: "4",
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
    id: "5",
    name: "OEM 5G Smartphone X200 (White Label)",
    brand: "OEM/ODM",
    price: 115,
    retailPrice: 299,
    image: "https://images.unsplash.com/photo-1592899677712-a5a254503481?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.67\" FHD+ 120Hz",
      processor: "Dimensity 8200",
      storage: "256GB/12GB",
      camera: "64MP Main"
    },
    minOrder: 500,
    stock: 10000
  },
  {
    id: "6",
    name: "Sony Xperia 1 V (Import Stock)",
    brand: "Sony",
    price: 890,
    retailPrice: 1399,
    image: "https://images.unsplash.com/photo-1595941069915-4ebc5197c39c?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.5\" 4K HDR OLED",
      processor: "Snapdragon 8 Gen 2",
      storage: "256GB",
      camera: "Exmor T Sensor"
    },
    minOrder: 10,
    stock: 80
  },
  {
    id: "7",
    name: "Rugged Phone Armor X12 (Industrial)",
    brand: "OEM/ODM",
    price: 145,
    retailPrice: 350,
    image: "https://images.unsplash.com/photo-1583573636246-18cb22418f3e?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.1\" Gorilla Glass Victus",
      processor: "Helio G99",
      storage: "128GB",
      camera: "Thermal Imaging Option"
    },
    minOrder: 100,
    stock: 2000
  },
  {
    id: "8",
    name: "OnePlus 12 (International Version)",
    brand: "OnePlus",
    price: 620,
    retailPrice: 799,
    image: "https://images.unsplash.com/photo-1660481451479-7ad6d6ad0223?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.82\" ProXDR",
      processor: "Snapdragon 8 Gen 3",
      storage: "512GB/16GB",
      camera: "Hasselblad 4th Gen"
    },
    minOrder: 25,
    stock: 400
  },
  {
    id: "9",
    name: "Foldable Phone Z-Flip Style (OEM)",
    brand: "OEM/ODM",
    price: 350,
    retailPrice: 899,
    image: "https://images.unsplash.com/photo-1636195863673-4b36d079369e?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.9\" Foldable AMOLED",
      processor: "Snapdragon 8+ Gen 1",
      storage: "256GB",
      camera: "Dual 12MP"
    },
    minOrder: 50,
    stock: 500
  },
  {
    id: "10",
    name: "Budget 4G Android Go Phone",
    brand: "OEM/ODM",
    price: 45,
    retailPrice: 99,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "5.5\" HD LCD",
      processor: "Quad Core 1.6GHz",
      storage: "32GB/3GB",
      camera: "13MP Rear"
    },
    minOrder: 1000,
    stock: 50000
  },
  {
    id: "11",
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
    id: "12",
    name: "Gaming Phone RedMagic Style",
    brand: "OEM/ODM",
    price: 480,
    retailPrice: 749,
    image: "https://images.unsplash.com/photo-1692049080643-9f8942078652?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.8\" 165Hz AMOLED",
      processor: "Snapdragon 8 Gen 2",
      storage: "512GB/16GB",
      camera: "Built-in Fan + Triggers"
    },
    minOrder: 50,
    stock: 300
  },
  {
    id: "13",
    name: "Motorola Edge 40 Pro (Global Stock)",
    brand: "Motorola",
    price: 420,
    retailPrice: 799,
    image: "https://images.unsplash.com/photo-1616423664033-63511d9c670b?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.67\" pOLED 165Hz",
      processor: "Snapdragon 8 Gen 2",
      storage: "256GB/12GB",
      camera: "50MP Triple Cam"
    },
    minOrder: 20,
    stock: 150
  },
  {
    id: "14",
    name: "Huawei P60 Pro (China Version)",
    brand: "Huawei",
    price: 680,
    retailPrice: 999,
    image: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.67\" LTPO OLED",
      processor: "Snapdragon 8+ Gen 1 4G",
      storage: "512GB",
      camera: "XMAGE Ultra Lighting"
    },
    minOrder: 30,
    stock: 200
  },
  {
    id: "15",
    name: "Oppo Find X7 Ultra (Hasselblad)",
    brand: "Oppo",
    price: 750,
    retailPrice: 1099,
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.82\" AMOLED QHD+",
      processor: "Snapdragon 8 Gen 3",
      storage: "512GB/16GB",
      camera: "Quad 50MP Periscope"
    },
    minOrder: 25,
    stock: 100
  },
  {
    id: "16",
    name: "Vivo X100 Pro (Zeiss Optics)",
    brand: "Vivo",
    price: 720,
    retailPrice: 1050,
    image: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.78\" AMOLED 120Hz",
      processor: "Dimensity 9300",
      storage: "512GB/16GB",
      camera: "1-inch Main Sensor"
    },
    minOrder: 25,
    stock: 120
  },
  {
    id: "17",
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
    id: "18",
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
    id: "19",
    name: "Nothing Phone (2) (Transparent)",
    brand: "Nothing",
    price: 450,
    retailPrice: 699,
    image: "https://images.unsplash.com/photo-1678544927170-025537575ccb?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.7\" LTPO OLED",
      processor: "Snapdragon 8+ Gen 1",
      storage: "256GB/12GB",
      camera: "Glyph Interface"
    },
    minOrder: 20,
    stock: 150
  },
  {
    id: "20",
    name: "Asus ROG Phone 8 Pro (Gaming)",
    brand: "Asus",
    price: 850,
    retailPrice: 1199,
    image: "https://images.unsplash.com/photo-1662044670087-573523275995?auto=format&fit=crop&q=80&w=800",
    specs: {
      screen: "6.78\" 165Hz AMOLED",
      processor: "Snapdragon 8 Gen 3",
      storage: "1TB/24GB",
      camera: "AniMe Vision Matrix"
    },
    minOrder: 10,
    stock: 50
  }
];

