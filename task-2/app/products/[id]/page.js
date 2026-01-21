"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

const products = [
  {
    id: 1,
    title: "Samsung Galaxy S25 ultra",
    storage: "12GB / 256 GB",
    price: "1,22,999",
    description:
      "12 GB RAM | 1024 GB ROM | 17.53 cm (6.9 inch) Quad HD+ Display | 200MP + 50MP + 50MP + 10MP | 12MP Front Camera | 5000 mAh Battery | 8 Elite for Galaxy Processor",
  },
  {
    id: 2,
    title: "Google Pixel 9 pro XL",
    storage: "16GB / 256 GB",
    price: "1,04,999",
    description:
      " 6.8 Super Actua LTPO OLED, 1344×2992, 1–120 Hz | Google Tensor G4 + Titan M2 security | Pro triple camera: 50MP wide + 48MP ultrawide (Macro) + 48MP 5x telephoto; 42MP AF selfie | 8K30 (Video Boost), 4K60; Super Res Zoom up to 30x; OIS+EIS | 5060 mAh (typ) battery; up to ~70% in ~30 min with Google 45W USB-C charger (sold separately); fast wireless | charging; Battery Share | IP68, Gorilla Glass Victus 2; Dual SIM (Nano + eSIM)",
  },
  {
    id: 3,
    title: "iPhone 16 Pro Max",
    storage: "8GB / 256 GB",
    price: "1,34,900",
    description:
      "256 GB ROM | 17.53 cm (6.9 inch) Super Retina XDR Display | 48MP + 48MP + 12MP | 12MP Front Camera | A18 Pro Chip, 6 Core Processor Processor",
  },
];
export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="mb-2">Storage : {product.storage}</p>
      <p className="mb-2">Price: Rs. {product.price}</p>
      <p className="mb-6">Description : {product.description}</p>

      <Link href="/products" className="text-blue-600">
        ← Back to Products
      </Link>
    </div>
  );
}
