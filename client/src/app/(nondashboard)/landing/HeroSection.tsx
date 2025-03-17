"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setFilters } from "@/state";
import { useGetAuthUserQuery } from "@/state/api";

const HeroSection = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { data: authUser } = useGetAuthUserQuery();

  const placeholderTexts = useMemo(
    () => [
      "Find your perfect home...",
      "Type a location to start searching...",
      "Search by city, neighborhood or address...",
    ],
    []
  );

  const [placeholder, setPlaceholder] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect logic
  useEffect(() => {
    const currentText = placeholderTexts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setPlaceholder((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setPlaceholder("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % placeholderTexts.length);
      }, 1000);
    }
  }, [charIndex, textIndex, placeholderTexts]);

  const handleLocationSearch = async () => {
    if (!authUser) {
      router.push("/signin");
      return;
    }

    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) return;

    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          trimmedQuery
        )}.json?access_token=${
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        }&fuzzyMatch=true`
      );
      const data = await response.json();

      if (data.features?.length > 0) {
        const [lng, lat] = data.features[0].center;

        dispatch(
          setFilters({
            location: trimmedQuery,
            coordinates: [lng, lat],
          })
        );

        router.push(`/search?location=${trimmedQuery}&lat=${lat}&lng=${lng}`);
      }
    } catch (error) {
      console.error("Error searching location:", error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLocationSearch();
    }
  };

  return (
    <div className="relative h-screen">
      <Image
        src="/landing-splash.jpg"
        alt="Rentiful Rental Platform Hero Section"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
        >
          <div className="max-w-4xl mx-auto px-16 sm:px-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Start your journey to finding the perfect place to call home
            </h1>
            <p className="text-xl text-white mb-8">
              Explore our wide range of rental properties tailored to fit your
              lifestyle and needs!
            </p>

            <div className="flex justify-center">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
              />
              <Button
                onClick={handleLocationSearch}
                className="bg-secondary-600 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-500 h-12"
              >
                Search
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
