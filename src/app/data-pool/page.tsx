"use client"

import Link from "next/link";

export default function DataPool() {
    let photos = Array.from({ length: 6 }, (_, i) => i + 1);

    return (
        <section className="cards-container">
            ----------
            {photos.map((id) => (
                <Link className="card" key={id} href={`/data-pool/photos/${id}`}>
            {id}
        </Link>
                ))}
        </section>)
}