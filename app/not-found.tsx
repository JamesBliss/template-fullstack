import Header from "@components/Layout.Header";

export default async function NotFound() {
  return (
    <main className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="flex w-full items-center justify-center border-t border-primary px-4">
        <div>
          <h2 className="font-serif text-6xl font-bold">Not Found</h2>
          <p className="text-sm">Could not find page</p>
        </div>
      </div>
    </main>
  );
}
