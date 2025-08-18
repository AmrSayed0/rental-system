"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useGetAuthUserQuery } from "@/state/api";
import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-bold text-center mb-12 max-w-3xl mx-auto leading-tight"
        >
          Quickly find the home you want using our effective search filters!
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[0, 1, 2].map((index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                imageSrc={`/landing-search${3 - index}.png`}
                title={
                  [
                    "Trustworthy and Verified Listings",
                    "Browse Rental Listings with Ease",
                    "Simplify with Advanced Search",
                  ][index]
                }
                description={
                  [
                    "Discover the best rental options with user reviews and ratings.",
                    "Get access to user reviews and ratings for a better understanding of rental options.",
                    "Find trustworthy and verified rental listings to ensure a hassle-free experience.",
                  ][index]
                }
                linkText={["Explore", "Search", "Discover"][index]}
                linkHref={["/search", "/search", "/search"][index]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}: {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) => {
  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();

  // Redirect to sign in page if user is not authenticated
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!authUser) {
      event.preventDefault();
      router.push("/signin");
    }
  };

  return (
    <div className="text-center">
      <div className="p-4 rounded-lg mb-6 flex items-center justify-center h-48">
        <Image
          src={imageSrc}
          width={400}
          height={400}
          className="w-full h-full object-contain"
          alt={title}
        />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="mb-6 text-gray-600 leading-relaxed">{description}</p>
      <Link
        href={linkHref}
        onClick={handleLinkClick}
        className="inline-block border border-gray-300 rounded-lg px-6 py-3 hover:bg-gray-100 transition-colors duration-200"
        scroll={false}
      >
        {linkText}
      </Link>
    </div>
  );
};

export default FeaturesSection;
