const CardSkeleton = () => (
  <div className="w-full max-w-[380px] rounded-2xl overflow-hidden border border-line bg-surface animate-pulse">
    <div className="h-[220px] bg-line/60" />
    <div className="p-6 space-y-4">
      <div className="h-3 w-24 rounded bg-line/70" />
      <div className="h-6 w-4/5 rounded bg-line/70" />
      <div className="h-4 w-full rounded bg-line/60" />
      <div className="h-4 w-11/12 rounded bg-line/60" />
      <div className="h-4 w-2/3 rounded bg-line/60" />
    </div>
  </div>
);

const BlogLoading = () => (
  <div className="min-h-screen py-10 relative">
    <div className="text-center mb-16 space-y-4 animate-pulse">
      <div className="mx-auto h-12 w-72 rounded-lg bg-line/60" />
      <div className="mx-auto h-5 w-96 max-w-full rounded bg-line/60" />
    </div>

    <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {Array.from({ length: 6 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  </div>
);

export default BlogLoading;
