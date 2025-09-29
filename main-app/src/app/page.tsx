import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to Next.js App
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          A modern web application with authentication features built using Next.js and TypeScript.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium text-lg"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white px-6 py-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium text-lg"
          >
            Sign In
          </Link>
        </div>
        <div className="mt-12">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
      </div>
    </main>
  );
}
