
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export default async function Home() {
  return (
    <div className="flex min-h-[calc(100dvh-5rem)] w-full flex-col justify-between">
      <section className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-12 sm:px-8 lg:py-16">
        <div className="grid w-full items-center gap-8 md:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="text-center md:text-left">
            <h1 className="text-left text-4xl font-bold leading-[1.02] tracking-[-0.02em] text-ink sm:text-6xl lg:text-7xl">
              Start writing your{" "}
              <span className="relative inline-block text-ink">
                blogs
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-[0.16em] left-0 h-[0.14em] w-full overflow-visible text-accent"
                >
                  <path
                    d="M2 8C12 4 19 8 29 5S47 8 57 5s18 3 27 0 12-1 14 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 10c13-2 20 1 32-2s22 2 34-1 18 0 25-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.65"
                  />
                </svg>
              </span>{" "}
              <span className="text-accent">✍️</span>{" "}for free
            </h1>

            <div className="mt-9 flex flex-col justify-center gap-3.5 sm:flex-row sm:items-center md:justify-start">
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

          <div className="relative mx-auto aspect-[3/2] w-full max-w-[40rem]">
            <Image
              fill
              src="/blog-mascot-gpt.png"
              alt="A cheerful writing mascot holding a pencil"
              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 55vw, 640px"
              className="object-contain -scale-x-100"
              quality={100}
              preload
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
