"use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useGetAuthUserQuery } from "@/state/api";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "aws-amplify/auth";
import { Bell, MessageCircle, Plus, Search, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDashboardPage =
    pathname.includes("/managers") || pathname.includes("/tenants");

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full z-50 shadow-xl"
        style={{ height: `${NAVBAR_HEIGHT}px` }}
      >
        <div className="flex justify-between items-center w-full py-3 px-4 sm:px-8 bg-primary-700 text-white">
          <div className="flex items-center gap-4 md:gap-6">
            {isDashboardPage && (
              <div className="md:hidden">
                <SidebarTrigger />
              </div>
            )}
            <Link
              href="/"
              className="cursor-pointer hover:!text-primary-300"
              scroll={false}
              onClick={closeMobileMenu}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="Rentiful Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div className="text-xl font-bold">
                  RENT
                  <span className="text-secondary-500 font-light hover:!text-primary-300">
                    IFUL
                  </span>
                </div>
              </div>
            </Link>
            {isDashboardPage && authUser && (
              <Button
                variant="secondary"
                className="md:ml-4 bg-primary-50 text-primary-700 hover:bg-secondary-500 hover:text-primary-50"
                onClick={() =>
                  router.push(
                    authUser.userRole?.toLowerCase() === "manager"
                      ? "/managers/newproperty"
                      : "/search"
                  )
                }
              >
                {authUser.userRole?.toLowerCase() === "manager" ? (
                  <>
                    <Plus className="h-4 w-4" />
                    <span className="hidden md:block ml-2">
                      Add New Property
                    </span>
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4" />
                    <span className="hidden md:block ml-2">
                      Search Properties
                    </span>
                  </>
                )}
              </Button>
            )}
          </div>
          {!isDashboardPage && (
            <p className="text-primary-200 hidden lg:block">
              Discover your perfect rental apartment with our advanced search
            </p>
          )}
          <div className="flex items-center gap-5">
            {authUser ? (
              <>
                <div className="relative hidden md:block">
                  <MessageCircle className="w-6 h-6 cursor-pointer text-primary-200 hover:text-primary-400" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-secondary-700 rounded-full"></span>
                </div>
                <div className="relative hidden md:block">
                  <Bell className="w-6 h-6 cursor-pointer text-primary-200 hover:text-primary-400" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-secondary-700 rounded-full"></span>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
                    <Avatar>
                      <AvatarImage src={authUser.userInfo?.image} />
                      <AvatarFallback className="bg-primary-600">
                        {authUser.userRole?.[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-primary-200 hidden md:block">
                      {authUser.userInfo?.name}
                    </p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white text-primary-700">
                    <DropdownMenuItem
                      className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100 font-bold"
                      onClick={() =>
                        router.push(
                          authUser.userRole?.toLowerCase() === "manager"
                            ? "/managers/properties"
                            : "/tenants/favorites",
                          { scroll: false }
                        )
                      }
                    >
                      Go to Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-primary-200" />
                    <DropdownMenuItem
                      className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100"
                      onClick={() =>
                        router.push(
                          `/${authUser.userRole?.toLowerCase()}s/settings`,
                          { scroll: false }
                        )
                      }
                    >
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                {/* Desktop Sign In/Sign Up Buttons */}
                <div className="hidden md:flex items-center gap-4">
                  <Link href="/signin">
                    <Button
                      variant="outline"
                      className="text-white border-white bg-transparent hover:bg-white hover:text-primary-700 rounded-lg"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      variant="secondary"
                      className="text-white bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-2 text-white hover:text-primary-300 transition-colors"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {!authUser && isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          ></div>

          {/* Mobile menu */}
          <div
            className="absolute top-0 right-0 w-64 h-full bg-primary-700 shadow-lg transform transition-transform duration-300 ease-in-out"
            style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
          >
            <div className="flex flex-col gap-4 p-6">
              <Link href="/signin" onClick={closeMobileMenu}>
                <Button
                  variant="outline"
                  className="w-full text-white border-white bg-transparent hover:bg-white hover:text-primary-700 rounded-lg"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" onClick={closeMobileMenu}>
                <Button
                  variant="secondary"
                  className="w-full text-white bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
