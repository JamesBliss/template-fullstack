"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <h2 className="mb-12 font-serif text-4xl">Something went wrong.</h2>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  );
}
