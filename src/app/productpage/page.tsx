
"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useCart } from "@/hooks/CartContext"; // ✅ Import Cart Context

interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  slug: string;
  category: { title: string } | null;
}

const categories = ["All", "Desk Chair", "Wooden Chair", "Wing Chair"];

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const { dispatch } = useCart(); // ✅ Use Cart Context

  // ✅ Fetch products from Sanity
  useEffect(() => {
    async function fetchProducts() {
      try {
        const query = `*[_type == "products"]{
          _id, title, price, "imageUrl": image.asset->url, "slug": slug.current, category->{ title }
        }`;
        const data: Product[] = await client.fetch(query);
        console.log("Fetched products:", data);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // ✅ Filter products by category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category?.title === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5">
          {/* ✅ Header & Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">All Products</h1>

            {/* ✅ Category Filter */}
            <div className="flex space-x-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded text-sm font-medium transition ${
                    selectedCategory === category
                      ? "bg-[#007580] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* ✅ Loading State */}
          {loading ? (
            <p className="text-center text-gray-700 text-lg font-semibold">Loading products...</p>
          ) : (
            <div className="w-full flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
    {filteredProducts.map((product) => (
      <div key={product.slug} className="border shadow-md w-full max-w-[320px] flex flex-col mx-auto">
        {/* ✅ Clickable Product Card */}
        <Link href={`/singleproduct/${product.slug}`}>
          <div className="w-full">
            <img src={product.imageUrl} alt={product.title} className="w-full h-[312px] object-cover" />
          </div>
          <div className="px-4 py-3">
            <h3 className="text-gray-500 text-xs tracking-widest uppercase mb-1">
              {product.category?.title || "No Category"}
            </h3>
            <h2 className="text-gray-900 text-lg font-medium">{product.title}</h2>
          </div>
        </Link>

        {/* ✅ Price & Add to Cart Button (Larger button) */}
        <div className="px-4 py-3 flex items-center justify-between">
          <span className="text-lg font-bold text-[#007580]">${product.price}</span>
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: { id: product.slug, name: product.title, price: product.price, quantity: 1, image: product.imageUrl },
              })
            }
            className="bg-[#007580] text-white px-4 py-2 rounded-md shadow-md hover:bg-emerald-600 transition-all ease-in-out duration-200 text-base font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

          )}
        </div>
      </section>
    </div>
  );
}
