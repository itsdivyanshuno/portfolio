import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-center text-white">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="mt-4 text-gray-400">Page not found</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-white px-6 py-3 text-sm text-black transition-opacity hover:opacity-90"
      >
        Go Home
      </Link>
    </main>
  );
}