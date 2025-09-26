"use client"
import Link from "next/link";

export default function BottomLinks(){
    return(
    <div className="w-auto h-auto justify-center bg-gray-700 text-white">
        <div className="columns-2 p-4">
            <div className = "flex flex-col justify-center items-center">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/login">Login</Link>
            </div>
            <div className = "flex flex-col justify-center items-center">
                <Link href="/blog">Blog</Link>
                <Link href="/hosts">For Hosts</Link>
                <Link href="/renters">For Renters</Link>
            </div>
        </div>
    </div>
    )
}