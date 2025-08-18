"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DiscoverSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-16 bg-white mb-16"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-gray-800 mb-4">
            Discover.
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-medium">
            Find your Dream Rental Property Today!
          </p>
          <p className="mt-6 text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Searching for your dream rental property has never been easier. With
            our user-friendly search feature, you can quickly find the perfect
            home that meets all your needs. Start your search today and discover
            your dream rental property!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
          {[
            {
              imageSrc: "/landing-icon-wand.png",
              title: "Search for Properties",
              description:
                "Browse through our extensive collection of rental properties in your desired location.",
            },
            {
              imageSrc: "/landing-icon-calendar.png",
              title: "Book Your Rental",
              description:
                "Once you've found the perfect rental property, easily book it online with just a few clicks.",
            },
            {
              imageSrc: "/landing-icon-heart.png",
              title: "Enjoy your New Home",
              description:
                "Move into your new rental property and start enjoying your dream home.",
            },
          ].map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DiscoverCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="px-6 py-12 shadow-lg rounded-lg bg-primary-50 h-72">
    <div className="bg-primary-700 p-3 rounded-full mb-6 h-12 w-12 mx-auto flex items-center justify-center">
      <Image
        src={imageSrc}
        width={24}
        height={24}
        className="w-6 h-6"
        alt={title}
      />
    </div>
    <h3 className="text-xl font-medium text-gray-800 mb-3">{title}</h3>
    <p className="text-base text-gray-500 leading-relaxed">{description}</p>
  </div>
);

export default DiscoverSection;
