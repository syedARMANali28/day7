
"use client";

import { useCart } from "@/hooks/CartContext";
import Image from "next/image";
import Link from "next/link";

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
  slug: string | null;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const SingleProductUI = ({ product, relatedProducts }: { product: Product; relatedProducts: Product[] }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.imageUrl,
      quantity: 1,
    };

    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  return (
    <main className="text-gray-600 body-font max-w-screen-xl mx-auto md:px-20 px-2">
      {/* ✅ Product Details Section */}
      <div className="py-24 mx-auto flex flex-col md:flex-row gap-8">
        {/* ✅ Product Image */}
        <Image
          src={product?.imageUrl || "/fallback-image.jpg"} // ✅ Fallback image
          alt={product?.title || "Product Image"}
          width={400}
          height={400}
          className="rounded-lg md:w-1/2"
        />

        {/* ✅ Product Details */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="text-gray-900 text-[60px] title-font font-bold mb-1 text-primary">{product?.title}</h1>
          <span className="text-[14px] p-2 bg-[#007580] mr-auto text-white rounded-full title-font font-medium text-gray-900">
            ${product?.price} USD
          </span>

          <hr />

          <p className="leading-relaxed">{product?.description}</p>

          {/* ✅ Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 mr-auto text-white bg-[#007580] border-0 py-4 px-8 text-[16px] focus:outline-none rounded-lg hover:bg-opacity-80 transition-all"
          >
            <Image
              src="/images/buy2.png"
              alt="Cart Icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            Add to Cart
          </button>
        </div>
      </div>

      {/* ✅ Suggested Products Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Suggested Products</h2>

        {/* ✅ Check if there are related products */}
        {relatedProducts?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts
              .filter((item) => item.slug && item.id) // ✅ Ensure slug and id are valid
              .map((item, index) => (
                <Link key={item.slug || `${item.id}-${index}`} href={`/singleproduct/${item.slug}`} className="block">
                  <div className="border rounded-lg overflow-hidden shadow-md bg-white">
                    <Image
                      src={item.imageUrl || "/fallback-image.jpg"} // ✅ Fallback image
                      alt={item.title || "Related Product"}
                      width={180}
                      height={180}
                      className="rounded-lg"
                    />
                    <h3 className="text-lg font-semibold px-4 py-2">{item.title}</h3>
                    <p className="text-gray-500 px-4 pb-4">${item.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg">No related products available.</p>
        )}
      </section>
    </main>
  );
};

export default SingleProductUI;

