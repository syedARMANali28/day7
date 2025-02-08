import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import SingleProductUI from "@/app/components/SingleProductUI"; // ✅ Client Component

interface Product {
  id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  description: string;
  imageUrl: string;
  inventory: number;
  category: { title: string } | null;
  slug: string;
}

interface PageProps {
  params: Promise<{ slug: string }>; // ✅ Ensure params is treated as async
}

// ✅ Ensure params is awaited before usage
export default async function SingleProductPage({ params }: PageProps) {
  const { slug } = await params; // ✅ Await params before using

  if (!slug) return notFound(); // ✅ Extra validation

  // ✅ Fetch product by slug from Sanity
  const query = `
    *[_type == "products" && slug.current == $slug][0] {
      _id, title, price, priceWithoutDiscount, badge, description, inventory, 
      "imageUrl": image.asset->url, category->{ title }, "slug": slug.current
    }
  `;

  const product: Product | null = await client.fetch(query, { slug });

  if (!product) return notFound();

  // ✅ Fetch related products (excluding the current one)
  const relatedQuery = `
    *[_type == "products" && slug.current != $slug][0...4] {
      _id, title, price, "imageUrl": image.asset->url, "slug": slug.current
    }
  `;

  const relatedProducts: Product[] = await client.fetch(relatedQuery, { slug });

  return <SingleProductUI product={product} relatedProducts={relatedProducts} />;
}
