import { client } from '@/sanity/lib/client'
import React from 'react'

interface ProductProps {
    title: string;
    price: number;
    priceWithoutDiscount: number;
    badge: string;
    description: string;
    imageUrl: string;
    inventory: number;
    tags: string[];
    category: {
        title: string;
    };
    id: string;
}

async function page() {
  const response = `*[_type == "products" ]{
    title,
    _id,
    price,
    "priceWithoutDiscount": priceWithoutDiscount,
    badge,
    "imageUrl": image.asset->url,
    category->{
      title
    },
    description,
    inventory,
    tags
  }`

  const products: ProductProps[] = await client.fetch(response)

  return (
    <div>
      {products.map((product: ProductProps) => (
        <div key={product.id}> {/* key should be unique and placed correctly here */}
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img src={product.imageUrl} alt={product.title} />
          <p>Price: {product.price}</p>
          <p>Price without discount: {product.priceWithoutDiscount}</p>
          <p>Badge: {product.badge}</p>
          <p>Category: {product.category.title}</p>
          <p>Inventory: {product.inventory}</p>
          <p>Tags: {product.tags.join(', ')}</p>
        </div>
      ))}
    </div>
  )
}

export default page
