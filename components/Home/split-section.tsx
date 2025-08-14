import Image from "next/image";
import Link from "next/link";

export default function SplitImage() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="grid min-h-[100vh] grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <div className="relative flex">
          <Image
            height={500}
            width={500}
            alt=""
            src="https://images.unsplash.com/photo-1660282799218-a70843acca61?q=80&w=893&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12">
            <h2 className="text-lg text-white/75 font-playfair font-semibold
            ">
              The Solitaire Signature
            </h2>
            <p className="mt-1 text-2xl font-medium text-white font-serif">
              Discover brilliance perfected over generations.
            </p>
            <Link
              href="/products"
              className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Explore Collection
            </Link>
          </div>
        </div>
        <div className="relative flex">
          <Image
            height={500}
            width={500}
            alt=""
            src="https://images.unsplash.com/photo-1729090044080-07d05aadcb0f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12">
            <h2 className="text-lg font-semibold text-white/75 font-playfair">
              The Heritage Gold Line
            </h2>
            <p className="mt-1 text-2xl font-medium text-white font-serif">
              Crafted in pure 22K gold, inspired by royal traditions.
            </p>
            <Link
              href="/products"
              className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
