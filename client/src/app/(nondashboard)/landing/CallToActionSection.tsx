"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <div className="relative py-24">
      <Image
        src="/landing-call-to-action.jpg"
        alt="Rentiful Search Section Background"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0 md:mr-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Find Your Dream Rental Property
            </h2>
          </div>
          <div>
            <p className="text-white mb-6 max-w-md mx-auto md:mx-0">
              Discover a wide range of rental properties in your desired
              location.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-block text-primary-700 bg-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-500 hover:text-primary-50 transition-colors duration-200"
              >
                Search
              </button>
              <Link
                href="/signup"
                className="inline-block text-white bg-secondary-600 rounded-lg px-6 py-3 font-semibold hover:bg-secondary-500 transition-colors duration-200"
                scroll={false}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToActionSection;
