"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { projects } from "@/data/projects";

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 60000);
    return () => clearInterval(id);
  }, []);

  const current = projects[index];

  return (
    <>
      <Header />
      <main className="min-h-screen w-full">
        <div className="relative h-screen w-full overflow-hidden">
          {/* Background image */}
          <Image
            src={current.image || "/window.svg"}
            alt={current.title}
            fill
            priority
            className="object-cover opacity-80"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <section className="max-w-4xl mx-auto px-6 text-center">
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white font-serif">
                {current.title}
              </h1>
              <p className="mt-4 text-base md:text-lg text-zinc-200 font-sans">
                {current.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-100">
                {current.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full border border-zinc-300/40 bg-black/20 backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-sm">
                {current.href && (
                  <Link href={current.href} className="text-white underline underline-offset-4 hover:text-zinc-100">
                    Voir le projet
                  </Link>
                )}
                {current.repo && (
                  <Link href={current.repo} target="_blank" className="text-white underline underline-offset-4 hover:text-zinc-100">
                    Voir le code
                  </Link>
                )}
              </div>
            </section>
          </div>

          {/* Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {projects.map((p, i) => (
              <button
                key={p.id}
                aria-label={`Aller au projet ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === index ? "bg-white w-6" : "bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>

          {/* Prev/Next */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              aria-label="Précédent"
              onClick={() => setIndex((prev) => (prev - 1 + projects.length) % projects.length)}
              className="mx-4 rounded-full bg-black/30 text-white px-3 py-2 backdrop-blur-sm hover:bg-black/40"
            >
              ←
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              aria-label="Suivant"
              onClick={() => setIndex((prev) => (prev + 1) % projects.length)}
              className="mx-4 rounded-full bg-black/30 text-white px-3 py-2 backdrop-blur-sm hover:bg-black/40"
            >
              →
            </button>
          </div>
        </div>
      </main>
      </>
  );
}