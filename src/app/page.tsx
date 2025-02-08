
"use client"; // ✅ Using Client-side Fetching

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

// 🟢 Interfaces for fetched data
interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  image: string;
  slug: string;
}

interface Category {
  _id: string;
  title: string;
  image: string;
}

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [galleryProducts, setGalleryProducts] = useState<Product[]>([]);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // 🟡 Loading state

  // 🟢 Fetching data from Sanity (Client Side)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const featuredQuery = `*[_type == "products" && "featured" in tags][0...4]{
          _id, title, price, priceWithoutDiscount, badge,
          "image": image.asset->url, "slug": slug.current
        }`;

        const categoriesQuery = `*[_type == "categories"][0...3]{
          _id, title, "image": image.asset->url
        }`;

        const galleryQuery = `*[_type == "products" && "gallery" in tags][0...5]{
          _id, title, "image": image.asset->url
        }`;

        const newProductsQuery = `*[_type == "products"] | order(_createdAt desc)[0...8]{
          _id, title, price, priceWithoutDiscount, badge,
          "image": image.asset->url, "slug": slug.current
        }`;

        const [featured, categories, gallery, newProducts] = await Promise.all([
          client.fetch(featuredQuery),
          client.fetch(categoriesQuery),
          client.fetch(galleryQuery),
          client.fetch(newProductsQuery),
        ]);

        setFeaturedProducts(featured);
        setCategories(categories);
        setGalleryProducts(gallery);
        setNewProducts(newProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // 🔴 Stop loading when data is fetched
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* 🔵 Static Section (Banner) */}
      <div className="w-full flex justify-center">
        <div className="bg-[#F0F2F3] w-full max-w-[1321px] h-auto md:h-[850px] flex flex-col md:flex-row items-center px-4 md:px-0 gap-6 md:gap-0">
          <div className="w-full md:w-1/2 p-4 md:pl-20 text-center md:text-left flex flex-col items-center md:items-start">
            <p className="text-gray-500 text-lg">WELCOME TO CHAIRY</p>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-snug">
              Best Furniture Collection For Your Interior.
            </h1>
            <Link href="/productpage">
              <button className="mt-4 md:mt-8 bg-[#029FAE] hover:bg-[#307278] text-white font-bold py-2 px-6 rounded">
                Shop Now <span className="ml-2">➔</span>
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end p-4 md:pr-16">
            <Image width={434} height={434} src="/images/chair.png" alt="Chair" className="w-full max-w-[300px] md:max-w-[434px] h-auto" />
          </div>
        </div>
      </div>

      {/* 🔵 Static Section (Logos) */}
      <div className="flex flex-wrap gap-8 md:gap-24 justify-center items-center my-8">
        {["zapier", "pipedrive", "bank", "z", "burnt", "doc", "moz"].map((logo, index) => (
          <Image key={index} src={`/images/${logo}.png`} alt="logo" width={100} height={100} className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
        ))}
      </div>

      {/* 🟢 Featured Products */}
      <h1 className="text-gray-900 font-medium text-5xl mb-6 text-center">Featured Products</h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="container px-5 py-12 mx-auto flex flex-wrap justify-center">
          {featuredProducts.map((product) => (
            <div key={product._id} className="p-4 lg:w-1/4 md:w-1/2 w-full flex justify-center">
              <div className="relative rounded-lg border overflow-hidden shadow-md w-full max-w-[280px]">
                {product.badge && (
                  <span className="absolute top-2 left-2 text-xs text-white font-bold px-2 py-1 rounded bg-orange-500">
                    {product.badge}
                  </span>
                )}
                <Link href={`/singleproduct/${product.slug}`} className="block relative w-full h-[312px]">
                  <Image src={product.image} alt={product.title} width={280} height={312} className="object-cover w-full h-full" />
                </Link>
                <div className="mt-4 text-center">
                  <h2 className="text-[#007580] title-font font-medium">{product.title}</h2>
                  <p className="mt-1 flex justify-center items-center gap-2">
                    <span className="font-bold">${product.price}</span>
                    {product.priceWithoutDiscount && <span className="line-through text-gray-500 text-sm">${product.priceWithoutDiscount}</span>}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 🟢 Categories Section (Fetched) */}
      <h1 className="text-gray-900 font-medium text-5xl mb-6 text-center">Top Categories</h1>
      <div className="container px-5 py-12 mx-auto flex flex-wrap justify-center">
        {categories.map((category) => (
          <div key={category._id} className="p-4 sm:w-1/3 w-full">
            <Image src={category.image} alt={category.title} width={424} height={424} className="object-cover w-full h-[424px]" />
          </div>
        ))}
      </div>


    {/* 🟢 Gallery Section (Fetched from Sanity) */}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-3xl font-medium title-font text-gray-900 mb-4">
        Gallery
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      {/* Left Section: Large Image */}
      <div className="lg:w-1/2 sm:w-full p-4 flex justify-center">
        <div className="flex relative w-full max-w-[648px]">
          {galleryProducts.length > 0 ? (
            <Image
              src={galleryProducts[0].image} // First gallery product (big image)
              alt={galleryProducts[0].title}
              width={648}
              height={648}
              className="object-cover object-center w-full h-[648px]"
            />
          ) : (
            <Image
              src="/images/orange.png" // Fallback Image
              alt="Gallery Fallback"
              width={648}
              height={648}
              className="object-cover object-center w-full h-[648px]"
            />
          )}
        </div>
      </div>

      {/* Right Section: 4 Small Images in a Grid */}
      <div className="lg:w-1/2 sm:w-full p-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          {galleryProducts.slice(1, 5).map((product, index) => (
            <div key={product._id} className="flex relative">
              <Image
                src={product.image}
                alt={product.title}
                width={312}
                height={312}
                className="object-cover object-center w-[312px] h-[312px]"
              />
            </div>
          ))}

          {/* 🟡 Fallback Images (if less than 4 images are fetched) */}
          {galleryProducts.length < 5 &&
            [...Array(4 - galleryProducts.length)].map((_, index) => (
              <div key={index} className="flex relative">
                <Image
                  src={`/images/beige.png`} // Fallback Image
                  alt="Gallery Fallback"
                  width={312}
                  height={312}
                  className="object-cover object-center w-[312px] h-[312px]"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
</section>


    {/* 🟢 last thing Section (Fetched) */}
<h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-5xl mb-2 sm:mb-0 px-48">
  New Arrivals
</h1>
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap justify-center -m-4">
    {loading ? (
      <p className="text-center text-gray-500">Loading latest products...</p>
    ) : (
      newProducts.map((product) => (
        <div key={product._id} className="lg:w-1/4 md:w-1/2 w-full p-4 flex justify-center">
          <div className="relative rounded-lg border overflow-hidden shadow-md w-full max-w-[280px]">
            {product.badge && (
              <span className="absolute top-2 left-2 text-xs text-white font-bold px-2 py-1 rounded bg-orange-500">
                {product.badge}
              </span>
            )}
            <Link href={`/singleproduct/${product.slug}`} className="block relative w-full h-[312px]">
              <Image src={product.image} alt={product.title} width={280} height={312} className="object-cover object-center w-full h-full" />
            </Link>
            <div className="mt-4 text-center">
              <h2 className="text-[#007580] title-font font-medium">{product.title}</h2>
              <p className="mt-1 flex justify-center items-center gap-2">
                <span className="font-bold">${product.price}</span>
                {product.priceWithoutDiscount && (
                  <span className="line-through text-gray-500 text-sm">${product.priceWithoutDiscount}</span>
                )}
              </p>
              <button className="mt-2 bg-gray-200 border border-gray-300 text-gray-600 font-bold py-1 px-4 rounded hover:bg-[#007580] hover:text-white transition duration-200 flex items-center justify-center">
                🛒
              </button>
            </div>
          </div>
        </div>
      ))
    )}
  </div>
</div>
    </div>
  );
}
