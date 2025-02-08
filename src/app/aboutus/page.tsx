import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <main className="w-full py-16 sm:py-24 max-w-screen-xl mx-auto px-4 sm:px-6">
      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
  <div className=" text-white p-8 md:p-12 flex flex-col justify-center h-full bg-[#398e95] rounded-xl">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 ">
      About Us - Comforty
    </h1>
    <p className="text-lg mb-8 ">
      At Comforty, we believe that the right chair can transform your
      space and elevate your comfort. Specializing in ergonomic design,
      premium materials, and modern aesthetics, we craft chairs that
      seamlessly blend style with functionality.
    </p>
    <Link href="/productpage" passHref>
    <button className="inline-block bg-[#359ea8] text-secondary px-6 py-3 rounded-md transition-colors hover:bg-[#2a7178] w-[200px] ">
      View Collection
    </button>
    </Link>
  </div>
  <div className="relative min-h-[400px] flex">
    <img
      src="/images/beige.png"
      alt="Minimalist chair"
      className="object-cover w-full h-full"
    />
  </div>
</section>


      {/* What Makes Us Different */}
      <section className="py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 ">
          What Makes Our Brand Different
        </h2>
        <div className=" bg-[#f9f9f9] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              img: "/images/delivery.png",
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard.",
            },
            {
              img: "/images/check.png",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship.",
            },
            {
              img: "/images/Purchase.png",
              title: "Unbeatable prices",
              desc: "For our materials and quality, you won't find better prices anywhere.",
            },
            {
              img: "/images/Sprout.png",
              title: "Recycled packaging",
              desc: "We use 100% recycled materials to ensure our footprint is more manageable.",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={item.img} alt={item.title} className="h-16 w-16 mb-4" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Our Popular Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { img: "/images/sofa.png", name: "The Poplar Suede Sofa", price: "$99.00" },
            { img: "/images/Parent.png", name: "The Dandy Chair", price: "$99.00" },
            { img: "/images/dandy.png", name: "The Dandy Chair", price: "$99.00" },
          ].map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64">
                <img src={product.img} alt={product.name} className="object-cover w-full h-full" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
