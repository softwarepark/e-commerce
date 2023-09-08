import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <section className="mx-auto flex flex-col items-center px-5 my-7">
      Homepage
      <Link href="/products">
        <button className="px-2 py-1 bg-slate-300 rounded">
          Go to product
        </button>
      </Link>
    </section>
  );
}
