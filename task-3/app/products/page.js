import Link from 'next/link'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch products.')
  }
  return res.json()
}
export default async function Products() {
  const products = await getProducts()
  return (
    <div className='p-10'>
      <h1 className='text-3xl font-bold mb-6'>Products : </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className='border p-4 rounded hover:shadow'
          >
            <h2 className='font-semibold'>{product.title}</h2>
            <p className='mt-2'>Rs. {product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
