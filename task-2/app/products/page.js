import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Samsung Galaxy S25 ultra",
    storage: "12GB / 256 GB",
    price: "1,22,999",
  },
  {
    id: 2,
    title: "Google Pixel 9 pro XL",
    storage: "16GB / 256 GB",
    price: "1,04,999",
  },
  {
    id: 3,
    title: "iPhone 16 Pro Max",
    storage: "8GB / 256 GB",
    price: "1,34,900",
  },
];
export default function Products() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Products : </h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="border p-4 rounded hover:bg-gray-100 hover:text-zinc-700"
          >
            <Link href={`/products/${product.id}`}>
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-xl font-semibold text-zinc- 700">
                {product.storage}
              </p>
              <p>Rs. {product.price}/-</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
