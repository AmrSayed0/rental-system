"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600">Oops! Page not found.</p>
        <p className="text-gray-500 mt-2">
          Redirecting to home in 5 seconds...
        </p>
        <Link href="/">
          <span className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white shadow-lg hover:bg-blue-700">
            Go Home Now
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
