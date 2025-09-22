import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="topNav">
        <div className="text-lg font-semibold text-white p-4">CommonGround</div>
        <div>
          <a className="active" href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
        </div>
      </div>
      <div className="flex justify-center p-4 h-screen">
        <form>
            <label>I'm looking for:</label>
            <input className="border" type="text"></input>
        </form>
        </div>
    </div>
  );
}
