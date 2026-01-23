async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch products.')
  }

  return res.json()
}
export default async function ProductDetails({ params }) {
  const { id } = await params
  const product = await getProduct(id)
  return (
    <div className='p-10'>
      <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
      <p className='mb-2 text-lg'>₹ {product.price}</p>
      <p className='mb-6'>{product.description}</p>

      <p className='text-sm text-gray-500'>Category: {product.category}</p>
    </div>
  )
}
