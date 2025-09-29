import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/next.svg"
            alt="Logo"
            width={100}
            height={24}
            className="dark:invert"
          />
        </div>
        <nav className="flex items-center gap-6">
          <Link 
            href="/login" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-foreground text-background px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
