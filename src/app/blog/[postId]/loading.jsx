const PostLoading = () => (
  <div className="min-h-screen py-10 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto animate-pulse">
      <div className="h-5 w-28 rounded bg-slate-800/60 mb-8" />

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="h-12 w-full rounded-lg bg-slate-800/60" />
          <div className="h-12 w-2/3 rounded-lg bg-slate-800/60" />
          <div className="flex gap-6 pb-8 border-b border-white/10">
            <div className="h-8 w-32 rounded-full bg-slate-800/60" />
            <div className="h-8 w-40 rounded-full bg-slate-800/60" />
          </div>
        </div>

        <div className="aspect-video w-full rounded-2xl bg-slate-800/60" />

        <div className="space-y-3 pt-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className={`h-4 rounded bg-slate-800/60 ${index % 4 === 3 ? "w-2/3" : "w-full"}`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default PostLoading;
