import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export default async function Home() {
  return (
    <div className="flex min-h-[calc(100dvh-5rem)] w-full flex-col justify-between">
      <section className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-12 sm:px-8 lg:py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Copy */}
          <div className="max-w-xl lg:col-span-7">
            <p className="mb-6 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ink">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              AmanLog Journal
            </p>

            <h1 className="font-display text-5xl leading-[1.02] tracking-[-0.02em] text-ink sm:text-6xl lg:text-7xl font-bold">
              Welcome to Aman<span className="text-accent">Log</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink sm:text-xl">
              Discover stories, thinking, and expertise from writers on any topic. A modern publication for curious minds.
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link
                href="/createPost"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-accent-hover active:scale-[0.98]"
              >
                Create Post
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-7 py-3.5 text-sm font-semibold text-ink shadow-sm transition-all duration-200 hover:border-ink hover:bg-ink/[0.02] active:scale-[0.98]"
              >
                Browse Blogs
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[19rem] sm:max-w-[22rem] lg:max-w-[24rem]">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2.25rem] border border-line"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-sm">
                <Image
                  fill
                  src="/landing.jpeg"
                  alt="Aman Image"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 24rem, 384px"
                  className="object-cover"
                  preload
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
