import React from "react";
import Link from "next/link";
import Image from "next/image";
import { listings } from "@/data/listings";
import ListingCard from "@/components/cards";

export default function Home() {
  return (
    <div>
      <div className="topNav flex justify-between items-center bg-gray-800">
        <div className="text-lg font-semibold text-white p-4">CommonGround</div>
        <div className="space-x-4 text-white p-4">
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
          
      <div className="relative w-full h-[500px]">
        <Image
          src="/home.jpg"
          alt="Marketplace"
          fill
          className="object-cover"
        />
        
        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 ">
          <h1 className="text-white text-3xl font-bold">Welcome to CommonGround</h1>
          <form>
            <label className="text-white">I'm looking for: </label>
            <input className=" text-black rounded-full bg-white w-60" type="text" placeholder="University room"></input>
        </form>
        </div>
      </div>
        
      <div className="bg-black">
      <h1 className="text-white text-3xl font-mono font-extrabold ml-8 p-4">Listings near me 📍</h1>

      <div className="flex flex-wrap gap-6 justify-center p-8">
        {listings.map((listing) => (
        <ListingCard key={listing.id} {...listing} />
        ))}
       </div>
      </div>
    </div>
  );
}
